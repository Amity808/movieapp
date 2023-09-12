import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/account/null/rated/movies',
  params: {language: 'en-US', page: '1', sort_by: 'created_at.asc'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 0192e46773cc9e4e5d905a8053e62bbc'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });