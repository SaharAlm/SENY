const Discord = require("discord.js");
const Settings = require("./setting.json");
const prefix = Settings.prefix;

var bot = new Discord.Client();

bot.on('guildMemberAdd', member => {
  if (member.guild.id === '384420942010515466') {
    member.setNickname(`??${member.user.username}`)
    member.addRole('384420942010515466', 'Joined in the 90\'s')
  }
    member.guild.channels.get('353436192353681411').send('**' + member.user.username + '**, Has Joined!')

});

bot.on("guildMemberRemove", member => {
    member.guild.channels.get('353436192353681411').send(`**${member.user.username}** BYEBYE My friend!`)
});


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
    const embed = new Discord.RichEmbed()
      .setTitle("Seny's Server!")
      .setAuthor("Seny's Server.", bot.users.get('238349889497464832').avatarURL)
      .setColor(0x00AE86)
      .setDescription("This is the main body of text, it can hold 2048 characters.")
      .setFooter("The Bot Created by @Twins", message.guild.iconURL)
      .setImage("http://i.imgur.com/yVpymuV.png")
      .setThumbnail("http://i.imgur.com/p2qNFag.png")
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp()
      .setURL("https://www.xxx.com")
      /*
       * Inline fields may not display as inline if the thumbnail and/or image is too big.
       */
      .addField("Inline Field", "They can also be inline.", true)
      /*
       * Blank field, useful to create some space.
       */
      .addBlankField(true)
      .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

      message.channel.send({embed});
         break;
    //invite
    case "invitefriends":
         message.channel.send({embed:{
           title: "InviteYourFriends!",
           description: "תזמינו חברים לשרת יהיה כיף https://discord.gg/JqE9Paq",
           color: 0xFF00CA // colooorrrrrrrrrrrrrrrrr
         }});
         break;
    //CD(commands)
    case "CM":
        message.channel.send({embed:{
          title: 'CM',
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
