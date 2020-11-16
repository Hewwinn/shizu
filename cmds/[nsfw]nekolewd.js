const Discord = require("discord.js"); //основа
module.exports.run = async (bot, message, args) => { //модуль старт
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix; //применение конфина
    var {get} = require("axios");
    if (!message.channel.nsfw) return message.channel.send("Вы находитесь не в NSFW канале!")
    get("https://neko-love.xyz/api/v1/nekolewd/")
    .then(res => {
    try {
        message.delete(); 
        let embed = new Discord.MessageEmbed() //ембед
        .setAuthor(bot.user.username, bot.user.avatarURL()) //автор
            .setColor(0xf8f105) //цвет полоски
            .setImage(res.data.url) //маленькая картинка справа текста
            .setFooter("Love ", message.author.avatarURL()) //строчка в конце
            .setTimestamp(new Date()) //время отправления

        message.channel.send({ //отправление
            embed //ембеда в чат
        });
        
    } catch (e) { //при ошибке
        message.reply(e.message) //выводит сообщение в чат
    }
})}

    

module.exports.help = { //настройка модуля
    name: "nekol" //комманда, название модуля
}
