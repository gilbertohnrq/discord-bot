var textArray = [
    '/tts é bot',
    '/tts 0/todos',
    '/tts irmãos cape?e?e?e?e?e?ta'
];

module.exports = async (msg) => {
    await msg.channel.send(textArray[Math.floor(Math.random()*textArray.length)]);
  };
  
  