let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let info = `━━━━━━▢ *RULES* ▢━━━━━━

 *BANNED + BLOK PERMANEN* :
• Merusak Nama Baik Bot
• Meniru/Menyalin Teks² Pesan Pada Bot Tanpa Izin
• Spam Menu Ga Jelas
• Yang Penting Spam \n
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Banned Permanen*', 'status@broadcast')
}
handler.tags = ['info']
handler.command = /^banpermanen$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP
