const Discord = require("discord.js");
const Settings = require("./setting.json");
const prefix = Settings.prefix;

var bot = new Discord.Client();

bot.on('guildMemberAdd', member => {
  if (member.guild.id === '384420942010515466') {
    member.setNickname(`🤘${member.user.username}`)
    member.addRole('384420942010515466', 'Joined in the 90\'s')
  }
    member.guild.channels.get('353436192353681411').send('**' + member.user.username + '**, Has Joined!')

});

bot.on("guildMemberRemove", member => {
    member.guild.channels.get('353436192353681411').send('**' + member.user.username + '**, ByeBye')

});

bot.on("ready", function() {
  console.log('Ready in the 90\'s');
  //status
 bot.user.setStatus('Game');
 //streaming
 bot.user.setGame("-CM");
 //setGame
 bot.user.setGame("-CM", "https://twitch.tv/SaharGx");
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
    case "CM", "COMMANDS":
        message.reply("server command \n -סני \n -info \n -invitefriends")
        break;
    default:
         message.channel.send('No No No my friend')
        break;
  }
});

bot.login(process.env.Settings.token);
