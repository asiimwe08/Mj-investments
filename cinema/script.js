document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const movieList = document.getElementById('movie-list');

    const API_KEY = ' http://www.omdbapi.com/apikey.aspx?VERIFYKEY=3d663d91-b945-4d0d-ad94-98c8f6c499a2';
    const API_URL = http://www.omdbapi.com/?i=tt3896198&apikey=455a301c;

        search Button .addEventListener('click', function () {
            const query = searchInput.value;
            if (query) {
                fetchMovies(query);
            }
        });

    async function fetchMovies(query) {
        const response = await fetch(${ API_URL }${ query });
        const data = await response.json();
        if (data.Response === 'True') {
            displayMovies(data.Search);
        } else {
            movieList.innerHTML = <p>${data.Error}</p>;
        }
    }
    function displayMovies(movies) {
        movieList.innerHTML = '';
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = `
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
            `;
            movieList.appendChild(movieItem);
        });
    }
});