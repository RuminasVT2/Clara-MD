
  // Message Salah Command
  exports.wrongFormat = (prefix) => {
  return `Format Salah ❎ Silakan Cek Cara Penggunaan Di *${prefix}allmenu*`
  }

  // Message Wrong Url
  exports.notNum = (q) => {
  return `"${q}", Bukan Angka!
  `
  }

  // Message Fitur Off
  exports.fiturOff = () => {
  return `⚠️ Fitur Tidak Di Aktifkan
  `
  }

  // Message Saat Fitur Error
  exports.fiturError = () => {
  return `⚠️ Fitur Sedang Error
  `
  }

  // Message When Not the Destined Link
  exports.notLink = () => {
  return `⚠️ Itu Bukan Linknya Bambank
  `
  }

  // Message Successfully Adding User To Group
  exports.addUser =() => {
  return `Sukses Menambahkan User Ke Grup ☑️
  `
  }

  // Message Success Kick User From Group
  exports.kickUser =() => {
  return `Sukses Kick User Dari Grup ☑️
  `
  }

  // Message Promote User
  exports.proMote =() => {
  return `Sukses Menaikkan Jabatan User ☑️
  `
  }

  // Message Demote User
  exports.deMote =() => {
  return `Sukses Menurunkan Jabatan User ☑️
  `
  }

  // Message Rename Group
  exports.namaGrup =(text) => {
  return `Sukses Mengubah Nama Group Menjadi ${text} ☑️
  `
  }

// Message Ephermal On
  exports.epOn =() => {
  return `Sukses Menghidupkan Ephermal/Pesan Sementara Di Group Ini ☑️
  `
  }

  // Message Ephermal Off
  exports.epOff =() => {
  return `Sukses Menonaktifkan Ephermal/Pesan Sementara Di Group Ini ☑️
  `
  }

  // Message No Spam
  exports.janSpam = () => {
  return `Jan Spam Dong Kak 🐧
  `
  }

  // List
  exports.list = (pushname, ucapanWaktu) => {
  return`${ucapanWaktu}
Hai ${pushname} silahkan dipilih list menu dibawah ini.
  `
  }

  // All Menu
  exports.allmenu = (prefix) => {
  return`  *🤖 Bot Info*
  ◩ ${prefix}ping
  ◩ ${prefix}owner
  ◩ ${prefix}creator
  ◩ ${prefix}menu
  ◩ ${prefix}delete
  ◩ ${prefix}donasi
  ◩ ${prefix}rules
  ◩ ${prefix}sewabot
  ◩ ${prefix}report

  *👦 Owner Menu*
  ◩ > / $ / =>
  ◩ ${prefix}banned
  ◩ ${prefix}unbanned
  ◩ ${prefix}banchat
  ◩ ${prefix}unbanchat
  ◩ ${prefix}autoreact
  ◩ ${prefix}setmenu
  ◩ ${prefix}join [link]
  ◩ ${prefix}leave
  ◩ ${prefix}self
  ◩ ${prefix}public
  ◩ ${prefix}setppbot
  ◩ ${prefix}block @user
  ◩ ${prefix}unblock @user 
  ◩ ${prefix}bc
  ◩ ${prefix}bcgc
  ◩ ${prefix}listpc
  ◩ ${prefix}listgc

  *👥 Group Menu*
  ◩ ${prefix}antilink
  ◩ ${prefix}antiwame
  ◩ ${prefix}antivirtex
  ◩ ${prefix}nsfw
  ◩ ${prefix}event
  ◩ ${prefix}afk [alasan]
  ◩ ${prefix}tagall
  ◩ ${prefix}hidetag
  ◩ ${prefix}liston
  ◩ ${prefix}linkgroup
  ◩ ${prefix}revoke
  ◩ ${prefix}ephemeral [option]
  ◩ ${prefix}setppgc
  ◩ ${prefix}setname [text]
  ◩ ${prefix}group [option]
  ◩ ${prefix}add @user
  ◩ ${prefix}kick @user
  ◩ ${prefix}promote @user
  ◩ ${prefix}demote @user
  ◩ ${prefix}absen
  ◩ ${prefix}hadir
  ◩ ${prefix}tidakhadir
  ◩ ${prefix}cekabsen
  ◩ ${prefix}hapusabsen

  *🏔️ Rpg Menu*
  ◩ ${prefix}profile
  ◩ ${prefix}leaderboard
  ◩ ${prefix}daily
  ◩ ${prefix}monthly
  ◩ ${prefix}gajian
  ◩ ${prefix}judi
  ◩ ${prefix}berburu
  ◩ ${prefix}nebang
  ◩ ${prefix}mancing
  ◩ ${prefix}mining
  ◩ ${prefix}adventure
  ◩ ${prefix}transfer
  ◩ ${prefix}kill
  ◩ ${prefix}slot
  ◩ ${prefix}buy
  ◩ ${prefix}sell
  ◩ ${prefix}heal
  ◩ ${prefix}bansos

  *📂 Database Menu*
  ◩ ${prefix}setcmd [reply sticker/pesan]
  ◩ ${prefix}delcmd [reply sticker/pesan]
  ◩ ${prefix}listcmd
  ◩ ${prefix}lockcmd
  ◩ ${prefix}addmsg
  ◩ ${prefix}getmsg
  ◩ ${prefix}listmsg
  ◩ ${prefix}delmsg

  *🔎 Search Menu*
  ◩ ${prefix}pinterest [query]
  ◩ ${prefix}pantun
  ◩ ${prefix}google [query]
  ◩ ${prefix}gimage [query]
  ◩ ${prefix}kbbi [query]
  ◩ ${prefix}igstalk [username]
  ◩ ${prefix}ghstalk [username]
  ◩ ${prefix}wallpaper

  *📥 Download Menu*
  ◩ ${prefix}tiktok [url]
  ◩ ${prefix}tiktokwm [url]
  ◩ ${prefix}tiktoknowm [url]
  ◩ ${prefix}tiktokaudio [url]
  ◩ ${prefix}instagram [url]
  ◩ ${prefix}twitter [url]
  ◩ ${prefix}facebook [url]
  ◩ ${prefix}ytmp4 [url]
  ◩ ${prefix}ytmp3 [url]
  ◩ ${prefix}play [judul]
  ◩ ${prefix}ytsearch [judul]
  ◩ ${prefix}gitclone

  *⏳ Convert Menu*
  ◩ ${prefix}toimage
  ◩ ${prefix}smeme
  ◩ ${prefix}smeme2
  ◩ ${prefix}sticker
  ◩ ${prefix}tovideo
  ◩ ${prefix}togif
  ◩ ${prefix}tourl
  ◩ ${prefix}readmore
  ◩ ${prefix}ttp [teks]
  ◩ ${prefix}emojimix 😎+😂
  ◩ ${prefix}semoji [emoji]
  ◩ ${prefix}ssweb
  ◩ ${prefix}nulisbiasa
  ◩ ${prefix}nuliskanan
  ◩ ${prefix}nuliskiri
  ◩ ${prefix}foliokanan
  ◩ ${prefix}foliokiri

  *ℹ️️ Informasi Menu*
  ◩ ${prefix}infogempa
  ◩ ${prefix}covid
  ◩ ${prefix}faktaunik
  ◩ ${prefix}merdeka-news 
  ◩ ${prefix}kontan-news 
  ◩ ${prefix}cnbc-news 
  ◩ ${prefix}tribun-news 
  ◩ ${prefix}indozone-news 
  ◩ ${prefix}kompas-news 
  ◩ ${prefix}detik-news 
  ◩ ${prefix}daily-news 
  ◩ ${prefix}inews-news 
  ◩ ${prefix}okezone-news 
  ◩ ${prefix}sindo-news 
  ◩ ${prefix}tempo-news 
  ◩ ${prefix}antara-news 
  ◩ ${prefix}cnn-news 
  ◩ ${prefix}fajar-news 

  *🎨 Textpro Menu*
  ◩ ${prefix}serti1 [teks]
  ◩ ${prefix}serti2 [teks]
  ◩ ${prefix}serti3 [teks]
  ◩ ${prefix}blackpink [teks]
  ◩ ${prefix}neon [teks]
  ◩ ${prefix}magma [teks]
  ◩ ${prefix}3dstone [teks]
  ◩ ${prefix}halloween [teks]
  ◩ ${prefix}horror [teks]
  ◩ ${prefix}larva [teks]
  ◩ ${prefix}toxic [teks]
  ◩ ${prefix}marvel [teks|teks]
  ◩ ${prefix}potter [teks]
  ◩ ${prefix}pornhub [teks|teks]
  ◩ ${prefix}tahta [teks]

  *🖼️ Photooxy Menu*
  ◩ ${prefix}3d-underwater  
  ◩ ${prefix}3dtext-pig  
  ◩ ${prefix}3dvalentine-cards  
  ◩ ${prefix}anonymous-neon  
  ◩ ${prefix}advanced-glow  
  ◩ ${prefix}art-shader  
  ◩ ${prefix}angels-wings 

  *📸 Ephoto Menu*
  ◩ ${prefix}3dnature
  ◩ ${prefix}bevel
  ◩ ${prefix}burnpaper
  ◩ ${prefix}quotesgrass
  ◩ ${prefix}stars
  ◩ ${prefix}flaming
  ◩ ${prefix}romance
  ◩ ${prefix}gerbang
  ◩ ${prefix}fur
  ◩ ${prefix}funnycup

  *🎮 Game Menu*
  ◩ ${prefix}tebak lagu
  ◩ ${prefix}tebak gambar
  ◩ ${prefix}tebak kata
  ◩ ${prefix}tebak kalimat
  ◩ ${prefix}tebak lirik
  ◩ ${prefix}tebak lontong
  ◩ ${prefix}kuismath

  *🤹 Fun Menu*
  ◩ ${prefix}truth
  ◩ ${prefix}dare
  ◩ ${prefix}bagaimanakah [teks]
  ◩ ${prefix}kapankah [teks]
  ◩ ${prefix}dimanakah [teks]
  ◩ ${prefix}jodohku
  ◩ ${prefix}jadian
  ◩ ${prefix}suit [✌️/✊/✋]
  ◩ ${prefix}aduayam [🐥/🐤🐓/🐣/🦃]
  ◩ ${prefix}suitpvp [tag user]
  ◩ ${prefix}ttt
  ◩ ${prefix}delttt

  *⛩️ Anime Menu*
  ◩ ${prefix}waifu
  ◩ ${prefix}loli
  ◩ ${prefix}cry
  ◩ ${prefix}kill
  ◩ ${prefix}hug
  ◩ ${prefix}pat
  ◩ ${prefix}lick
  ◩ ${prefix}kiss
  ◩ ${prefix}bite
  ◩ ${prefix}yeet
  ◩ ${prefix}neko
  ◩ ${prefix}bully
  ◩ ${prefix}bonk
  ◩ ${prefix}wink
  ◩ ${prefix}poke
  ◩ ${prefix}nom
  ◩ ${prefix}slap
  ◩ ${prefix}smile
  ◩ ${prefix}wave
  ◩ ${prefix}awoo
  ◩ ${prefix}blush
  ◩ ${prefix}smug
  ◩ ${prefix}glomp
  ◩ ${prefix}happy
  ◩ ${prefix}dance
  ◩ ${prefix}cringe
  ◩ ${prefix}cuddle
  ◩ ${prefix}highfive
  ◩ ${prefix}shinobu
  ◩ ${prefix}megumin
  ◩ ${prefix}handhold
  ◩ ${prefix}yotsuba
  ◩ ${prefix}shinomiya
  ◩ ${prefix}yumeko
  ◩ ${prefix}tejina
  ◩ ${prefix}chiho
  ◩ ${prefix}toukachan
  ◩ ${prefix}akira
  ◩ ${prefix}itori
  ◩ ${prefix}kurumi
  ◩ ${prefix}miku
  ◩ ${prefix}pokemon
  ◩ ${prefix}ryujin
  ◩ ${prefix}kaori
  ◩ ${prefix}shizuka
  ◩ ${prefix}kotori
  ◩ ${prefix}kaga
  ◩ ${prefix}mikasa
  ◩ ${prefix}akiyama
  ◩ ${prefix}gremory
  ◩ ${prefix}isuzu
  ◩ ${prefix}cosplay
  ◩ ${prefix}shina
  ◩ ${prefix}kagura
  ◩ ${prefix}shinka
  ◩ ${prefix}eba
  ◩ ${prefix}deidara
  ◩ ${prefix}itachi
  ◩ ${prefix}madara
  ◩ ${prefix}yuki
  ◩ ${prefix}asuna
  ◩ ${prefix}ayuzawa
  ◩ ${prefix}chitoge
  ◩ ${prefix}emilia
  ◩ ${prefix}hestia
  ◩ ${prefix}inori
  ◩ ${prefix}ana
  ◩ ${prefix}boruto
  ◩ ${prefix}erza
  ◩ ${prefix}kakasih
  ◩ ${prefix}sagiri
  ◩ ${prefix}minato
  ◩ ${prefix}naruto
  ◩ ${prefix}nezuko
  ◩ ${prefix}onepiece
  ◩ ${prefix}sakura
  ◩ ${prefix}sasuke
  ◩ ${prefix}tsunade
  ◩ ${prefix}jhota
  ◩ ${prefix}hinata

  *🔞 Nsfw Menu*
  ◩ ${prefix}ahegeo
  ◩ ${prefix}ass
  ◩ ${prefix}bdsm
  ◩ ${prefix}blowjob
  ◩ ${prefix}cuckold 
  ◩ ${prefix}cum 
  ◩ ${prefix}ero
  ◩ ${prefix}femdom
  ◩ ${prefix}foot
  ◩ ${prefix}gangbang
  ◩ ${prefix}glasses
  ◩ ${prefix}hentai
  ◩ ${prefix}ahy
  ◩ ${prefix}mstb
  ◩ ${prefix}neko
  ◩ ${prefix}orgy
  ◩ ${prefix}panties
  ◩ ${prefix}pussy
  ◩ ${prefix}yuri
  ◩ ${prefix}zettai

  *🧖 Asupan Menu*
  ◩ ${prefix}hijaber
  ◩ ${prefix}cecan
  ◩ ${prefix}bocil
  ◩ ${prefix}ukhty
  ◩ ${prefix}gheayubi
  ◩ ${prefix}rikagusriani
  ◩ ${prefix}santuy

  *👧 Cecan Menu*
  ◩ ${prefix}china
  ◩ ${prefix}vietnam
  ◩ ${prefix}thailand
  ◩ ${prefix}indonesia
  ◩ ${prefix}korea
  ◩ ${prefix}japan
  ◩ ${prefix}malaysia

  *🕊️ Primbon Menu*
  ◩ ${prefix}nomorhoki
  ◩ ${prefix}artimimpi
  ◩ ${prefix}artinama
  ◩ ${prefix}ramaljodoh
  ◩ ${prefix}ramaljodohbali
  ◩ ${prefix}suamiistri
  ◩ ${prefix}ramalcinta
  ◩ ${prefix}cocoknama
  ◩ ${prefix}pasangan
  ◩ ${prefix}jadiannikah
  ◩ ${prefix}sifatusaha
  ◩ ${prefix}rezeki
  ◩ ${prefix}pekerjaan
  ◩ ${prefix}nasib
  ◩ ${prefix}penyakit
  ◩ ${prefix}tarot
  ◩ ${prefix}fengshui
  ◩ ${prefix}haribaik
  ◩ ${prefix}harisangar
  ◩ ${prefix}harisial
  ◩ ${prefix}nagahari
  ◩ ${prefix}arahrezeki
  ◩ ${prefix}peruntungan
  ◩ ${prefix}weton
  ◩ ${prefix}karakter
  ◩ ${prefix}keberuntungan
  ◩ ${prefix}memancing
  ◩ ${prefix}masasubur
  ◩ ${prefix}zodiak
  ◩ ${prefix}shio

  *📚 Cerpen Menu*
  ◩ ${prefix}cerpen anak
  ◩ ${prefix}cerpen bahasa daerah
  ◩ ${prefix}cerpen bahasa inggris
  ◩ ${prefix}cerpen bahasa jawa
  ◩ ${prefix}cerpen bahasa sunda
  ◩ ${prefix}cerpen budaya
  ◩ ${prefix}cerpen cinta
  ◩ ${prefix}cerpen cinta islami
  ◩ ${prefix}cerpen cinta pertama
  ◩ ${prefix}cerpen cinta romantis
  ◩ ${prefix}cerpen cinta sedih
  ◩ ${prefix}cerpen cinta segitiga
  ◩ ${prefix}cerpen cinta sejati
  ◩ ${prefix}cerpen galau
  ◩ ${prefix}cerpen gokil
  ◩ ${prefix}cerpen inspiratif
  ◩ ${prefix}cerpen jepang
  ◩ ${prefix}cerpen kehidupan
  ◩ ${prefix}cerpen keluarga
  ◩ ${prefix}cerpen kisah nyata
  ◩ ${prefix}cerpen korea
  ◩ ${prefix}cerpen kristen
  ◩ ${prefix}cerpen liburan
  ◩ ${prefix}cerpen lingkungan
  ◩ ${prefix}cerpen lucu
  ◩ ${prefix}cerpen malaysia
  ◩ ${prefix}cerpen mengharukan
  ◩ ${prefix}cerpen misteri
  ◩ ${prefix}cerpen motivasi
  ◩ ${prefix}cerpen nasihat
  ◩ ${prefix}cerpen nasionalisme
  ◩ ${prefix}cerpen olahraga
  ◩ ${prefix}cerpen patah hati
  ◩ ${prefix}cerpen penantian
  ◩ ${prefix}cerpen pendidikan
  ◩ ${prefix}cerpen pengalaman pribadi
  ◩ ${prefix}cerpen pengorbanan
  ◩ ${prefix}cerpen penyesalan
  ◩ ${prefix}cerpen perjuangan
  ◩ ${prefix}cerpen perpisahan
  ◩ ${prefix}cerpen persahabatan
  ◩ ${prefix}cerpen petualangan
  ◩ ${prefix}cerpen ramadhan
  ◩ ${prefix}cerpen remaja
  ◩ ${prefix}cerpen renungan
  ◩ ${prefix}cerpen rindu
  ◩ ${prefix}cerpen rohani
  ◩ ${prefix}cerpen romantis
  ◩ ${prefix}cerpen sastra
  ◩ ${prefix}cerpen sedih
  ◩ ${prefix}cerpen sejarah
  ◩ ${prefix}cerpen slice of life
  ◩ ${prefix}cerpen terjemahan
  ◩ ${prefix}cerpen thriller

  *🎙️ Voice Changer*
  ◩ ${prefix}bass
  ◩ ${prefix}blown
  ◩ ${prefix}deep
  ◩ ${prefix}earrape
  ◩ ${prefix}fast
  ◩ ${prefix}fat
  ◩ ${prefix}nightcore
  ◩ ${prefix}reverse
  ◩ ${prefix}robot
  ◩ ${prefix}slow
  ◩ ${prefix}tupai

  *♻️ Telegram Sticker*
  ◩ ${prefix}awoawo
  ◩ ${prefix}benedict
  ◩ ${prefix}chat
  ◩ ${prefix}dbfly
  ◩ ${prefix}dino_kuning
  ◩ ${prefix}doge
  ◩ ${prefix}gojosatoru
  ◩ ${prefix}hope_boy
  ◩ ${prefix}jisoo
  ◩ ${prefix}kr_robot
  ◩ ${prefix}kucing
  ◩ ${prefix}lonte
  ◩ ${prefix}manusia_lidi
  ◩ ${prefix}menjamet
  ◩ ${prefix}meow
  ◩ ${prefix}nicholas
  ◩ ${prefix}patrick
  ◩ ${prefix}popoci
  ◩ ${prefix}sponsbob
  ◩ ${prefix}kawan_sponsbob
  ◩ ${prefix}tyni

  *🎡 Random Menu*
  ◩ ${prefix}quotesanime
  ◩ ${prefix}quotes
  ◩ ${prefix}quotes2
  ◩ ${prefix}katabijak
  ◩ ${prefix}katailham
  ◩ ${prefix}fiersabersari
  ◩ ${prefix}katasenja

  *🙏 Thanks To*
  ◩ Dika Ardnt
  ◩ Fatih Arridho
  ◩ Nurutomo
  ◩ Mhankbarbar
  ◩ Zeeone Ofc
  ◩ Ryuka Team
  ◩ Deff
  ◩ Yoga
  ◩ Riy
  `
  }

  // Rules
  exports.rules = () => {
  return`*R U L E S*
	
1. Jangan Pernah Spam Bot ❎
2. Jangan Call Nomer Bot ❎
3. Jangan Mengeksploitasi Bot ❎

Sanksi : *Warn/Soft Block 🚧*

*About Questions ⁉️*
 
👦 : Bot nya Slow Respon 😒
🤖 : Mohon Bersabar, Mungkin Kendala Dari Jaringan, Signal, Atau Bahkan Terbanned Dari Pihak WhatsApp

👦 : Scriptnya Beli Dimana? 😁
🤖 : Script Ini Tidak Di Perjualbelikan Karena Script Ini Dibagikan Secara Free. Kalian Bisa Mendapatkannya Di Channel Ryuuka Botz

👦 : Boleh Masukin Ke Grup Saia Tidak? 😁
🤖 : Untuk Masalah Memasukkan Bot Ke Dalam Grup Bisa Menghubungi Owner

👦 : Apakah Bot Ini Masih Menyimpan File Yang Saya Kirim?
🤖 : Data WhatsApp Anda Hanya Tersimpan Saat Bot Aktif, Dan Bot Tidak Pernah Menyimpan File-file Yang Anda Kirim

👦 : Min, Ada Fitur Yang Error 😔
🤖 : Jika Menemukan Bug/Error Silahkan Langsung Hubungi Owner/Creator Agar Segera Di Fix 


Tetap Patuhi Rules Agar Tetap Bisa Menikmati Bot 😁

*⚠️ Note :* Segala Ketentuan Dan Kebijakan Yang Berlaku Di Pegang Oleh Owner Bot, Sewaktu-Waktu Owner Berhak Memakai Ataupun Mengubah Kebijakan Dan Ketentuan Yang Berlaku

*Thanks To 🙏* Buat Kalian User-User Yang Sudah Memakai Script Ini Dan Pengguna Bot Yang Sudah Mau Mematuhi Rules, Serta Para Constributor Yang Sudah Membantu Dalam Pembuatan Bot Ini 🙏😁
`
}

// Donasi
  exports.donasi = () => {
	return`*TERIMA KASIH SUDAH MAU DONASI 🤗*

*Q.S Az-Zalzalah Ayat 7 :*

فَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗۚ

Artinya : Maka barangsiapa 
mengerjakan kebaikan seberat
zarrah, niscaya dia akan melihat 
(balasan)nya
  `
  } 

  // Sewa
  exports.sewa = () => {
  return`
*SEWA BOT 💫*

📆 1 Minggu : Rp. 10.000,00
📆 1 Bulan : Rp. 20.000,00
📆 1 Tahun : Rp. 100.000,00
📆 Permanen : Buat Bot Sendiri!!!

*🏦 PAYMENT :*
- Gopay
- Dana
  `
  }

  // Welcome
  exports.welcome = () => {
  return `Intro Dulu Yuk Biar Keren 🤙

📛 Nama : 
🔞 Umur :
🏙️ Askot :

Semoga Kamu Senang Berada Disini Serta Jangan Lupa Untuk Membaca Dan Mematuhi Rules Yang Ada
  `
  }

  // Leave
  exports.goodbye = () => {
  return `Tetap Putus Asa Jangan Semangat Dan Jadilah Beban Keluarga 🤙🗿
  `
  } 

  // Info
  exports.sinfobot = (prefix) => {
  return`  *🤖 Bot Info*
  ◩ ${prefix}ping
  ◩ ${prefix}owner
  ◩ ${prefix}creator
  ◩ ${prefix}menu
  ◩ ${prefix}delete
  ◩ ${prefix}donasi
  ◩ ${prefix}rules
  ◩ ${prefix}sewabot
  ◩ ${prefix}report
  `
  }

  // Owner
  exports.sowner = (prefix) => {
  return`  *👦 Owner Menu*
  ◩ > / $ / =>
  ◩ ${prefix}banned
  ◩ ${prefix}unbanned
  ◩ ${prefix}banchat
  ◩ ${prefix}unbanchat
  ◩ ${prefix}autoreact
  ◩ ${prefix}setmenu
  ◩ ${prefix}join [link]
  ◩ ${prefix}leave
  ◩ ${prefix}self
  ◩ ${prefix}public
  ◩ ${prefix}setppbot
  ◩ ${prefix}block @user
  ◩ ${prefix}unblock @user 
  ◩ ${prefix}bc
  ◩ ${prefix}bcgc
  ◩ ${prefix}listpc
  ◩ ${prefix}listgc
`
}

// Group
  exports.sgrup = (prefix) => {
	return`  👥 Group Menu*
  ◩ ${prefix}antilink
  ◩ ${prefix}antiwame
  ◩ ${prefix}antivirtex
  ◩ ${prefix}nsfw
  ◩ ${prefix}event
  ◩ ${prefix}afk [alasan]
  ◩ ${prefix}tagall
  ◩ ${prefix}hidetag
  ◩ ${prefix}liston
  ◩ ${prefix}linkgroup
  ◩ ${prefix}revoke
  ◩ ${prefix}ephemeral [option]
  ◩ ${prefix}setppgc
  ◩ ${prefix}setname [text]
  ◩ ${prefix}group [option]
  ◩ ${prefix}add @user
  ◩ ${prefix}kick @user
  ◩ ${prefix}promote @user
  ◩ ${prefix}demote @user
  ◩ ${prefix}absen
  ◩ ${prefix}hadir
  ◩ ${prefix}tidakhadir
  ◩ ${prefix}cekabsen
  ◩ ${prefix}hapusabsen
  `
  }

  // Rpg
  exports.srpg = (prefix) => {
  return`  *🏔️ Rpg Menu*
  ◩ ${prefix}profile
  ◩ ${prefix}leaderboard
  ◩ ${prefix}daily
  ◩ ${prefix}monthly
  ◩ ${prefix}gajian
  ◩ ${prefix}judi
  ◩ ${prefix}berburu
  ◩ ${prefix}nebang
  ◩ ${prefix}mancing
  ◩ ${prefix}mining
  ◩ ${prefix}adventure
  ◩ ${prefix}transfer
  ◩ ${prefix}kill
  ◩ ${prefix}slot
  ◩ ${prefix}buy
  ◩ ${prefix}sell
  ◩ ${prefix}heal
  ◩ ${prefix}bansos
  `
  }

  // Database
  exports.sdatabase = (prefix) => {
  return`  *📂 Database Menu*
  ◩ ${prefix}absen
  ◩ ${prefix}hadir
  ◩ ${prefix}tidakhadir
  ◩ ${prefix}cekabsen
  ◩ ${prefix}hapusabsen
  ◩ ${prefix}setcmd [reply sticker/pesan]
  ◩ ${prefix}delcmd [reply sticker/pesan]
  ◩ ${prefix}listcmd
  ◩ ${prefix}lockcmd
  ◩ ${prefix}addmsg
  ◩ ${prefix}getmsg
  ◩ ${prefix}listmsg
  ◩ ${prefix}delmsg
  `
  }

  // Search
  exports.ssearch = (prefix) => {
  return`  *🔎 Search Menu*
  ◩ ${prefix}pinterest [query]
  ◩ ${prefix}pantun
  ◩ ${prefix}google [query]
  ◩ ${prefix}gimage [query]
  ◩ ${prefix}kbbi [query]
  ◩ ${prefix}darkjokes
  ◩ ${prefix}igstalk [username]
  ◩ ${prefix}ghstalk [username]
  ◩ ${prefix}wallpaper
  `
  }

  // Download
  exports.sdown = (prefix) => {
  return`  *📥 Download Menu*
  ◩ ${prefix}tiktok [url]
  ◩ ${prefix}tiktokwm [url]
  ◩ ${prefix}tiktoknowm [url]
  ◩ ${prefix}tiktokaudio [url]
  ◩ ${prefix}instagram [url]
  ◩ ${prefix}twitter [url]
  ◩ ${prefix}facebook [url]
  ◩ ${prefix}ytmp4 [url]
  ◩ ${prefix}ytmp3 [url]
  ◩ ${prefix}play [judul]
  ◩ ${prefix}ytsearch [judul]
  ◩ ${prefix}gitclone
  `
  }

  // Convert
  exports.sconverter = (prefix) => {
  return`  *⏳ Convert Menu*
  ◩ ${prefix}toimage
  ◩ ${prefix}smeme
  ◩ ${prefix}smeme2
  ◩ ${prefix}sticker
  ◩ ${prefix}tovideo
  ◩ ${prefix}togif
  ◩ ${prefix}tourl
  ◩ ${prefix}readmore
  ◩ ${prefix}ttp [teks]
  ◩ ${prefix}emojimix 😎+😂
  ◩ ${prefix}semoji [emoji]
  ◩ ${prefix}ssweb
  ◩ ${prefix}nulisbiasa
  ◩ ${prefix}nuliskanan
  ◩ ${prefix}nuliskiri
  ◩ ${prefix}foliokanan
  ◩ ${prefix}foliokiri
  `
  }

  // Informasi
  exports.sinfo = (prefix) => {
  return`  *ℹ️️ Informasi Menu*
  ◩ ${prefix}infogempa
  ◩ ${prefix}covid
  ◩ ${prefix}faktaunik
  ◩ ${prefix}merdeka-news 
  ◩ ${prefix}kontan-news 
  ◩ ${prefix}cnbc-news 
  ◩ ${prefix}tribun-news 
  ◩ ${prefix}indozone-news 
  ◩ ${prefix}kompas-news 
  ◩ ${prefix}detik-news 
  ◩ ${prefix}daily-news 
  ◩ ${prefix}inews-news 
  ◩ ${prefix}okezone-news 
  ◩ ${prefix}sindo-news 
  ◩ ${prefix}tempo-news 
  ◩ ${prefix}antara-news 
  ◩ ${prefix}cnn-news 
  ◩ ${prefix}fajar-news 
  `
  }

  // Textpro Menu
  exports.stextpro = (prefix) => {
  return`  *🎨 Textpro Menu*
  ◩ ${prefix}serti1 [teks]
  ◩ ${prefix}serti2 [teks]
  ◩ ${prefix}serti3 [teks]
  ◩ ${prefix}blackpink [teks]
  ◩ ${prefix}neon [teks]
  ◩ ${prefix}magma [teks]
  ◩ ${prefix}3dstone [teks]
  ◩ ${prefix}halloween [teks]
  ◩ ${prefix}horror [teks]
  ◩ ${prefix}larva [teks]
  ◩ ${prefix}toxic [teks]
  ◩ ${prefix}marvel [teks|teks]
  ◩ ${prefix}potter [teks]
  ◩ ${prefix}pornhub [teks|teks]
  ◩ ${prefix}tahta [teks]
  `
  }

  // Photooxy
  exports.sphoto = (prefix) => {
  return`  *🖼️ Photooxy Menu*
  ◩ ${prefix}3d-underwater  
  ◩ ${prefix}3dtext-pig  
  ◩ ${prefix}3dvalentine-cards  
  ◩ ${prefix}anonymous-neon  
  ◩ ${prefix}advanced-glow  
  ◩ ${prefix}art-shader  
  ◩ ${prefix}angels-wings 
  `
  }

  // Ephoto
  exports.spoto = (prefix) => {
  return`  *📸 Ephoto Menu*
  ◩ ${prefix}3dnature
  ◩ ${prefix}bevel
  ◩ ${prefix}burnpaper
  ◩ ${prefix}quotesgrass
  ◩ ${prefix}stars
  ◩ ${prefix}flaming
  ◩ ${prefix}romance
  ◩ ${prefix}gerbang
  ◩ ${prefix}fur
  ◩ ${prefix}funnycup
  `
  }

  // Game
  exports.sgame = (prefix) => {
  return`  *🎮 Game Menu*
  ◩ ${prefix}tebak lagu
  ◩ ${prefix}tebak gambar
  ◩ ${prefix}tebak kata
  ◩ ${prefix}tebak kalimat
  ◩ ${prefix}tebak lirik
  ◩ ${prefix}tebak lontong
  ◩ ${prefix}kuismath
  `
  }

  // Fun
  exports.sfun = (prefix) => {
  return`  *🤹 Fun Menu*
  ◩ ${prefix}truth
  ◩ ${prefix}dare
  ◩ ${prefix}bagaimanakah
  ◩ ${prefix}kapankah
  ◩ ${prefix}dimanakah
  ◩ ${prefix}suit [✌️/✊/✋]
  ◩ ${prefix}aduayam [🐤/🐓/🐥/🐣/🦃]
  ◩ ${prefix}suitpvp [tag user]
  ◩ ${prefix}ttt
  ◩ ${prefix}delttt
  `
  }

  // Anime
  exports.sanime = (prefix) => {
  return`    *⛩️ Anime Menu*
  ◩ ${prefix}waifu
  ◩ ${prefix}loli
  ◩ ${prefix}cry
  ◩ ${prefix}kill
  ◩ ${prefix}hug
  ◩ ${prefix}pat
  ◩ ${prefix}lick
  ◩ ${prefix}kiss
  ◩ ${prefix}bite
  ◩ ${prefix}yeet
  ◩ ${prefix}neko
  ◩ ${prefix}bully
  ◩ ${prefix}bonk
  ◩ ${prefix}wink
  ◩ ${prefix}poke
  ◩ ${prefix}nom
  ◩ ${prefix}slap
  ◩ ${prefix}smile
  ◩ ${prefix}wave
  ◩ ${prefix}awoo
  ◩ ${prefix}blush
  ◩ ${prefix}smug
  ◩ ${prefix}glomp
  ◩ ${prefix}happy
  ◩ ${prefix}dance
  ◩ ${prefix}cringe
  ◩ ${prefix}cuddle
  ◩ ${prefix}highfive
  ◩ ${prefix}shinobu
  ◩ ${prefix}megumin
  ◩ ${prefix}handhold
  ◩ ${prefix}yotsuba
  ◩ ${prefix}shinomiya
  ◩ ${prefix}yumeko
  ◩ ${prefix}tejina
  ◩ ${prefix}chiho
  ◩ ${prefix}toukachan
  ◩ ${prefix}akira
  ◩ ${prefix}itori
  ◩ ${prefix}kurumi
  ◩ ${prefix}miku
  ◩ ${prefix}pokemon
  ◩ ${prefix}ryujin
  ◩ ${prefix}kaori
  ◩ ${prefix}shizuka
  ◩ ${prefix}kotori
  ◩ ${prefix}kaga
  ◩ ${prefix}mikasa
  ◩ ${prefix}akiyama
  ◩ ${prefix}gremory
  ◩ ${prefix}isuzu
  ◩ ${prefix}cosplay
  ◩ ${prefix}shina
  ◩ ${prefix}kagura
  ◩ ${prefix}shinka
  ◩ ${prefix}eba
  ◩ ${prefix}deidara
  ◩ ${prefix}itachi
  ◩ ${prefix}madara
  ◩ ${prefix}yuki
  ◩ ${prefix}asuna
  ◩ ${prefix}ayuzawa
  ◩ ${prefix}chitoge
  ◩ ${prefix}emilia
  ◩ ${prefix}hestia
  ◩ ${prefix}inori
  ◩ ${prefix}ana
  ◩ ${prefix}boruto
  ◩ ${prefix}erza
  ◩ ${prefix}kakasih
  ◩ ${prefix}sagiri
  ◩ ${prefix}minato
  ◩ ${prefix}naruto
  ◩ ${prefix}nezuko
  ◩ ${prefix}onepiece
  ◩ ${prefix}sakura
  ◩ ${prefix}sasuke
  ◩ ${prefix}tsunade
  ◩ ${prefix}jhota
  ◩ ${prefix}hinata
  `
  }

  // Nsfw
  exports.snsfw = (prefix) => {
  return`  *🔞 Nsfw Menu*
  ◩ ${prefix}ahegeo
  ◩ ${prefix}ass
  ◩ ${prefix}bdsm
  ◩ ${prefix}blowjob
  ◩ ${prefix}cuckold 
  ◩ ${prefix}cum 
  ◩ ${prefix}ero
  ◩ ${prefix}femdom
  ◩ ${prefix}foot
  ◩ ${prefix}gangbang
  ◩ ${prefix}glasses
  ◩ ${prefix}hentai
  ◩ ${prefix}ahy
  ◩ ${prefix}mstb
  ◩ ${prefix}neko
  ◩ ${prefix}orgy
  ◩ ${prefix}panties
  ◩ ${prefix}pussy
  ◩ ${prefix}yuri
  ◩ ${prefix}zettai
  `
  }

  // Asupan
  exports.sasupan = (prefix) => {
  return`  *🧖 Asupan Menu*
  ◩ ${prefix}hijaber
  ◩ ${prefix}cecan
  ◩ ${prefix}bocil
  ◩ ${prefix}ukhty
  ◩ ${prefix}gheayubi
  ◩ ${prefix}rikagusriani
  ◩ ${prefix}santuy
  `
  }

  // Cecan
  exports.scecan = (prefix) => {
  return`  *👧 Cecan Menu*
  ◩ ${prefix}china
  ◩ ${prefix}vietnam
  ◩ ${prefix}thailand
  ◩ ${prefix}indonesia
  ◩ ${prefix}korea
  ◩ ${prefix}japan
  ◩ ${prefix}malaysia
  `
  }

  // Telegram Sticker
  exports.stele = (prefix) => {
  return`  *♻️ Telegram Sticker*
  ◩ ${prefix}awoawo
  ◩ ${prefix}benedict
  ◩ ${prefix}chat
  ◩ ${prefix}dbfly
  ◩ ${prefix}dino_kuning
  ◩ ${prefix}doge
  ◩ ${prefix}gojosatoru
  ◩ ${prefix}hope_boy
  ◩ ${prefix}jisoo
  ◩ ${prefix}kr_robot
  ◩ ${prefix}kucing
  ◩ ${prefix}lonte
  ◩ ${prefix}manusia_lidi
  ◩ ${prefix}menjamet
  ◩ ${prefix}meow
  ◩ ${prefix}nicholas
  ◩ ${prefix}patrick
  ◩ ${prefix}popoci
  ◩ ${prefix}sponsbob
  ◩ ${prefix}kawan_sponsbob
  ◩ ${prefix}tyni
  `
  }

  // Primbon
  exports.sprimbon = (prefix) => {
  return`  *🕊️ Primbon Menu*
  ◩ ${prefix}nomorhoki
  ◩ ${prefix}artimimpi
  ◩ ${prefix}artinama
  ◩ ${prefix}ramaljodoh
  ◩ ${prefix}ramaljodohbali
  ◩ ${prefix}suamiistri
  ◩ ${prefix}ramalcinta
  ◩ ${prefix}cocoknama
  ◩ ${prefix}pasangan
  ◩ ${prefix}jadiannikah
  ◩ ${prefix}sifatusaha
  ◩ ${prefix}rezeki
  ◩ ${prefix}pekerjaan
  ◩ ${prefix}nasib
  ◩ ${prefix}penyakit
  ◩ ${prefix}tarot
  ◩ ${prefix}fengshui
  ◩ ${prefix}haribaik
  ◩ ${prefix}harisangar
  ◩ ${prefix}harisial
  ◩ ${prefix}nagahari
  ◩ ${prefix}arahrezeki
  ◩ ${prefix}peruntungan
  ◩ ${prefix}weton
  ◩ ${prefix}karakter
  ◩ ${prefix}keberuntungan
  ◩ ${prefix}memancing
  ◩ ${prefix}masasubur
  ◩ ${prefix}zodiak
  ◩ ${prefix}shio
  `
  }

  // Cerpen
  exports.scerpen = (prefix) => {
  return`  *📚 Cerpen Menu*
  ◩ ${prefix}cerpen anak
  ◩ ${prefix}cerpen bahasa daerah
  ◩ ${prefix}cerpen bahasa inggris
  ◩ ${prefix}cerpen bahasa jawa
  ◩ ${prefix}cerpen bahasa sunda
  ◩ ${prefix}cerpen budaya
  ◩ ${prefix}cerpen cinta
  ◩ ${prefix}cerpen cinta islami
  ◩ ${prefix}cerpen cinta pertama
  ◩ ${prefix}cerpen cinta romantis
  ◩ ${prefix}cerpen cinta sedih
  ◩ ${prefix}cerpen cinta segitiga
  ◩ ${prefix}cerpen cinta sejati
  ◩ ${prefix}cerpen galau
  ◩ ${prefix}cerpen gokil
  ◩ ${prefix}cerpen inspiratif
  ◩ ${prefix}cerpen jepang
  ◩ ${prefix}cerpen kehidupan
  ◩ ${prefix}cerpen keluarga
  ◩ ${prefix}cerpen kisah nyata
  ◩ ${prefix}cerpen korea
  ◩ ${prefix}cerpen kristen
  ◩ ${prefix}cerpen liburan
  ◩ ${prefix}cerpen lingkungan
  ◩ ${prefix}cerpen lucu
  ◩ ${prefix}cerpen malaysia
  ◩ ${prefix}cerpen mengharukan
  ◩ ${prefix}cerpen misteri
  ◩ ${prefix}cerpen motivasi
  ◩ ${prefix}cerpen nasihat
  ◩ ${prefix}cerpen nasionalisme
  ◩ ${prefix}cerpen olahraga
  ◩ ${prefix}cerpen patah hati
  ◩ ${prefix}cerpen penantian
  ◩ ${prefix}cerpen pendidikan
  ◩ ${prefix}cerpen pengalaman pribadi
  ◩ ${prefix}cerpen pengorbanan
  ◩ ${prefix}cerpen penyesalan
  ◩ ${prefix}cerpen perjuangan
  ◩ ${prefix}cerpen perpisahan
  ◩ ${prefix}cerpen persahabatan
  ◩ ${prefix}cerpen petualangan
  ◩ ${prefix}cerpen ramadhan
  ◩ ${prefix}cerpen remaja
  ◩ ${prefix}cerpen renungan
  ◩ ${prefix}cerpen rindu
  ◩ ${prefix}cerpen rohani
  ◩ ${prefix}cerpen romantis
  ◩ ${prefix}cerpen sastra
  ◩ ${prefix}cerpen sedih
  ◩ ${prefix}cerpen sejarah
  ◩ ${prefix}cerpen slice of life
  ◩ ${prefix}cerpen terjemahan
  ◩ ${prefix}cerpen thriller
  `
  }

  // Voice
  exports.svoice = (prefix) => {
  return`  *🎙️ Voice Changer*
  ◩ ${prefix}bass
  ◩ ${prefix}blown
  ◩ ${prefix}deep
  ◩ ${prefix}earrape
  ◩ ${prefix}fast
  ◩ ${prefix}fat
  ◩ ${prefix}nightcore
  ◩ ${prefix}reverse
  ◩ ${prefix}robot
  ◩ ${prefix}slow
  ◩ ${prefix}tupai
  `
  }

  // Random
  exports.srandom = (prefix) => {
  return`  *🎡 Random Menu*
  ◩ ${prefix}quotesanime
  ◩ ${prefix}quotes
  ◩ ${prefix}quotes2
  ◩ ${prefix}katabijak
  ◩ ${prefix}katailham
  ◩ ${prefix}fiersabersari
  ◩ ${prefix}katasenja
  `
  }

  // Thanks To
  exports.sthanksto= () => {
  return`  *🙏 Thanks To*
  ◩ Dika Ardnt
  ◩ Fatih Arridho
  ◩ Nurutomo
  ◩ Mhankbarbar
  ◩ Zeeone Ofc
  ◩ Ryuka Team
  ◩ Deff
  ◩ Yoga
  ◩ Riy
  ◩ ArullOfc
  ◩ Clara-DV
  `
  }
  
