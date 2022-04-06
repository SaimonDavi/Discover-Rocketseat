import axios from "axios";

Promise.all([
    axios.get('https://api.github.com/users/SaimonDavi'),
    axios.get('https://api.github.com/users/SaimonDavi/repos')
])
.then( responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
})
.catch( err => console.log(err.message))