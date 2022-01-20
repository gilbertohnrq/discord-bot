var textArray = [
    "full build AB",
    "mama range",
    "tá jogando nada"
  ];
  
  module.exports = async (msg) => {
    await msg.channel.send("GILBERTO " + textArray[Math.floor(Math.random()*textArray.length)], {tts: true});
  };
  