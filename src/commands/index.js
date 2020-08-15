const guildID = '122486807869915146';
//const channelID = '258392309282897921';

module.exports = async (msg) => {
  if (msg.guild.id === guildID) {
    if (msg.content.toLowerCase() === 'ricardo') {
      await msg.channel.send('é gay');
    }
  }
}