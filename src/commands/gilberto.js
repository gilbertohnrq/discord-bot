var textArray = [
    "full build AB",
    "mama range"
  ];
  
  module.exports = async (msg) => {
    await msg.channel.send("gilberto " + textArray[Math.floor(Math.random()*textArray.length)], {tts: true});
  };
  