var textArray = [
  "é gay",
  "maconheiro",
  'agora eu vou te matar'
];

module.exports = async (msg) => {
  await msg.channel.send(textArray[Math.floor(Math.random()*textArray.length)]);
};

