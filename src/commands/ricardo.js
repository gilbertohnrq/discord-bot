var textArray = [
  "é gay",
  "maconheiro"
];

module.exports = async (msg) => {
  await msg.channel.send(textArray[Math.floor(Math.random()*textArray.length)]);
};

