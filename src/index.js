const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const guildID = '122486807869915146';
const channelID = '258392309282897921';

client.once('ready', () => {
  console.log('Bot is ready!');
});
//&& msg.channel.id === channelID adiciona a condição de channels
try {
  client.on('message', async (msg) => {
    if (msg.guild.id === guildID) {
      if (msg.content.toLowerCase() === 'ricardo') {
        await msg.channel.send('gay');
      }
    }
  });
} catch (err) {
  next(err);
}

client.login(process.env.BOT_TOKEN);
