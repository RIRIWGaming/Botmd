let handler = async (m, { conn }) => {
let info = `
*${htki} MENU ${htka}*

█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
█░░║║║╠─║─║─║║║║║╠─░░█ 
█░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
`
const sections = [
   {
	title: `✃ LIST MENU`,
	rows: [
	    {title: "∫ 🧿» Simpel «", rowId: '.mw', description: '╰► Menu simpel Hns Bot' },
	    {title: "∫ 🌸» List Menu «", rowId: '.?', description: '╰► Menu Keceh Hns Bot' },
        ]
        }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "LIST MENU ☁︎",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.command = /^(listmenu)$/i
handler.private = false

export default handler
