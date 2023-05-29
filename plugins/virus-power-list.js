let handler = async (m, { conn }) => {
let info = `
*━━━━━▢ VIRUS ▢━━━━━*
          
 🔥BY ANGELDARK🔥
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "🌀 Power 1", rowId: '.virtex21', description: 'Silence WhatsApp Bot' },
	    {title: "🌀 Power 2", rowId: '.virtex22', description: 'Silence WhatsApp Bot' },
	{title: "🌀 Power 3", rowId: '.virtex23', description: 'Silence WhatsApp Bot' },
	{title: "🌀 Power 4", rowId: '.virtex24', description: 'Silence WhatsApp Bot' },
	{title: "🌀 Power 5", rowId: '.virtex25', description: 'Silence WhatsApp Bot' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥 Download WhatsApp Imune", rowId: '.imune', description: 'Download WhatsApp Kebal' },
	    {title: "🔥 Virus Troli", rowId: '.virustroli', description: 'Silence WhatsApp Bot' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸 Upgrade Premium", rowId: '.sewa', description: 'Dan unclock Fitur premium lainya!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "GASS👺",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.command = /^powerlist$/i
handler.premium = false

export default handler
