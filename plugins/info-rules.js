/*UDAH DIEMIN AJA, BIAR NGARAH KE WEB NYA. 
DARI PADA EROR 🗿*/

/*import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

  let pp = 'https://tinyurl.com/24u64tky'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: '𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘',
  address: 'Lihat Rules Bot',
  url: 'https://fangzbot.websites.co.in/update/persyaratan/1238529',
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: '',
  jpegThumbnail: await( await fetch(thumb)).buffer()
}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.command = /^rules$/
handler.owner = false
export default handler*/

let handler = async (m, { conn }) => {
let info = `
━━━━━━▢ *RULES* ▢━━━━━━

Baca Rulesnya ya kak!

`
const sections = [
   {
	title: `✃ RULES`,
	rows: [
	    {title: "❗ Peringatan", rowId: '.banperingatan', description: 'Warn' },
	{title: "❗ Banned Permanen", rowId: '.banpermanen', description: 'Banned selamanya' },
	{title: "❗ Banned + Denda", rowId: '.bandenda', description: 'Banned + Denda' },
	{title: "❗ Anti Banned", rowId: '.antibanned', description: 'Agar tidak terkena pelanggaran' },
	{title: "❗ Note", rowId: '.bannote', description: 'Note Bot' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "CEK RULES",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['rules']
handler.tags = ['info', 'main']
handler.command = /^(rules(bot)?|peraturan)$/i
handler.private = false

export default handler
