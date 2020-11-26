//NAVBAR
const toggleBtn = document.querySelector('#mobile-nav');
const navMenu = document.querySelector('.nav-menu')


toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})


//API
const API_KEY = 'c4a97ec5f4e4a3e510345aeadbc1fef5'

const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY

axios.get(API_URL).then(function(response) {
    console.log("OUR RESPONSE", response.data)

    const movies = response.data.results
    const firstMovie = movies[4]

    document.querySelector('.movie-title').innerHTML = firstMovie.title

   document.querySelector('.movie-desc').textContent = firstMovie.overview

   const trendingMovies = document.querySelector('#movie-grid')


   let trendingMoviesHTML = ''

   movies.forEach(function(item) {
     trendingMoviesHTML += 
   ` <div class="movie-card">
        <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="movie image">
        <h4>${item.title}</h4>
        <div class="row">
            <p class="year">${item.release_date}</p>
            <p class="rating">
                <span class="fa fa-star checked"></span> ${item.vote_average}
            </p>
        </div>
     </div>`
    })

    trendingMovies.innerHTML = trendingMoviesHTML

})


