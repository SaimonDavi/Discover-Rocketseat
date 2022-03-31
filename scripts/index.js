import fetch from 'node-fetch';

fetch("https://api.github.com/users/SaimonDavi")
    .then(response => {
        response.json().then(data => console.log(data))
    });
