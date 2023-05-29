let handler = async (m, { conn }) => {
let info = `
*━━━━━▢ IMUNE ▢━━━━━*
          
 
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮 Download Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ INFO`,
	rows: [
	    {title: "🔮 WhatsApp Imune 1", rowId: '.waimune1', description: 'Silence WhatsApp Bot' },
	    {title: "🔮 WhatsApp Imune 2", rowId: '.waimune2', description: 'Silence WhatsApp Bot' },
	{title: "🔮 WhatsApp Gb Kebal 1", rowId: '.wagb1', description: 'Silence WhatsApp Bot' },
	{title: "🔮 WhatsApp Gb Kebal 2", rowId: '.wagb2', description: 'Download WhatsApp Kebal' },
	]
    }, {
    title: `✃ BUY`,
	rows: [
	    {title: "😈 AngelDark", rowId: '.owner', description: 'Pembuat Bot' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "📛 Download",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['waantivirus']
handler.tags = ['virus']
handler.command = /^waantivirus$/i
handler.premium = false

export default handler
