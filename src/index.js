const Discord = require('discord.js');
const commandHandler = require('./commands');

require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Bot is ready! v5');
});

client.on('message', commandHandler);

client.login(process.env.BOT_TOKEN);
