

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njc5NGFiZDA0NWVkNWU0YjMxMzI5OGFkYmUzMDk0MiIsIm5iZiI6MTcyMzAzOTM3OC41OTA2ODMsInN1YiI6IjY2YjM3OTEzZjdhZjA5OGM1ZDkyZGRmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mvdcZfKF1VnzsYF2SkEwNJKMJDHF5BIbjWWn1y_X8X4'
  }
}

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then((response) => {
    return response.json()
  })
  .then(data => {
    const movies = data.results
    const movieList = document.getElementById('trending-movie-list')
    // console.log(movies[0])
    movies.forEach(movie => {
      const listItem = document.createElement('li')
      const posterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`
      const rating = Math.round(movie.vote_average * 10) / 10
      const backdrop = `https://image.tmdb.org/t/p/w200${movie.backdrop_path}`

      listItem.innerHTML = `
        <div class="posters">
          <img src="${posterUrl}" alt="poster" class="poster">
          <img src="${backdrop}" alt="back-drop" class="back-drop">
        </div>
        <div class="hide-context">
          <div class="hide-title">${movie.title}</div>
          <p class="overview">${movie.overview}</p>
          <p class="release-date">Release: ${movie.release_date}</p>
        </div>
        <div class="condition-tag">new</div>
        <div class="movie-detail">
          <h4>${movie.title}</h4>
          <p>&#9733; ${rating}</p>
        </div>
        `
      movieList.appendChild(listItem)
    })
  })
  .catch(err => console.error('Fetch error:', err))









const today = new Date().toLocaleDateString('sv-SE')
// console.log(today)
fetch(`https://api.themoviedb.org/3/discover/movie?language=tr-TR&release_date.gte=${today} https://api.themoviedb.org/3/discover/movie?language=tr-TR&primary_release_date.gte=${today}`, options)
  .then((response) => {
    return response.json()
  })
  .then(data => {
    const movies = data.results
    const movieList = document.querySelector('#upcoming-movie-list')
    console.log(movies[0])
    movies.forEach(movie => {
      const listItem = document.createElement('li')
      const posterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`
      const rating = Math.round(movie.vote_average * 10) / 10
      const backdrop = `https://image.tmdb.org/t/p/w200${movie.backdrop_path}`
      
      function calculateDaysLeft(releaseDate) {
        const today = new Date();
        const release = new Date(releaseDate);
        const timeDiff = release - today; 
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
        return daysLeft;
      }
      const releaseDate = movie.release_date; 
      const daysLeft = calculateDaysLeft(releaseDate);

      let releaseTag
      function a(i) {

        if(i < 1) {
          return releaseTag = 'new'
        } else if(i > 60) {
          return releaseTag = 'soon'
        }
        
        else {
          return releaseTag = `in ${i} days`
        }
      }
      a(daysLeft)
    

      listItem.innerHTML = `
        <div class="posters">
          <img src="${posterUrl}" alt="poster" class="poster">
          <img src="${backdrop}" alt="back-drop" class="back-drop">
        </div>
        <div class="hide-context">
          <div class="hide-title">${movie.title}</div>
          <p class="overview">${movie.overview}</p>
          <p class="release-date">Release: ${movie.release_date}</p>
        </div>
        <div class="condition-tag release-tag">${releaseTag}</div>
        <div class="movie-detail ">
          <h4>${movie.title}</h4>
          <p class="release-p">${movie.release_date}</p>
        </div>
        `
      movieList.appendChild(listItem)
    })
  })
  .catch(err => console.error('Fetch error:', err))


  

  document.getElementById('search-box').addEventListener('input', function(event) {
    const query = event.target.value;
    const searchLists = document.querySelector('.search-lists');
    const searchResults = document.getElementById('search-results');
    
    if (query.length > 2) {
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1&include_adult=false`, options)
        .then(response => response.json())
        .then(data => {
          const movies = data.results;
  
          searchResults.innerHTML = ''; // 検索結果をクリア
  
          if (movies.length > 0) {
            movies.forEach(movie => {
              const listItem = document.createElement('li');
              const posterUrl = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
              const rating = Math.round(movie.vote_average * 10) / 10;
              const backdrop = `https://image.tmdb.org/t/p/w200${movie.backdrop_path}`;
    
              listItem.innerHTML = `
                <div class="posters">
                  <img src="${posterUrl}" alt="poster" class="poster">
                  <img src="${backdrop}" alt="back-drop" class="back-drop">
                </div>
                <div class="hide-context">
                  <div class="hide-title">${movie.title}</div>
                  <p class="overview">${movie.overview}</p>
                  <p class="release-date">Release: ${movie.release_date}</p>
                </div>
                <div class="movie-detail ">
                  <h4>${movie.title}</h4>
                  <p>&#9733; ${rating}</p>
                </div>
              `;
              searchResults.appendChild(listItem);
            });
  
            searchLists.classList.add('search-lists-appear');
          } else {
            searchLists.classList.remove('search-lists-appear');
          }
        })
        .catch(err => console.error('Fetch error:', err));
    } else {
      searchResults.innerHTML = '';
      searchLists.classList.remove('search-lists-appear'); 
    }
  });
  

  const darkThemeBtn = document.querySelector('#dark-theme-button')
  const moonIcon = document.querySelector('.moon-icon')
  const themeBtn = document.querySelector('.theme-btn')
  const body = document.querySelector('body')
  const sectionTitle = document.querySelectorAll('.section-title')
  const header = document.querySelector('header')
  const headerList = document.querySelectorAll('.header-list-a')
  const headerHam = document.querySelectorAll('.header-list-open')
  themeBtn.addEventListener('click', function() {
    themeBtn.classList.toggle('dark-theme-icon')
    body.classList.toggle('dark-theme')
    header.classList.toggle('dark-theme-header')
    // headerHam.classList.toggle('dark-theme-header')
    sectionTitle.forEach(function(title) {
      title.classList.toggle('dark-theme-section-title')
    })
    headerList.forEach(function(title) {
      title.classList.toggle('dark-theme-header-li-a')
    })

  })



// --------- hamburger menu -----------
document.addEventListener("DOMContentLoaded", () => {
  const humBtn = document.querySelector(".hum-btn");
  const headerMenu = document.querySelector(".header-list");

  humBtn.addEventListener("click", () => {
    humBtn.classList.toggle("open");
    headerMenu.classList.toggle("header-list-open");
  });
});
// --------- hamburger menu -----------