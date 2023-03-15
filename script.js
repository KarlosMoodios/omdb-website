// http://www.omdbapi.com/?i=tt5093958&plot=full
const apiKey = "796660e5";
const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');
let plot = document.getElementById('plot-select').selectedOptions[0].value; 
console.log(plot);

async function loadMovies(searchTerm) {
    const URL = `http://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${apiKey}`;
    const res = await fetch(`${URL}`);
    const movies = await res.json();
    // console.log(movies.Search);
    if (movies.Response == "True") displayMovieList(movies.Search);
};

// get matches to current text input
function findMovies(){
    let searchTerm = (movieSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
};
