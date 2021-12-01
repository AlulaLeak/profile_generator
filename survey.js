const readline = require('readline');
const { setTimeout } = require('timers/promises');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {
  'name': '',
  'activity': '',
  'music': '',
  'meal': '',
  'food': '',
  'sport': '',
  'superpower': ''
};



rl.question(`What's your name? Nicknames are also acceptable :) `, (name) => {
  profile.name = name;

  rl.question(`What's an activity you like doing? `, (activity) => {
    profile.activity = activity;

    rl.question(`What do you listen to while doing that? `, (music) => {
      profile.music = music;

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (meal) => {
        profile.meal = meal;

        rl.question(`What's your favourite thing to eat for that meal? `, (food) => {
          profile.food = food;

          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            profile.sport = sport;

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpower) => {
              profile.superpower = superpower;
              console.log(`Hi, my name is ${profile.name}. I love ${profile.activity}. When I do, I often listen to ${profile.music}. My favorite meal of the day is ${profile.meal}. I usually eat ${profile.food}. I really like playing ${profile.sport} and my superpower is ${profile.superpower}.`);
              rl.close();

            });
          });
        });
      });
    });
  });
});













