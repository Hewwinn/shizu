const Discord = require("discord.js"); //основа
module.exports.run = async (bot, message, args) => { //модуль старт
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix; //применение конфина
    const client = require('nekos.life');
    const neko = new client();

    let response = neko.sfw.foxGirl();


 try {
    let embed = new Discord.MessageEmbed() //ембед
      .setAuthor(bot.user.username, bot.user.avatarURL()) //автор
        .setColor(0xf8f105) //цвет полоски
        .setImage((await response).url) //маленькая картинка справа текста
        .setFooter("Love ", message.author.avatarURL()) //строчка в конце    
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
    name: "foxgirl" //комманда, название модуля
}