var textArray = [
    'é bot',
    '0/todos',
    'nem clicou'
];
var randomIndex = Math.floor(Math.random() * textArray.length); 
var randomText = textArray[randomIndex];

module.exports = async (msg) => {
    await msg.channel.send(randomText);
  };
  
  