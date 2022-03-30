import fetch from 'node-fetch';

fetch("https://api.github.com/users/SaimonDavi").then((response) =>
  console.log(response)
);

// const response = await fetch('https://api.github.com/users/SaimonDavi');
// const body = await response.text();

// console.log(body);
