import { RichEmbed } from 'discord.js'
import ytdl from 'ytdl-core'

async function suara(bot, con, msg, id) {
  const chat_wheel = {
    1: 'https://www.myinstants.com/media/sounds/magic_immune.mp3',
    86: 'https://gamepedia.cursecdn.com/dota2_gamepedia/9/99/Chat_wheel_2017_rimshot.mp3',
    87: 'https://gamepedia.cursecdn.com/dota2_gamepedia/8/82/Chat_wheel_2017_charge.mp3',
    88: 'https://gamepedia.cursecdn.com/dota2_gamepedia/5/52/Chat_wheel_2017_frog.mp3',
    89: 'https://gamepedia.cursecdn.com/dota2_gamepedia/2/2f/Chat_wheel_2017_crash_burn.mp3',
    90: 'https://gamepedia.cursecdn.com/dota2_gamepedia/c/c1/Crowd_2.mp3',
    91: 'https://gamepedia.cursecdn.com/dota2_gamepedia/3/3c/Chat_wheel_2017_sad_bone.mp3',
    92: 'https://gamepedia.cursecdn.com/dota2_gamepedia/8/8c/Chat_wheel_2017_cricket.mp3',
    93: 'https://gamepedia.cursecdn.com/dota2_gamepedia/9/97/Chat_wheel_2017_drum_roll.mp3',
    94: 'https://gamepedia.cursecdn.com/dota2_gamepedia/5/5f/Chat_wheel_2017_headshake.mp3',
    95: 'https://gamepedia.cursecdn.com/dota2_gamepedia/2/21/Chat_wheel_2017_crybaby.mp3',
    96: 'https://gamepedia.cursecdn.com/dota2_gamepedia/b/b6/Chat_wheel_2017_patience.mp3',
    97: 'https://gamepedia.cursecdn.com/dota2_gamepedia/b/b7/Chat_wheel_2017_wow.mp3',
    98: 'https://gamepedia.cursecdn.com/dota2_gamepedia/5/5c/Chat_wheel_2017_all_dead.mp3',
    99: 'https://gamepedia.cursecdn.com/dota2_gamepedia/8/88/Chat_wheel_2017_brutal.mp3',
    100: 'https://gamepedia.cursecdn.com/dota2_gamepedia/4/48/Chat_wheel_2017_disastah.mp3',
    101: 'https://gamepedia.cursecdn.com/dota2_gamepedia/0/04/Chat_wheel_2017_wan_bu_liao_la.mp3',
    102: 'https://gamepedia.cursecdn.com/dota2_gamepedia/3/39/Chat_wheel_2017_po_liang_lu.mp3',
    103: 'https://gamepedia.cursecdn.com/dota2_gamepedia/5/51/Chat_wheel_2017_tian_huo.mp3',
    104: 'https://gamepedia.cursecdn.com/dota2_gamepedia/6/6c/Chat_wheel_2017_jia_you.mp3',
    105: 'https://gamepedia.cursecdn.com/dota2_gamepedia/0/0f/Chat_wheel_2017_zou_hao_bu_song.mp3',
    106: 'https://gamepedia.cursecdn.com/dota2_gamepedia/1/1e/Chat_wheel_2017_bozhe_ti_posmotri.mp3',
    107: 'https://gamepedia.cursecdn.com/dota2_gamepedia/0/08/Chat_wheel_2017_zhil_do_konsta.mp3',
    108: 'https://gamepedia.cursecdn.com/dota2_gamepedia/d/d7/Chat_wheel_2017_ay_ay_ay.mp3',
    109: 'https://gamepedia.cursecdn.com/dota2_gamepedia/4/4d/Chat_wheel_2017_ehto_g_g.mp3',
    110: 'https://gamepedia.cursecdn.com/dota2_gamepedia/9/95/Chat_wheel_2017_eto_prosto_netchto.mp3',
    112: 'https://gamepedia.cursecdn.com/dota2_gamepedia/c/c0/Chat_wheel_2018_youre_a_hero.mp3',
    113: 'https://gamepedia.cursecdn.com/dota2_gamepedia/f/fd/Chat_wheel_2018_krasavchik.mp3',
    114: 'https://gamepedia.cursecdn.com/dota2_gamepedia/0/03/Chat_wheel_2018_liu_liu_liu.mp3',
    115: 'https://gamepedia.cursecdn.com/dota2_gamepedia/c/c7/Chat_wheel_2018_playing_to_win.mp3',
    116: 'https://gamepedia.cursecdn.com/dota2_gamepedia/5/55/Chat_wheel_2018_bozhe_kak_eto_bolno.mp3',
    117: 'https://gamepedia.cursecdn.com/dota2_gamepedia/f/f7/Chat_wheel_2018_gao_fu_shuai.mp3',
    118: 'https://gamepedia.cursecdn.com/dota2_gamepedia/a/ab/Chat_wheel_2018_that_was_questionable.mp3',
    119: 'https://gamepedia.cursecdn.com/dota2_gamepedia/3/34/Chat_wheel_2018_oy_oy_bezhat.mp3',
    120: 'https://gamepedia.cursecdn.com/dota2_gamepedia/c/c0/Chat_wheel_2018_hu_lu_wa.mp3',
    121: 'https://gamepedia.cursecdn.com/dota2_gamepedia/f/fd/Chat_wheel_2018_what_just_happened.mp3',
    122: 'https://gamepedia.cursecdn.com/dota2_gamepedia/f/fc/Chat_wheel_2018_eto_nenormalno.mp3',
    123: 'https://gamepedia.cursecdn.com/dota2_gamepedia/f/fd/Chat_wheel_2018_ni_qi_bu_qi.mp3',
    131: 'https://gamepedia.cursecdn.com/dota2_gamepedia/8/86/Chat_wheel_2018_bockbock.mp3',
    132: 'https://gamepedia.cursecdn.com/dota2_gamepedia/4/47/Chat_wheel_2018_kiss.mp3',
    133: 'https://gamepedia.cursecdn.com/dota2_gamepedia/8/86/Chat_wheel_2018_ow.mp3',
    134: 'https://gamepedia.cursecdn.com/dota2_gamepedia/6/65/Chat_wheel_2018_party_horn.mp3',
    135: 'https://gamepedia.cursecdn.com/dota2_gamepedia/4/49/Chat_wheel_2018_snore.mp3',
    136: 'https://gamepedia.cursecdn.com/dota2_gamepedia/2/2e/Chat_wheel_2018_yahoo.mp3',
    152: 'https://gamepedia.cursecdn.com/dota2_gamepedia/1/13/Chat_wheel_2018_easiest_money.mp3',
    153: 'https://gamepedia.cursecdn.com/dota2_gamepedia/7/73/Chat_wheel_2018_echo_slama_jama.mp3',
    154: 'https://gamepedia.cursecdn.com/dota2_gamepedia/6/60/Chat_wheel_2018_next_level.mp3',
    155: 'https://gamepedia.cursecdn.com/dota2_gamepedia/4/4c/Chat_wheel_2018_oy_oy_oy.mp3',
    156: 'https://gamepedia.cursecdn.com/dota2_gamepedia/b/bb/Chat_wheel_2018_ta_daaaa.mp3',
  }
  const numbers = Object.keys(chat_wheel)
  let stream

  try {
    if (typeof parseInt(id, 10) === 'number') {
      stream = chat_wheel[id]
    }

    if (id.includes('.mp3')) {
      stream = id
    }

    if (id.includes('youtube.com')) {
      stream = ytdl(id, { filter: 'audioonly' })
    }

    let broadcast = bot.createVoiceBroadcast().playStream(stream, { seek: 0, volume: 1 })
    con.playBroadcast(broadcast)

    // need dispatcher?
    // const dispatcher = con.playBroadcast(broadcast)
    // dispatcher.on('error', err => console.log('dispatcher error', err))
    // dispatcher.on('end', end => console.log('end', end))
  } catch (err) {
    const embed = new RichEmbed()
      .setTitle('Baru tersedia')
      .setColor(0xff0000)
      .setDescription(`${numbers}`)

    msg.channel.send(embed)
  }
}

export default suara
