const ricardo = require('./ricardo');

const commands = {
  ricardo,
};

module.exports = async (msg) => {
  if (msg.guild.id === process.env.GUILD_ID) {
    const args = msg.content.split(' ');
    const command = args.shift();
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};
