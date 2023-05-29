let handler = async (m, { conn }) => {
let info = `
*━━━━━▢ GET HADIAH ▢━━━━━*
`
const sections = [
   {
	title: `✃ CLAIM`,
	rows: [
	    {title: "⚜️ Daily", rowId: '.daily', description: 'Hadiah per hari' },
	    {title: "⚜️ Weekly", rowId: '.weekly', description: 'Hadiah per minggu' },
	{title: "⚜️ Monthly", rowId: '.monthly', description: 'Hadiah per bulan' },
	{title: "⚜️ Special", rowId: '.special', description: 'Hadiah special' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "💻 INFO BOT", rowId: '.info', description: 'Info Silence BOT' },
	    {title: "🗃️ MENU", rowId: '.menu', description: 'Back to menu' },
	{title: "👤 OWNER", rowId: '.owner', description: 'Owner Silence BOT' },
	{title: "💰 SEWA BOT", rowId: '.sewa', description: 'Sewa Silence BOT' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "G E T",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['hadiah', 'claim']
handler.tags = ['rpg']
handler.command = /^(hadiah|claim)$/i

export default handler
