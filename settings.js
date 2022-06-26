
  const fs = require('fs')
  const chalk = require('chalk')

  // Free Apikey
  global.APIs = {
  riy: 'https://api-riy.herokuapp.com',
  }

  global.APIKeys = {
  'https://api-riy.herokuapp.com': 'RiyGanz',
  }

  // Edit Sesuai Kemauanmu
  global.autoReadGc = false // Ubah Ke false Jika Chat Di Grup Tidak Ingin Di Baca Oleh Bot
  global.autoReadAll = false // Ubah Ke true Jika Ingin Seluruh Chat Di Baca Oleh Bot
  global.anticall = false // Ubah Ke false Jika Tidak Ingin Bot Blockir Yang Telepon
  global.available = true // Ubah Ke false Jika Bot Mu Tidak Ingin Terlihat Online
  global.autoTyping = false // Ubah Ke true Jika Ingin Saat Ada Yang Chat Bot Auto Mengetik
  global.autoRecord = true // Ubah Ke false Jika Tidak Ingin Saat Ada Yang Chat Bot Auto Merekam
  global.multiplier = 20 // Semakin Besar Angkanya Semakin Sulit Untuk Naik Level
  global.limitCount = 70 // 70 Dah Pas Banh
  global.prefa = ['','.','/','#']

  // Other
  global.ownername = '⌬ Clara-DV' // Ganti Jadi Namamu
  global.owner = ['6281347927862','6282253479547','6285159258830'] // Kalo Mau Lebih Tambahin Aja
  global.ownernomer = '6281347927862' // Owner Utama Istilahnya
  global.botname = '⌬ CLARA-MD' // Ganti Jadi Nama Botmu
  global.packname = '⌬ CLARA-MD' // Sticker Weem
  global.author = '6285159258830' // Sticker Weem
  global.webme = 'https://www.instagram.com/katyushaclara/' // Ganti Sama Web Mu
  global.linkgroup = 'https://chat.whatsapp.com/CXh8962GOxK6cwDwLjlABw' // Ganti Sama Link Gc Mu
  global.sessionName = 'session'
  global.youtube = 'https://www.instagram.com/katyushaclara/' // Ganti Sama Link Yt Mu
  global.github = 'https://github.com/' // Ganti Sama Link Github Mu
  global.instagram = 'https://www.instagram.com/katyushaclara/' // Ganti Sama Link Ig mu

  // Background Setiap Menu
  global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

  // Tips Menu
  global.tips1 = '*Gunakan Jeda 3 Detik Agar Bot Tidak Mati Akibat Spam*'
  global.tips2 = '*Jika Kamu Ingin Bermain RPG Hubungi Admin Untuk Mengaktifkan Fitur RPG*'
  global.tips3 = '*Jika Kamu Ingin Request/Repport Fitur, Cukup Ketik .repport Laporannya*'
  global.tips4 = '*Jika Kamu Sedang Gabut, Kamu Bisa Memainkan Fitur Game Yang Tersedia*'
  global.tips5 = '*Jika Kamu Ingin Mendownload Video Youtube, Silahkan Ketik .ytmp4 <link>*'

  // Edit Sesuai Kemauan Mu
  global.rpg = {
  limitEnd: '*Limit Anda Habis*\n\n📝NOTE : Limit Akan Di Reset Setiap Jam 21:00',
  }

  // Edit Sesuai Kemauanmu
  global.mess = {
  admin: '*「 Khusus Admin Grup 」*',
  botAdmin: '*「 Bot Bukan Admin Grup」*',
  owner: '*「 Khusus Owner Bot 」*',
  group: '*「 Khusus Chat Grup 」*',
  private: '*「 Khusus Chat Pribadi 」*',
  bot: '*「 Khusus Pengguna Bot 」*',
  wait: '*「❗」Processing Data*',
  done: '*「❗」Done Processing Data',
  }

  // Kalo Mau Menyesuaikan Nama File Foto Nya
  global.thumb = fs.readFileSync('./media/20220625_223313.png')
    
  // Ini Gausah Diubah
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
  })
