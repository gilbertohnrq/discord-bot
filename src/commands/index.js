const ricardo = require('./ricardo');
const ygor = require ('./ygor');

const commands = {
  ricardo,
  ygor
};

module.exports = async (msg) => {
  if (msg.guild.id === process.env.GUILD_ID) {
    const args = msg.content.split(' ');
    const command = args.shift();
    if (Object.keys(commands).includes(command)) {
      msg = command;
      commands[command](msg, args);
    }
  }
};
