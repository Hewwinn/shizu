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
    const user = message.mentions.members.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`Successfully kicked ${member.user.tag}`);
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
    `^help | Version 0.5.5`,
    `^help | ${bot.channels.cache.filter((m) => m.type === "text").size} каналів`,
    `^help | ${bot.users.cache.size} корустувачів`,
    `^help | Golden Night`,
    `^help | Update`,
    `^help | Anime`,
    `^help | yummyanime.club`,
    `^help | Бот в розробці`,
    `^help | Ігри`,
    `^help | ПК`,
    `^help | Програмування`,
    `^help | Залізо в ПК`, 

  ];
  const random = Math.floor(Math.random() * statuslist.length);
  
  try {
    await bot.user.setPresence({
      activity: {
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
//bot.on('message', (message, args) => {   
   // if(message.content === "Shizu уничтожить " + message.mentions.members.first()){ 
       // if (message.author.id === ownerId) {
        //  try {
         //   let embed = new Discord.MessageEmbed() 
          //   .setAuthor(bot.user.username, bot.user.avatarURL) 
           //  .setTitle("Комманда временно не доступна! " + message.mentions.members.first().user.username + " будет уничтожен(а ) позже.") 
           //  .setColor(0xf8f105) 
           //  .setThumbnail("https://pngimg.com/uploads/exclamation_mark/exclamation_mark_PNG35.png")
            // .setFooter('Love') 
             //.setTimestamp() 
        
         //   try {
           //     let embed = new Discord.MessageEmbed() 
            //    .setAuthor(bot.user.username, bot.user.avatarURL) 
             //     .setTitle(fas.phrases[Math.floor(Math.random() * fas.phrases.length)])
            //       .setColor(0x4df055)
             //      .setImage(fas.image[Math.floor(Math.random() * fas.image.length)])
             //      .setDescription(`Слушаюсь мой господин, ` + message.mentions.members.first().user.username + " скоро будет уничтожен(а)!") 
          //          .setFooter('') 
         //      .setTimestamp() 
        
        //        message.channel.send({ 
         //           embed 
         //       }); 
         //   } catch (e) { 
          //      message.reply(e.message)
         //   }
//}}});



bot.on('message', (message) => {  
    if(message.content === "Shizu допоможи"){ 
    message.channel.send("Я зайнята!") 
}});

bot.on('message', (message) => { 
    if(message.content === "Shizu привіт"){ 
    message.channel.send("І тобі привіт!") 
}});

bot.on('message', (message) => {  
    if(message.content === "Shizu да пішла ти"){ 
    message.channel.send("Сам йди!") 
}});

bot.on('message', (message) => {
    if(message.content === "Ебать"){ 
    message.channel.send("Що сталось!") 
}});



fs.readdir('./cmds/', (err,files)=>{ //де зберігаються файли з модулями
    if(err) console.log(err); //основа бота
    let prefix = config.prefix //конфіг префікса
    let jsfiles = files.filter(f => f.split(".").pop() === "js"); //основа бота
    if(jsfiles.length <=0) console.log("Команд в папці cmds не виявлено"); //якщо модулів не виявлено
    console.log(`info: Завантажено ${jsfiles.length} команд`); //якщо комманди знайдені
    });
    function loadCmds() { //основа бота
      fs.readdir('./cmds/', (err, files) => { 
  
          if (err) console.log(err); 
  
          let jsfile = files.filter(f => f.split(".").pop() === "js") 
          if (jsfile.length <= 0) {
              return; //повтор            
          }
          jsfile.forEach((f, i) => {
              delete require.cache[require.resolve(`./cmds/${f}`)];
              let props = require(`./cmds/${f}`);
              bot.commands.set(props.help.name, props);
          });
      });
  }
  loadCmds(); 
  
  bot.on('ready', () => { //об'являем
    console.log(`info: Привіт я ${bot.user.username}`); //якщо бот запустився вітання
    bot.generateInvite(["ADMINISTRATOR"]).then(link => { //генерує інвайт бота
     console.log("Інвайт бота: " + link); //теж інвайт
    })
  });
  
  bot.on('message', async message => { //об'ява
  if(message.author.bot) return; //частина бота
  if(message.channel.type == "dm") return; //частина бота дм
  let user = message.author.username; //частина бота з ніками
  let userid = message.author.id; //частина бота
  let messageArray = message.content.split(" "); //частина бота
  let command = messageArray[0].toLowerCase(); //частина бота
  let args = messageArray.slice(1); //частина бота
  if(!message.content.startsWith(prefix)) return; //частина бота
  let cmd = bot.commands.get(command.slice(prefix)); //частина бота
  if(cmd)cmd.run(bot,message,args); //частина бота
  });
  bot.on("message", msg => { //об'ява
      if (msg.author.bot) return; //частина бота
      if (msg.channel.type === "dm") return; //частина бота дм
  
      if (!msg.content.startsWith(prefix)) return; 
      if (msg.content.indexOf(prefix) !== 0) return; 
  
      let msgArray = msg.content.split(" "); 
      let cmd = msgArray[0].toLocaleLowerCase(); 
      let args = msgArray.slice(1); 
  
      let commandfile = bot.commands.get(cmd.slice(prefix.length)); 
      if (commandfile) commandfile.run(bot, msg, args);
  });
  
  bot.login(token);