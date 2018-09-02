import { concat, find, size } from 'lodash'
import pemain from './pemain'

async function main(db, msg) {
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
      pemain(db, msg)
      return
    }

    const update_data = concat(val, current_data)

    await db.put('pemain', update_data)
    msg.reply(`mau main di channel ${channel}`)
  })
  // msg.channel.send(`@${username} mau main di channel ${channel}`)
}

export default main
