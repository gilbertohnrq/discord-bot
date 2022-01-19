var textArray = [
    "é caboco mamador",
    "vou assistir um xracing"
  ];
  
  module.exports = async (msg) => {
    await msg.channel.send("LOSS " + textArray[Math.floor(Math.random()*textArray.length)], {tts: true});
  };
  