var textArray = [
  'é gay',
  'maconheiro',
  '=rage'
];
var randomIndex = Math.floor(Math.random() * textArray.length); 
var randomText = textArray[randomIndex];

module.exports = async (msg) => {
  await msg.channel.send(randomText);
};

