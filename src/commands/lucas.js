var textArray = [
    "entra logo ricaaaaaaaaardo",
    "passou varanda",
    "vou ficar com o bebêzinho"
  ];
  
  module.exports = async (msg) => {
    await msg.channel.send("LUCAS " + textArray[Math.floor(Math.random()*textArray.length)], {tts: true});
  };
  