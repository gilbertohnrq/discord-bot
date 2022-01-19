var textArray = [
    "quantos pig vale a joke",
    "só joga com o celo"
  ];
  
  module.exports = async (msg) => {
    await msg.channel.send("PEDRO " + textArray[Math.floor(Math.random()*textArray.length)], {tts: true});
  };
  