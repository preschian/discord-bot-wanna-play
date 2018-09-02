const { filter } = require('lodash')

module.exports = async function gg(db, msg) {
  const channel = msg.channel.name

  await db.get('pemain', async (err, val) => {
    if (err) return

    const update_channel = filter(val, c => c.channel !== channel)
    await db.put('pemain', update_channel)
    msg.channel.send(`udahan main di channel ${channel}`)
  })
}
