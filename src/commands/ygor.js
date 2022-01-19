var textArray = [
    'é bot',
    '0/todos',
    'nem clicou'
];

var randomText = textArray[Math.floor(Math.random()*textArray.length)];

module.exports = async (msg) => {
    await msg.channel.send(randomText);
  };
  
  