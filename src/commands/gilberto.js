var textArray = [
    "full build AB",
    "mama range"
  ];
  
  module.exports = async (msg) => {
    await msg.channel.send("GILBERTO " + textArray[Math.floor(Math.random()*textArray.length)], {tts: true});
  };
  