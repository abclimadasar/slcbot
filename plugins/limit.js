let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (args[0] == 'reset') {
let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 1000 : isNumber(args[0]) ? parseInt(args[0]) : 1000
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		conn.reply(m.chat, `*berhasil direset ${lim} / user*`, m)
		}
    let thumbLimit = `https://telegra.ph/file/e26524fd8d6192c362cc4.jpg`
		
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let ke1 = global.db.data.users[who].limit
    let ke2 = global.db.data.users[who].exp
    let ke3 = global.db.data.users[who].money
    
    conn.sendButton(m.chat, bottime,  `LIMIT YANG KAMU MILIKI
🎫️ Sisa Limit
*${ke1}*

-------------------

🎟️ Sisa Join limit
*${ke2}*
`, thumbLimit, [
        ['BUY LIMIT', '.buylimit'],
        ['TOPUP', `${usedPrefix}topup`]
    ], m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: bottime,jpegThumbnail: Buffer.alloc(0)}}}})
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
export default handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
