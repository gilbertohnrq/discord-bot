var textArray = [
    'é bot',
    '0/todos',
    'nem clicou',
    'irmãos cape?e?e?e?e?e?ta'
];

module.exports = async (msg) => {
    await msg.channel.send(textArray[Math.floor(Math.random()*textArray.length)]);
  };
  
  