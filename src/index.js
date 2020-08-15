const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const ytdl = require('ytdl-core');

require('dotenv').config();

const client = new Discord.Client();
const guildID = '122486807869915146';
const channelID = '258392309282897921';

client.once('ready', () => {
  console.log('Bot is ready!');
});

//&& msg.channel.id === channelID adiciona a condição de channels
try {
  client.on('msg', async (msg) => {
    if (msg.guild.id === guildID) {
      if (msg.content.toLowerCase() === 'ricardo') {
        await msg.channel.send('gay');
      }
    }
  });
} catch (err) {
  next(err);
}

client.on('msg', async (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
});

const serverQueue = queue.get(msg.guild.id);

if (msg.content.startsWith(`${prefix}play`)) {
  execute(msg, serverQueue);
  return;
} else if (msg.content.startsWith(`${prefix}skip`)) {
  skip(msg, serverQueue);
  return;
} else if (msg.content.startsWith(`${prefix}stop`)) {
  stop(msg, serverQueue);
  return;
} else {
  msg.channel.send('Não tem esse comando não');
}

const queue = new Map();
async function execute(msg, serverQueue) {
  const args = msg.content.split(' ');

  const voiceChannel = msg.member.voice.channel;
  if (!voiceChannel) return msg.channel.send('Cê tem que tá num chat de voz');
  const permissions = voiceChannel.permissionsFor(msg.client.user);
  if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
    return msg.channel.send('dá permissão ae');
  }
}
const songInfo = await ytdl.getInfo(args[1]);
const song = {
  title: songInfo.title,
  url: songInfo.video_url,
};

if (!serverQueue) {
} else {
  serverQueue.songs.push(song);
  console.log(serverQueue.songs);
  return message.channel.send(`${song.title} ta na fila`);
}

// Creating the contract for our queue
const queueContruct = {
  textChannel: message.channel,
  voiceChannel: voiceChannel,
  connection: null,
  songs: [],
  volume: 5,
  playing: true,
};
// Setting the queue using our contract
queue.set(message.guild.id, queueContruct);
// Pushing the song to our songs array
queueContruct.songs.push(song);

try {
  // Here we try to join the voicechat and save our connection into our object.
  var connection = await voiceChannel.join();
  queueContruct.connection = connection;
  // Calling the play function to start a song
  play(message.guild, queueContruct.songs[0]);
} catch (err) {
  // Printing the error message if the bot fails to join the voicechat
  console.log(err);
  queue.delete(message.guild.id);
  return message.channel.send(err);
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
}

const dispatcher = serverQueue.connection
  .play(ytdl(song.url))
  .on('finish', () => {
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
  })
  .on('error', (error) => console.error(error));
dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
serverQueue.textChannel.send(`Tocando uma: **${song.title}**`);

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send('Tem que tá no canal de voz, mano');
  if (!serverQueue) return message.channel.send('Nem tem nada tocando lol');
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send('Tem que tá no canal de voz, mano');
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

client.login(process.env.BOT_TOKEN);
