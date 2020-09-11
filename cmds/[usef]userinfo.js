const Discord = require("discord.js");
const strftime = require("strftime");



  description: "Информация о пользователе.",
  module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first();
    let argsUser;
    if (member) argsUser = member.user;
    else argsUser = message.author;

    let statuses = {
      online: "В сети",
      idle: "Нет на месте",
      dnd: "Не беспокоить",
      offline: "Не в сети",
    };

    let game;
    if (!argsUser.presence.game)
      game = `Имеет статус **${statuses[argsUser.presence.status]}**`;
    else if (argsUser.presence.game.type == 0)
      game = `Играет в **${argsUser.presence.game.name}**`;
    else if (argsUser.presence.game.type == 1)
      game = `Стримит [**${argsUser.presence.game.name}**](${argsUser.presence.game.url})`;
    else if (argsUser.presence.game.type == 2)
      game = `Слушает **${argsUser.presence.game.name}**`;
    else if (argsUser.presence.game.type == 3)
      game = `Смотрит **${argsUser.presence.game.name}**`;
    else if (argsUser.presence.game.type == 4)
      game = `Cтатус **${argsUser.presence.game.name}**`
  
    let day = 1000 * 60 * 60 * 24;
    let date1 = new Date(message.createdTimestamp);
    let date2 = new Date(argsUser.createdTimestamp);
    let date3 = new Date(message.guild.member(argsUser).joinedTimestamp);
    let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day));
    let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day));
  


    let embed = new Discord.RichEmbed()
      .setTitle(argsUser.username)
  

      .addField(
        "Дата регистарции в Discord",
        `${strftime(
          "%d.%m.%Y в %H:%M",
          new Date(argsUser.createdTimestamp)
        )}\n(${diff1} дн. назад)`,
        true
      )
      .addField(
        "Активность:",
        (game),
        true
        )
      .addField(
        `Дата вступления в ${message.guild.name}`,
        
        `${strftime(
          "%d.%m.%Y в %H:%M",
          new Date(message.guild.member(argsUser).joinedTimestamp)
        )}\n(${diff2} дн. назад)`,
        false
      )
      

      .addField(
        "Роли",
        message.guild
          .member(argsUser)
          .roles.filter((r) => r.id != message.guild.id)
          .map((role) => role.name)
          .join(", ") || "...",
          true
      )
      .addField(
        "Никнейм:",
        (`${argsUser}`),
        true
        )
        .addField(
          "Аватар:",
          (`[Здесь](${argsUser.avatarURL})`),
          true
          )

      
      .setColor(message.guild.member(argsUser).displayHexColor)
      .setTimestamp()
      .setThumbnail(argsUser.avatarURL)
      .setFooter(`ID: "${argsUser.id}"`);
    message.channel.send(embed);
      }

module.exports.help = {
    name: "userinfo"
};