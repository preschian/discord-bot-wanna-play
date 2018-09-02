import { concat, find, size } from 'lodash'
import pemain from './pemain'

async function main(db, msg) {
  const channel = msg.channel.name
  const channel_id = msg.channel.id
  const { id, discriminator, username } = msg.author
  const current_data = { id, channel_id, channel, discriminator, username }

  await db.get(`${channel_id}`, async (err, val) => {
    if (err) {
      // first data
      if (err.notFound) {
        db.put(`${channel_id}`, [current_data])
        msg.channel.send(`si <@${id}> mau main di channel <#${channel_id}>`)
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

    await db.put(`${channel_id}`, update_data)
    msg.channel.send(`si <@${id}> mau main di channel <#${channel_id}>`)
  })
}

export default main
