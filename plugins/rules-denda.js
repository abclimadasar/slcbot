let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let info = `━━━━━━▢ *RULES* ▢━━━━━━

 *BANNED + DENDA 5K :*
• Spam Chat
• Spam Call
• Spam SMS
• Menghina Bot

Note : Jika Tidak Membayar Denda
Maka Bot Akan Banned User Permanen dan Teror virus
\n`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Banned Denda*', 'status@broadcast')
}
handler.tags = ['info']
handler.command = /^bandenda$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP
