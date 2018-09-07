import { Client } from 'discord.js'
import level from 'level'
import 'now-env'
import { gg, main, pemain, suara } from './commands/index'

const bot = new Client()
let db = level('./data', { valueEncoding: 'json' })

const token = process.env.TOKEN

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', async msg => {
  if (!msg.guild) return

  if (process.env.NODE_ENV === 'development' && msg.content === 'gg') {
    bot.destroy()
    process.exit(0)
  }

  if (msg.content.charAt(0) === '?') {
    if (msg.member.voiceChannel) {
      const con = await msg.member.voiceChannel.join()

      if (msg.content.length === 1) return

      suara(bot, con, msg, parseInt(msg.content.substr(1)))
    } else {
      msg.reply('kamu harus masuk saluran suara terlebih dahulu')
    }

    return
  }

  switch (msg.content) {
    case '/main':
      main(db, msg)
      break
    case '/pemain':
      pemain(db, msg)
      break
    case '/ajak':
      msg.channel.send(`ayo main oy~ @everyone`)
      break
    case '/gg':
      gg(db, msg)
      break
    case '!leave':
      msg.member.voiceChannel.leave()
      break
    default:
      break
  }
})

bot.login(token)

export default () => 'aloha!'
