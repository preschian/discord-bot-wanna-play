import { filter } from 'lodash'

async function pemain(db, msg) {
  const channel_id = msg.channel.id

  await db.get('pemain', async (err, val) => {
    if (err) {
      msg.reply('tidak ada pemain di channel ini')
      return
    }

    const filter_channel = filter(val, ['channel_id', channel_id])
    const get_username = filter_channel.map(u => `<@${u.id}>`).join(' ')

    if (filter_channel.length === 0) {
      msg.channel.send('tidak ada pemain di channel ini')
      return
    }

    msg.channel.send(`daftar pemain ${get_username.toString()}`)
  })
}

export default pemain
