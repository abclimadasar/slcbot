let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {

let info = `━━━━━━▢ *RULES* ▢━━━━━━

Minta maaf ke owner agar tidak terkena pelanggaran  \n
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Anti Banned*', 'status@broadcast')
}
handler.tags = ['info']
handler.command = /^antibanned$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP
