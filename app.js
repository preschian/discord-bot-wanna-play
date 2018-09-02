require('now-env')

// setup discord
const Discord = require('discord.js')
const bot = new Discord.Client()

// setup simple db
const level = require('level')
let db = level('./data', { valueEncoding: 'json' })

const token = process.env.TOKEN
const { main, pemain, gg } = require('./commands/index')

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`)
})

bot.on('message', msg => {
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
    case '/destroy':
      if (process.env.NODE_ENV === 'development') bot.destroy()
      break
    default:
      break
  }
})

bot.login(token)

module.exports = () => 'aloha!'
