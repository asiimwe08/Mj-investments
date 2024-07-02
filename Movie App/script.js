const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=455a301c'; // Replace with your API key
const API_URL = 'http://www.omdbapi.com/apikey.aspx?VERIFYKEY=3d663d91-b945-4d0d-ad94-98c8f6c499a2';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// DOM elements
const mainContent = document.getElementById('mainContent');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const movieDetails = document.getElementById('movieDetails');

// Event listener for search input
searchInput.addEventListener('input', debounce(searchMovies, 300));

// Fetch movies from API on page load
fetchMovies();

// Function to fetch popular movies
async function fetchMovies() {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    displayMovies(data.results);
}

// Function to display movies
function displayMovies(movies) {
    mainContent.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${IMAGE_BASE_URL}${movie.poster_path}" alt="${movie.title}">
            <div class="movie-info" data-movie-id="${movie.id}">
                <h3>${movie.title}</h3>
            </div>
        `;
        mainContent.appendChild(movieElement);

        // Add event listener for showing movie details
        movieElement.addEventListener('click', () => showMovieDetails(movie.id));
    });
}

// Function to show movie details in modal
async function showMovieDetails(movieId) {
    const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
    const movie = await response.json();

    movieDetails.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.overview}</p>
        <p>Release Date: ${movie.release_date}</p>
        <p>Rating: ${movie.vote_average}</p>
        <p>Genres: ${movie.genres.map(genre => genre.name).join(', ')}</p>
    `;

    modal.style.display = 'block';
}

// Close modal when close button or outside modal is clicked
modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('close')) {
        modal.style.display = 'none';
    }
});

// Function to search movies
async function searchMovies() {
    const query = searchInput.value;
    if (query.trim() !== '') {
        const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
        const data = await response.json();
        displayMovies(data.results);
    } else {
        fetchMovies(); // If search input is empty, show popular movies
    }
}

// Debounce function for delaying search input
function debounce(func, timeout) {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, timeout);
    };
}
