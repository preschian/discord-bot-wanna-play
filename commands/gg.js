import { filter } from 'lodash'

async function gege(db, msg) {
  const channel_id = msg.channel.id

  await db.get('pemain', async (err, val) => {
    if (err) return

    const update_channel = filter(val, c => c.channel_id !== channel_id)
    await db.put('pemain', update_channel)
    msg.channel.send(`udahan main di channel <#${channel_id}>`)
  })
}

export default gege
