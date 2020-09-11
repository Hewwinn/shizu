const Discord = require("discord.js");
module.exports.run = async (bot, msg, args) => {
    let config = require("./json/config.json")
    let prefix = config.prefix;
    const ownerId = "334642472175009792"
    
    if (msg.author.id === ownerId) {
    try {
        let embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
            .setTitle("Update")
            .setDescription("v0.5.3 [alpha 3] \n переделан модуль help, party, usef, sys. Добавлен модуль NSFW c 39 коммандами. В модуль party добавлены комманды `^nekogif`, `^pat`, `^poke`, `^smug`, `^tickle`. Добавлен файл .gitignore")
            .setColor(0xf8f105)
            .setThumbnail("https://images-ext-1.discordapp.net/external/pVU0cfxGdPvUlnCb-OK0fW747QlLgfEmYh7VklK62P4/https/buchachlg.com.ua/fileadmin/system_lg_buchach/template/images/loading.gif?width=300&height=225")
            .setFooter("Love", msg.author.avatarURL)
            .setTimestamp()

        msg.channel.send({
            embed
        });
    } catch (e) {
        msg.reply(e.message)
    }
}}
    

module.exports.help = {
    name: "update"
}