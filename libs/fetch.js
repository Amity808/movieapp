// import axios from 'axios';

export const movieOptions = {
  method: 'GET',
  // url: 'https://api.themoviedb.org/3/account/null/rated/movies',
  params: {language: 'en-US', page: '1', sort_by: 'created_at.asc'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTkyZTQ2NzczY2M5ZTRlNWQ5MDVhODA1M2U2MmJiYyIsInN1YiI6IjY0ZmYxMWUzZmZjOWRlMGVlM2M1NDE1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1gtMcSfazBSF4CSSRlfkBpOBEuORB327s03n2VEvmSY'
  }
};


  export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = await  response.json();

    return data
  }