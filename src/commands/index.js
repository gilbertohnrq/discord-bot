const ricardo = require('./ricardo');

const guildID = '122486807869915146';
//const channelID = '258392309282897921';

const commands = {
  ricardo,
};

module.exports = async (msg) => {
  console.log(msg);
  if (msg.guild.id === guildID) {
    const args = msg.content.split(' ');
    const command = args.shift();
    if (Object.keys(commands).includes(command)) {
      commands[command](msg, args);
    }
  }
};


