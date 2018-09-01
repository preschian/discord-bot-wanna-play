require('now-env')

const { concat, filter, find, size } = require('lodash')

const Discord = require('discord.js')
const bot = new Discord.Client()

var level = require('level')
var db = level('./data', { valueEncoding: 'json' })

const token = process.env.TOKEN

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

async function mauMain(msg) {
  const channel = msg.channel.name
  const { id, discriminator, username } = msg.author
  const current_data = { id, channel, discriminator, username }

  await db.get('pemain', async (err, val) => {
    if (err) {
      // first data
      if (err.notFound) {
        db.put('pemain', [current_data])
        msg.reply(`mau main di channel ${channel}`)
      }

      return
    }

    const isExist = size(find(val, current_data))

    if (isExist) {
      // msg.reply('ヘ(￣ω￣ヘ)')
      pemain(msg)
      return
    }

    const update_data = concat(val, current_data)

    await db.put('pemain', update_data)
    msg.reply(`mau main di channel ${channel}`)
  })
  // msg.channel.send(`@${username} mau main di channel ${channel}`)
}

async function pemain(msg) {
  const channel = msg.channel.name

  await db.get('pemain', async (err, val) => {
    if (err) {
      msg.reply('tidak ada pemain di channel ini')
      return
    }

    const filter_channel = filter(val, ['channel', channel])
    const get_username = filter_channel.map(u => `<@${u.id}>`).join(' ')

    if (filter_channel.length === 0) {
      msg.channel.send('tidak ada pemain di channel ini')
      return
    }

    msg.channel.send(`daftar pemain ${get_username.toString()}`)
  })
}

async function gg(msg) {
  const channel = msg.channel.name

  await db.get('pemain', async (err, val) => {
    if (err) return

    const update_channel = filter(val, c => c.channel !== channel)
    await db.put('pemain', update_channel)
    msg.channel.send(`udahan main di channel ${channel}`)
  })
}

bot.on('message', msg => {
  switch (msg.content) {
    case '/main':
      mauMain(msg)
      break
    case '/pemain':
      pemain(msg)
      break
    case '/ajak':
      msg.channel.send(`ayo main oy~ @everyone`)
      break
    case '/gg':
      gg(msg)
      break
    default:
      break
  }
})

bot.login(token)

module.exports = () => 'aloha!'
