/*let handler = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe, isBaileys } = m.quoted
    if (!fromMe) throw false
    //if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
    conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']

handler.command = /^del(ete)?$/i

export default handler*/

let handler = function (m) {
    if (!m.quoted) throw false
    let { chat, fromMe } = m.quoted
    if (!fromMe) throw true
    conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['delete', 'del']
handler.tags = ['owner']
handler.admin = true

handler.command = /^(delete|del)?$/i

export default handler
