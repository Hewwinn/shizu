const Discord = require("discord.js"); //основа
const { search } = require("ffmpeg-static");
const { validateURL } = require("ytdl-core");
module.exports.run = async (bot, message, args) => { //модуль старт
    const YouTubeAPI = require("simple-youtube-api");
    const YOUTUBE_API_KEY = require("./json/config.json");
    const youtube = new YouTubeAPI('YOUTUBE_API_KEY')
    let config = require("./json/config.json") //конфиг префикса
    let prefix = config.prefix //применение конфина
    const ytdl = require("ytdl-core")
    const voiceChannel = message.member.voice.channel
    let opus = require("@discordjs/opus")
    
    message.delete();
if(!voiceChannel) return message.channel.send({embed: {
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
const permissions = voiceChannel.permissionsFor(bot.user)
if(!permissions.has('CONNECT')) return message.channel.send({embed: {
    author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL()
      },
    title: message.author.username,
    description: `У меня нет прав для входа в голосовой чат!`,
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
if(!permissions.has('SPEAK')) return message.channel.send({embed: {
    author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL()
      },
    title: message.author.username,
    description: `У меня нет прав говорить в голосовом чате!`,
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

 try{
     var connection = await voiceChannel.join()
 } catch (error) {
     console.log(`Вот: ${error}`)
     return message.channel.send({embed: {
        author: {
            name: bot.user.username,
            icon_url: bot.user.avatarURL()
          },
        title: message.author.username,
        description: `Произошла ошибка при подсоединении к голосовому чату!`,
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
    })}
if(!args[0]) return message.channel.send({embed: {
    author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL()
      },
    title: message.author.username,
    description: `Укажите Url!`,
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
const search = youtube.searchVideos(args.join(' '), 1);
const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
const url = args[0];
const urlValid = videoPattern.test(args[0]);
let stream = ytdl(args[0] || search);

    

 
var info = ytdl.getInfo(args[0]);

var options = { seek: 0, volume: 1};
 


connection.play(stream, options)
.on('finish', () => {
    voiceChannel.leave()
})
.on('error', error => {
    console.log(error)
})
}


module.exports.help = { //настройка модуля
    name: "play" //комманда, название модуля
}
