var textArray = [
  "é gay",
  "maconheiro"
];
var randomText = textArray[Math.floor(Math.random()*textArray.length)];

module.exports = async (msg) => {
  await msg.channel.send(randomText);
};

