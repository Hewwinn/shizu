const Discord = require("discord.js");
module.exports.run = async (bot, msg, args) => {
    let config = require("./json/config.json")
    let prefix = config.prefix;
    try {
        let embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
            .setTitle("Hewwinn")
            .setColor(0xf8f105)
            .setThumbnail("https://cdn.discordapp.com/avatars/334642472175009792/9321dd3f9e1981079efe5a63a2ffef3e.jpg?size=512")
            .setFooter("Hewwinn#9502")
            .setTimestamp()

        msg.channel.send({
            embed
        });
    } catch (e) {
        msg.reply(e.message)
    }
}
    

module.exports.help = {
    name: "author"
}