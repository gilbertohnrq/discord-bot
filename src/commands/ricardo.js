var textArray = [
  "é gay",
  "é maconheiro",
  'agora eu vou te matar',
  "vai tomar sua cu"
];

module.exports = async (msg) => {
  await msg.channel.send(msg + " " + textArray[Math.floor(Math.random()*textArray.length)], {tts: true});
};
