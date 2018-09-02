async function gege(db, msg) {
  const channel_id = msg.channel.id

  await db.get(`${channel_id}`, async (err, val) => {
    if (err) {
      msg.reply('tidak ada pemain di channel ini')
      return
    }

    await db.del(`${channel_id}`)
    msg.channel.send(`udahan main di channel <#${channel_id}>`)
  })
}

export default gege
