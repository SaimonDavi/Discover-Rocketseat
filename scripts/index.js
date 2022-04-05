import fetch from 'node-fetch';

fetch("https://api.github.com/users/SaimonDavi")
.then( response => response.json())
.then( data => fetch(data.repos_url))
.then( res => res.json())
.then( d => console.log(d))
.catch( err => console.log(err))