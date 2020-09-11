const Discord = require("discord.js"); //основа
module.exports.run = async (bot, message, args) => { //модуль старт
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix; //применение конфина
    var {get} = require("axios");
    get("https://neko-love.xyz/api/v1/neko/", { header: { "Content-Type": "application/json" } })
    .then(res => {
    try {
        let embed = new Discord.RichEmbed() //ембед
        .setAuthor(bot.user.username, bot.user.avatarURL) //автор
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
    name: "neko" //комманда, название модуля
}
