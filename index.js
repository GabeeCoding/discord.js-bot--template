const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const configfile = require("./botconfig.json");
const prefix = configfile.requirements.prefix;
const inviteBotLink = `https://discordapp.com/api/oauth2/authorize?client_id=${configfile.misc.clientid}&permissions=${configfile.requirements.inviteparams.permissions}&scope=bot`;


bot.on("message", async message => {
    if(message.content == `${prefix}test`){
        message.channel.send(`This bot works!`);
        message.react(":tada:");
    }

    if(message.content == `${prefix}invite`){
        message.reply(`The invite is: ${inviteBotLink}`);
    }
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
});

bot.login(configfile.requirements.secrettoken);

