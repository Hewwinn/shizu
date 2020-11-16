const Discord = require("discord.js"); //основа
module.exports.run = async (bot, message, args) => { //модуль старт
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix //применение конфина
    const ownerId = "334642472175009792"
    
    if (message.author.id === ownerId) {
        try {
          let embed = new Discord.MessageEmbed() //ембед
          .setAuthor(bot.user.username, bot.user.avatarURL()) //добавляем автора
              .setTitle("Перезагрузка!") //как видишь здесь fas - это БД, а phrases - твои рандомные фразы//
              .setColor(0x4df055) //цвет
              .setThumbnail("https://images-ext-1.discordapp.net/external/pVU0cfxGdPvUlnCb-OK0fW747QlLgfEmYh7VklK62P4/https/buchachlg.com.ua/fileadmin/system_lg_buchach/template/images/loading.gif?width=300&height=225") //маленькая картинка справа текста
              .setFooter('Love') //текст снизу
          .setTimestamp() //строчка где время отправки
  
          message.channel.send({ //отправляет в чат 
              embed //в чат ембед
          }); //продолжение прошлой строчки
      } catch (e) { //при ошибке выводит сообщение
          message.reply(e.message) //это сообщение
      }
      console.log('Отключение.')
bot.destroy()
bot.login("NjY3NDAzNDUzNjA5NDEwNTcw.XiCN5w.UW7Lu0AyMswAhY7NX6Bon0NPMpE")
console.log('Готово.')
    }}
    

module.exports.help = { //настройка модуля
    name: "reboot" //комманда, название модуля
}
