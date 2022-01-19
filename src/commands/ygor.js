var textArray = [
    'é bot',
    'está 0/todos',
    'e irmãos cape?e?e?e?e?e?ta',
    'me da um real'
];

module.exports = async (msg) => {
    await msg.channel.send("YGOR " + textArray[Math.floor(Math.random()*textArray.length)], {tts: true});
  };
  
  