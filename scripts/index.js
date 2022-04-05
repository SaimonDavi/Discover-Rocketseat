import axios from "axios";

axios
    .get('https://api.github.com/users/SaimonDavi')
    .then(res => {
        const user = res.data

        axios.get(user.repos_url)
            .then(repos => console.log(repos.data))
    })
    .catch(error => {
        console.log(error)
    })
