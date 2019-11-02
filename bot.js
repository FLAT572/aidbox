const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = 'a!'
 
 client.on('message', message => {
    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + 'help')) {
        message.channel.sendMessage('Заряжен и готов к бою!');
     }
 });

client.login('NjI5MTg1ODIxNDc1MzQwMjk4.Xb3PBQ.jufFwJ9wKyB6rLFIddk-U_Zb3ec');
