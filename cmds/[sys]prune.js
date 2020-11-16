const Discord = require("discord.js"); //основа
module.exports.run = async (bot, message, args) => { //модуль старт
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix; //применение конфина



      if (!message.member.hasPermission("MANAGE_MESSAGES") > !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("У вас нет прав для этого действия!")
      if (isNaN(args[0])) return message.channel.send("Введите допустимое число.")
      if (args[0] > 100) return message.channel.send("Введите число не превышающее порог в 100!")
      if (args[0] < 2) return message.channel.send("Минимальное число 2.")
      message.delete();
      message.channel.bulkDelete(args[0])
      .then(messages => message.channel.send(`Удаленно ${messages.size}/${args[0]} сообщений.`))
      .catch(() => message.channel.send("Что-то пошло не так!"))
     
    }
    

    module.exports.help = { //настройка модуля
        name: "prune" //комманда, название модуля
    }