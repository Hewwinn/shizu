const Discord = require("discord.js"); //основа
module.exports.run = async (bot, message, args) => { //модуль старт
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix; //применение конфина
    const slapup = require("./json/slap.json"); 
    var {get} = require("axios");

    if (message.mentions.members.first() == null)
    try {
        let embed = new Discord.RichEmbed() //ембед
        .setAuthor(bot.user.username, bot.user.avatarURL) //автор
            .setTitle(message.author.username + " прошу укажите пользователя!")
            .setColor(0xf8f105) //цвет полоски
            .setThumbnail()
            .setFooter("Love ", message.author.avatarURL) //строчка в конце
            .setTimestamp(new Date()) //время отправления

        message.channel.send({ //отправление
            embed //ембеда в чат
        });
        message.delete(); 
    } catch (e) { //при ошибке
        message.reply(e.message) //выводит сообщение в чат
    }


    else if (message.mentions.members.first() != null)
    get("https://neko-love.xyz/api/v1/slap/", { header: { "Content-Type": "application/json" } })
    .then(res => {
    try {
        let embed = new Discord.RichEmbed() //ембед
        .setAuthor(bot.user.username, bot.user.avatarURL) //автор
            .setTitle(message.author.username + slapup.slapp[Math.floor(Math.random() * slapup.slapp.length)] + message.mentions.members.first().user.username)
            .setColor(0xf8f105) //цвет полоски
            .setImage(res.data.url) //маленькая картинка справа текста
            .setFooter("Love ", message.author.avatarURL) //строчка в конце
            .setTimestamp(new Date()) //время отправления

        message.channel.send({ //отправление
            embed //ембеда в чат
        });
        message.delete(); 
    } catch (e) { //при ошибке
        message.reply(e.message) //выводит сообщение в чат
    }
})}

    

module.exports.help = { //настройка модуля
    name: "slap" //комманда, название модуля
}
