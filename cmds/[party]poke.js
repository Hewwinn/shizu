const Discord = require("discord.js"); //основа
module.exports.run = async (bot, message, args) => { //модуль старт
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix; //применение конфина
    const client = require('nekos.life');
    const neko = new client();

    let response = neko.sfw.poke();

    if (message.mentions.members.first() != null) 
    try {
    let embed = new Discord.RichEmbed() //ембед
      .setAuthor(bot.user.username, bot.user.avatarURL) //автор
        .setColor(0xf8f105) //цвет полоски
        .setTitle(message.author.username + " тыкает " + message.mentions.members.first().user.username + "а(у)!")
        .setImage((await response).url) //маленькая картинка справа текста
        .setFooter("Love ", message.author.avatarURL) //строчка в конце    
        .setTimestamp(new Date()) //время отправления
     
        message.channel.send({ //отправление
        embed //ембеда в чат
    })
     message.delete(); 
  } catch (e) { //при ошибке
       message.reply(e.message) //выводит сообщение в чат
   }


else if (message.mentions.members.first() == null) 
try {
let embed = new Discord.RichEmbed() //ембед
  .setAuthor(bot.user.username, bot.user.avatarURL) //автор
    .setColor(0xf8f105) //цвет полоски
    .setTitle("Укажите пожалуйста пользователя.")
    .setThumbnail(message.author.avatarURL)
    .setFooter("Love ", message.author.avatarURL) //строчка в конце    
    .setTimestamp(new Date()) //время отправления
 
    message.channel.send({ //отправление
    embed //ембеда в чат
})
 message.delete(); 
} catch (e) { //при ошибке
   message.reply(e.message) //выводит сообщение в чат
}
}

    

module.exports.help = { //настройка модуля
    name: "poke" //комманда, название модуля
}
