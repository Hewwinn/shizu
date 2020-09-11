const Discord = require('discord.js'); 
const bot = new Discord.Client(); 
bot.commands = new Discord.Collection(); 
const fs = require('fs'); 
let config = require('./cmds/json/config.json'); 
const prefix = config.prefix;
const token = config.token; 





const ownerId = "334642472175009792"



bot.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('^kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});


bot.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('^ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      
      message.reply("You didn't mention the user to ban!");
    }
  }
});


bot.on('ready', function() {
    setInterval(async () => {
  const statuslist = [
    `^help | Version 0.5.3`,
    `^help | ${bot.channels.size} каналов`,
    `^help | ${bot.users.size} пользователей`,
    `^help | Golden Night`,
    `^help | Update`,
    `^help | Anime`,
    `^help | yummyanime.club`,
    `^help | Бот в разработке`,
    `^help | Игры`,
    `^help | ПК`,
    `^help | Программирование`,
    `^help | Железо в ПК`, 

  ];
  const random = Math.floor(Math.random() * statuslist.length);
  
  try {
    await bot.user.setPresence({
      game: {
        name: `${statuslist[random]}`,
        type: "PLAYING"
      },
    });
  } catch (error) {
    console.error(error);
  }
  }, 10000);
  })



  
;

bot.on('message', (message, args) => {
    if(message.content === "^idle")
    if (message.author.id === ownerId) {
    message.delete();
    try {
      bot.user.setPresence({
          status: "idle"
      });
    } catch (error) {
      console.error(error);
    }}});

    bot.on('message', (message, args) => {
        if(message.content === "^online")
        if (message.author.id === ownerId) {
          message.delete();
        try {
          bot.user.setPresence({
              status: "online"
          });
        } catch (error) {
          console.error(error);
        }}});

        bot.on('message', (message, args) => {
            if(message.content === "^dnd")
            if (message.author.id === ownerId) {
              message.delete();
            try {
              bot.user.setPresence({
                  status: "dnd"
              });
            } catch (error) {
              console.error(error);
            }}});

            

                





//const fas = require("./cmds/json/Shizuunichtojit.json"); 
bot.on('message', (message, args) => {   
    if(message.content === "Shizu уничтожить " + message.mentions.members.first()){ 
        if (message.author.id === ownerId) {
          try {
            let embed = new Discord.RichEmbed() 
             .setAuthor(bot.user.username, bot.user.avatarURL) 
             .setTitle("Комманда временно не доступна! " + message.mentions.members.first().user.username + " будет уничтожен(а ) позже.") 
             .setColor(0xf8f105) 
             .setThumbnail("https://pngimg.com/uploads/exclamation_mark/exclamation_mark_PNG35.png")
             .setFooter('Love') 
             .setTimestamp() 
        
            //try {
             //   let embed = new Discord.RichEmbed() 
               // .setAuthor(bot.user.username, bot.user.avatarURL) 
               //     .setTitle(fas.phrases[Math.floor(Math.random() * fas.phrases.length)])
               //     .setColor(0x4df055)
                //    .setImage(fas.image[Math.floor(Math.random() * fas.image.length)])
                //    .setDescription(`Слушаюсь мой господин, ` + message.mentions.members.first().user.username + " скоро будет уничтожен(а)!") 
                 //   .setFooter('') 
              //  .setTimestamp() 
        
                message.channel.send({ 
                    embed 
                }); 
            } catch (e) { 
                message.reply(e.message)
            }
}}});



bot.on('message', (message) => {  
    if(message.content === "Shizu помоги"){ 
    message.channel.send("Я занята!") 
}});

bot.on('message', (message) => { 
    if(message.content === "Shizu привет"){ 
    message.channel.send("И тебе привет!") 
}});

bot.on('message', (message) => {  
    if(message.content === "Shizu да пошла ты"){ 
    message.channel.send("Сам иди!") 
}});

bot.on('message', (message) => {
    if(message.content === "Ебать"){ 
    message.channel.send("Что случилось!") 
}});

bot.on('message', (message) => { 
    if(message.content === "Ч"){ 
    message.channel.send("Чебоксары") 
}});

bot.on('message', (message) => { 
    if(message.content === "ч"){ 
    message.channel.send("Чебоксары") 
}});



fs.readdir('./cmds/', (err,files)=>{ //где хронятся файлы с модулями
    if(err) console.log(err); //основа бота
    let prefix = config.prefix //конфиг префикса
    let jsfiles = files.filter(f => f.split(".").pop() === "js"); //основа бота
    if(jsfiles.length <=0) console.log("Команд в папке cmds не обнаружено"); //если модулей не обнаружено
    console.log(`info: Загружено ${jsfiles.length} команд`); //если комманды найдены
    });
    function loadCmds() { //основа бота
      fs.readdir('./cmds/', (err, files) => { //часть бота
  
          if (err) console.log(err); //часть бота
  
          let jsfile = files.filter(f => f.split(".").pop() === "js") //часть бота
          if (jsfile.length <= 0) { //часть бота
              return; //повтор            
          }
          jsfile.forEach((f, i) => {
              delete require.cache[require.resolve(`./cmds/${f}`)];
              let props = require(`./cmds/${f}`);
              bot.commands.set(props.help.name, props);
          });
      });
  }
  loadCmds(); //часть бота
  
  bot.on('ready', () => { //об'являем
    console.log(`info: Привет я ${bot.user.username}`); //если бот запустился приветствие
    bot.generateInvite(["ADMINISTRATOR"]).then(link => { //генерирует инвайт бота
     console.log("Инвайт бота: " + link); //тоже инвайт
    })
  });
  
  bot.on('message', async message => { //об'ява
  if(message.author.bot) return; //часть бота
  if(message.channel.type == "dm") return; //часть бота дм
  let user = message.author.username; //часть бота с никами
  let userid = message.author.id; //часть бота
  let messageArray = message.content.split(" "); //часть бота
  let command = messageArray[0].toLowerCase(); //часть бота
  let args = messageArray.slice(1); //часть бота
  if(!message.content.startsWith(prefix)) return; //часть бота
  let cmd = bot.commands.get(command.slice(prefix)); //часть бота
  if(cmd)cmd.run(bot,message,args); //часть бота
  });
  bot.on("message", msg => { //об'ява
      if (msg.author.bot) return; //часть бота
      if (msg.channel.type === "dm") return; //часть бота дм
  
      if (!msg.content.startsWith(prefix)) return; //xfcnm ,jnf
      if (msg.content.indexOf(prefix) !== 0) return; //часть бота
  
      let msgArray = msg.content.split(" "); //часть бота
      let cmd = msgArray[0].toLocaleLowerCase(); //часть бота 
      let args = msgArray.slice(1); //часть бота
  
      let commandfile = bot.commands.get(cmd.slice(prefix.length)); //часть бота
      if (commandfile) commandfile.run(bot, msg, args); //часть бота
  });
  
  bot.login(token);