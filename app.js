import { format } from 'date-fns'
import id from 'date-fns/locale/id/index'
import { Client } from 'discord.js'
import level from 'level'
import cron from 'node-schedule'
import 'now-env'
import { gg, main, pemain, suara } from './commands/index'

const bot = new Client()
let db = level('./data', { valueEncoding: 'json' })

const http = require('http')
const token = process.env.TOKEN

bot.on('ready', function() {
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', async function(msg) {
  if (!msg.guild) return

  if (process.env.NODE_ENV === 'development' && msg.content === 'gg') {
    bot.destroy()
    process.exit(0)
  }

  if (msg.content.charAt(0) === '?') {
    if (msg.member.voiceChannel) {
      const con = await msg.member.voiceChannel.join()

      if (msg.content.length === 1) return

      suara(bot, con, msg, msg.content.substr(1))
    } else {
      msg.reply('kamu harus masuk saluran suara terlebih dahulu')
    }

    return
  }

  switch (msg.content) {
    case '!main':
      main(db, msg)
      break
    case '!pemain':
      pemain(db, msg)
      break
    case '!ajak':
      msg.channel.send(`ayo main oy~ @everyone`)
      break
    case '!gg':
      gg(db, msg)
      break
    case '!keluar':
      msg.member.voiceChannel.leave()
      break
    case '!tutup':
      if (parseInt(msg.author.id, 10) === 108152551244881920) {
        bot.destroy()
        process.exit(0)
      }
      break
    case '!perintah':
      msg.reply(`
      !main
      !pemain
      !ajak
      !gg
      !keluar
      `)
      break
    default:
      break
  }
})

bot
  .login(token)
  .then(async function() {
    const guild_id = '233142651132575744'
    const guild = await bot.guilds.get(guild_id)

    cron.scheduleJob('20 * * * *', function() {
      const gmt_7 = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
      const format_nama = `"Hari ${format(gmt_7, 'dddd', { locale: id })}"`
      console.log(format_nama)

      let not_exist = true

      guild.channels.find(function(val) {
        const find = val.name.includes('Hari')

        if (find) {
          val.setName(format_nama)
          not_exist = false
          return
        }

        not_exist = true
      })

      if (not_exist) {
        guild
          .createChannel(format_nama, 'voice', [
            {
              id: guild_id,
            },
          ])
          .then(val => console.log(val))
          .catch(err => console.log(err))
      }
    })
  })
  .catch(function(error) {
    console.log('error!', error)
  })

// open port
http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('aloha!')
    res.end()
  })
  .listen(8080)
