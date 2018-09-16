async function pemain(db, msg) {
  const channel_id = msg.channel.id

  await db.get(`${channel_id}`, async function(err, val) {
    if (err) {
      msg.reply('tidak ada pemain di channel ini')
      return
    }

    const get_username = val.map(u => `<@${u.id}>`).join(' ')

    if (val.length === 0) {
      msg.channel.send('tidak ada pemain di channel ini')
      return
    }

    msg.channel.send(`daftar pemain ${get_username.toString()}`)
  })
}

export default pemain
