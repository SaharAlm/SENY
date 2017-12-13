const Discord = require("discord.js");
const Settings = require("./setting.json");
const prefix = Settings.prefix;

var bot = new Discord.Client();



bot.on("ready", function() {
  console.log('Ready in the 90\'s');
  //status
 bot.user.setStatus('Game');
 //streaming
 bot.user.setGame("-Commands");
 //setGame
 bot.user.setGame("-Commands", "https://twitch.tv/SaharGx");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user));

  if (!message.content.startsWith(Settings.prefix)) return;

  var args = message.content.substring(Settings.prefix.length).split(" "); //commands!

  switch (args[0]) {
    //seny
    case "סני":
        message.reply("ילד רע")
        break;
    //info
    case "info":
         message.reply("זה השרת של סני")
         break;
    //invite
    case "invitefriends":
         message.reply("תזמינו חברים לשרת יהיה כיף https://discord.gg/JqE9Paq")
         break;
    //CD(commands)
    case "Commands":
        message.channel.send({embed:{
          title: 'Commands!',
          description: '-info \n -סני \n -invitefriends',
          color: 0xF900FF // this is the color
        }});
        break;
    default:
         message.channel.send('No No No my friend')
        break;
  }
});

bot.login(Settings.token);
