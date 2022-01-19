var textArray = [
  "é gay",
  "é maconheiro",
  'agora eu vou te matar',
  "vai tomar sua cu"
];

module.exports = async (msg) => {
  await msg.channel.send("ricardo" + textArray[Math.floor(Math.random()*textArray.length)], {tts: true});
};
