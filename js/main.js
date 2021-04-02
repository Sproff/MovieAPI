// NAVBAR
const toggleBtn = document.querySelector("#mobile-nav");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// SEARCHBAR
const searchBar = document.querySelector("#search");
let moviesResult = [];

searchBar.addEventListener("keyup", (e) => {
  const searchResult = e.target.value.toLowerCase();

  const filteredResult = moviesResult.filter((character) => {
    return character.title.toLowerCase().includes(searchResult);
  });
  showMovies(filteredResult);
});

// API
const API_KEY = "c4a97ec5f4e4a3e510345aeadbc1fef5";
const API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY;
  
const trendingMovies = document.querySelector("#movie-grid");
let trendingMoviesHTML = "";

axios
  .get(API_URL)
  .then((res) => {
    console.log(res.data.results);
    moviesResult = res.data.results;
    showMovies(moviesResult);
  })
  .catch((err) => {
    console.log(err);
  });

const showMovies = (contents) => {
  const trendingMoviesHTML = contents.map((item) => {
    return `
        <div class="movie-card">
          <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="movie image">
          <h4>${item.title}</h4>
          <div class="row">
              <p class="year">${item.release_date}</p>
              <p class="rating">
                <span class="fa fa-star checked"></span> ${item.vote_average}
              </p>
          </div>
        </div>
        `;
  })
  .join('');
  trendingMovies.innerHTML = trendingMoviesHTML;
};
