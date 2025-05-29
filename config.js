const fs = require('fs')
const file = require.resolve(__filename)


global.ownerNumber = ["263789745277@s.whatsapp.net"]
global.nomerOwner = "263789745277"
global.nomorOwner = ['263789745277']
global.namaDeveloper = "*`Keith-Tech*" //jangn diubh bng
global.namaOwner = "*`Keith-Tech`*"
global.namaBot = "*`Keith-Xmd`*"
global.versionBot = "V1 pro"
global.packname = "Keith-Xmdꪜ1"
global.author = "Keith-Tech✨"
global.ThM = 'https://iili.io/2yFPx0F.png'
global.prefa = ['','!','.',',','🐤','⛓️'] 
global.travaSend = "1" // total travas a ser enviado



fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})