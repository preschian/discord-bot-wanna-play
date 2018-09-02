import { Client } from 'discord.js'
import level from 'level'
import 'now-env'
import { gg, main, pemain } from './commands/index'

const bot = new Client()
let db = level('./data', { valueEncoding: 'json' })

const token = process.env.TOKEN

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

export default () => 'aloha!'
