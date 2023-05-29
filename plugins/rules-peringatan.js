let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let info = `━━━━━━▢ *RULES* ▢━━━━━━

*PERINGATAN* :
• Telpon/VC Owner = Blok Otomatis
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Banned Peringatan*', 'status@broadcast')
}
handler.tags = ['info']
handler.command = /^banperingatan$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP
