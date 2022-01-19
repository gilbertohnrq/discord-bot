var textArray = [
    'é bot',
    '0/todos',
    'nem clicou'
];

module.exports = async (msg) => {
    await msg.channel.send(textArray[Math.floor(Math.random()*textArray.length)]);
  };
  
  