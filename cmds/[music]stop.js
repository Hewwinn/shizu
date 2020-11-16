const Discord = require("discord.js"); //основа
module.exports.run = async (bot, message, args) => { //модуль старт
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix //применение конфина
    const ytdl = require("ytdl-core")
    const voiceChannel = message.member.voice.channel
message.delete();
if(!message.member.voice.channel) return message.channel.send({embed: {
   author: {
       name: bot.user.username,
       icon_url: bot.user.avatarURL()
     },
   title: message.author.username,
   description: `Вы не находитесь ни в одном голосовом чате!`,
   color: 0xf8f105,
   thumbnail: {
       url: `https://i.pinimg.com/originals/17/47/75/1747750e60ccf3dc9a79849c0a0d8b91.gif`
   },
   timestamp: new Date(),
   footer: {
     icon_url: message.author.avatarURL(),
     text: message.author.username
   }
 }
})
message.member.voice.channel.leave()
return undefined
}

module.exports.help = { //настройка модуля
    name: `stop` //комманда, название модуля
};
