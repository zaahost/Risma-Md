let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Zaa
│ ✎ _Sekolah_ : 2 SMP
│ ✎ _Umur_ : 13
│ ✎ _Asal_ : Sumatera Selatan 
│ ✎ _Status_ : Jomblo
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/LqbvV6R1EJpIISHIU6S28T
│ ✎ _WhatsApp_ :
│    wa.me/6283857687084
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
