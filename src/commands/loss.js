var textArray = [
    "é caboco mamador",
    "vou assistir um xracing"
  ];
  
  module.exports = async (msg) => {
    await msg.channel.send("loss " + textArray[Math.floor(Math.random()*textArray.length)], {tts: true});
  };
  