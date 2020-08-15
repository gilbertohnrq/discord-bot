const Discord = require('discord.js');
require('dotenv').config();
const BOT_TOKEN = 'NzQzOTg3NDg2ODQxMzcyNzM0.XzcqVw.p40B_vL8JgbqSbZQSY116iwPcIE';
const client = new Discord.Client();

const guildID = '122486807869915146';
const channelID = '258392309282897921';

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.on('message', async (msg) => {
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    if (msg.content.toLowerCase() === 'ricardo') {
      await msg.channel.send('gay');
    }
  }
});

client.login(BOT_TOKEN);
