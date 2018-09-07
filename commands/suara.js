async function suara(bot, con, msg, id) {
  const chat_wheel = {
    152: 'https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/1/13/Chat_wheel_2018_easiest_money.mp3',
    153: 'https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/7/73/Chat_wheel_2018_echo_slama_jama.mp3',
    154: 'https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/6/60/Chat_wheel_2018_next_level.mp3',
    155: 'https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/4/4c/Chat_wheel_2018_oy_oy_oy.mp3',
    156: 'https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/b/bb/Chat_wheel_2018_ta_daaaa.mp3',
  }
  const stream = chat_wheel[id]
  const broadcast = bot.createVoiceBroadcast().playStream(stream)
  const dispatcher = con.playBroadcast(broadcast)

  // dispatcher.on('error', err => console.log('dispatcher error', err))
  // dispatcher.on('end', end => console.log('end', end))
}

export default suara
