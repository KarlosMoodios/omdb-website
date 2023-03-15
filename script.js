// http://www.omdbapi.com/?i=tt5093958&plot=full
const apiKey = "796660e5";
const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');
const trailer = document.getElementById('trailer');

// load movies from API
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

// display movies in the search list
function displayMovieList(movies){
    searchList.innerHTML = "";
    for(let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID;
        movieListItem.classList.add('search-list-item');
        if(movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;
        else 
            moviePoster = "image_not_found.png";
        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>
        `;
        searchList.appendChild(movieListItem);
    }
    loadMovieDetails();
};

// load movie details into html result container on click
function loadMovieDetails(){
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
            // console.log(movie.dataset.id);
            let plot = document.getElementById('plot-select').value;
            // console.log(getValue);
            let URL =  `http://www.omdbapi.com/?i=${movie.dataset.id}`+`&apikey=${apiKey}`;
            if(plot === 'full'){
                URL = `http://www.omdbapi.com/?i=${movie.dataset.id}`+`&apikey=${apiKey}`+`&plot=${plot}`;
            } else{
                URL = `http://www.omdbapi.com/?i=${movie.dataset.id}`+`&apikey=${apiKey}`;
            }

            // console.log(URL);
            searchList.classList.add('hide-search-list');
            movieSearchBox.value = "";
            const result= await fetch(URL);
            const movieDetails = await result.json();
            console.log(movieDetails);
            displayMovieDetails(movieDetails);
            /*if(movie.dataset.id === "tt0479143"){
                resultGrid.innerHTML = `
                <iframe src="https://www.imdb.com/video/loop-media/vi3013870873/imdb/embed?autoplay=false&width=640" 
                width="640" height="360" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" 
                frameborder="no" scrolling="no"></iframe>`;
            };*/
        });
    });
};

// format the deatails to be added to the result-grid container
function displayMovieDetails(details){
    resultGrid.innerHTML = `
    <div class="movie-poster">
              <img src = "${(details.Poster) != "N/A" ? details.Poster : "image_not_found.png"}" alt = "movie poster">
            </div>
            <div class="movie-info">
              <h3 class="movie-title">${details.Title}</h3>
              <ul class = "movie-misc-info">
                <li class="year">Year: ${details.Year}</li>
                <li class="rated">Rated ${details.Rated}</li>
                <li class="released">Released: ${details.Released}</li>
              </ul>
              <p class="genre"><b>Genre: </b>${details.Genre}</p>
              <p class="writer"><b>Writer: ${details.Writer}</b></p>
              <p class="actors"><b>Actors: ${details.Actors}</b></p>
              <p class="plot"><b>Plot: ${details.Plot}</b></p>
              <p class="language"><b>Language: ${details.Language}</b></p>
              <p class="awards"><b><i class="fas fa-award"></i></b> Oscar awards: ${details.Awards}</p>
            </div>
    `;
};

// close the search list if it isn't being targeted by the user
window.addEventListener('click', (event) => {
    if(event.target.className != "form-control"){
        searchList.classList.add('hide-search-list');
    }
});
