import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = 'https://telegra.ph/file/9153e420426a8ae0e32ee.jpg'
    return conn.sendButton(m.chat, 'Scan QRIS Di Atas\nDonasi Minimal 500P :v', donate, img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/eabdalmufid_",
                mediaType: "VIDEO",
                title: 'Donasi To Silence',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler
