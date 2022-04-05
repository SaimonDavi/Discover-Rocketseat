import axios from "axios";

axios.get('https://api.github.com/users/SaimonDavi')
  .then(res => {
    console.log(res.data);
  });
