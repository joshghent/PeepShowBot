const Discord = require('discord-client');

function handleMessage(message) {
  const content = message.content.toLowerCase();

  let character = null;

  if (content.startsWith('!mark')) {
    character = 'mark';
  } 
  else if (content.startsWith('!jeremy') || content.startsWith('!jez')) {
    character = 'jeremy';
  }

  if (character === null) {
    return;
  } 
}

function getRandomAudio(character) {
  const files = fs.readdirSync('./audio/' + character);
  const index = Math.floor(Math.random() * files.length);

  return './audio/' + character + '/' + files[index];
}