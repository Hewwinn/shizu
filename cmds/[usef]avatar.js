const Discord = require("discord.js"); //основа
module.exports.run = async (bot, msg, args) => { 
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix; //применение конфина
    msg.delete();
if (msg.mentions.members.first() == null)
    msg.channel.send({embed: {
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL()
          },
        description: `Ваш аватар!: [Здесь](${msg.author.avatarURL({dynamic: true, size: 2048})})`,
        color: 0xf8f105,
        image: {
            url: msg.author.avatarURL({dynamic: true, size: 2048})
        },
        timestamp: new Date(),
        footer: {
          icon_url: msg.author.avatarURL(),
          text: msg.author.username
        }
      }
    })
.catch(e => { msg.channel.send(`Error: ${e}`)
})

else if (msg.mentions.members.first() != null)
msg.channel.send({embed: {
    author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL()
      },
    description: `Аватар пользователя ${msg.mentions.members.first().user.username}!: [Здесь](${msg.mentions.members.first().user.avatarURL({dynamic: true, size: 2048})})`,
    color: 0x4df055,
    image: {
        url: msg.mentions.members.first().user.avatarURL({dynamic: true, size: 2048})
    },
    timestamp: new Date(),
    footer: {
      icon_url: msg.author.avatarURL(),
      text: msg.author.username
    }
  }
})
.catch(e => { msg.channel.send(`Error: ${e}`)
})
}


module.exports.help = { //настройка модуля
    name: `avatar` //комманда, название модуля
};

