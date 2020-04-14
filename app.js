//Query Selectors
const inputBox = document.getElementById('movie-name');
const submitButton = document.getElementById('submit-button');
const poster = document.getElementById('poster');
const movieTitle = document.getElementById('movie-title');
const ageLimit = document.getElementById('age-limit');
const imdb = document.getElementById('imdb');
const rTomatoes = document.getElementById('r-tomatoes');
const tvCom = document.getElementById('tv-com');
const year = document.getElementById('year');
const hours = document.getElementById('hours');
const plot = document.getElementById('plot');
const genre = document.getElementById('genre');
const lang = document.getElementById('lang');
const actors = document.getElementById('actors');
let writerName = document.getElementById('writer');
let directorName = document.getElementById('director');
let countryName = document.getElementById('country');
let plotTitle = document.getElementById('plot-title');




submitButton.addEventListener('click',test);

function test (event){
    event.preventDefault();
    const movieValue = inputBox.value;

    var api = 'https://www.omdbapi.com/?t=' + movieValue + '&apikey=fcae0c6d';

    fetch(api)
        .then((res) => res.json())
        .then((data) => {
    
    if (data.Error){
        document.getElementById('mini-wrapper').innerHTML = "Sorry the movie you searched for isn't available.Try searching with another keyword"
    } else if (!data.Error){

    //Get Data from Api
    let title = data.Title;
    let age = data.Rated;
    let img = data.Poster;
    // let im = data.Ratings[0].Value;
    // let rt = data.Ratings[1].Value;
    // let mt = data.Ratings[2].Value;
    let yearReleased =data.Year;
    let hour = data.Runtime;
    let plots = data.Plot;
    let Genre = data.Genre;
    let language = data.Language;
    let act = data.Actors;
    let write = data.Writer;
    let direct = data.Director;
    let nation = data.Country




    //Put Elements into DOM
    movieTitle.innerHTML = title;
    ageLimit.innerHTML = age;
    // imdb.innerHTML = im;
    // rTomatoes.innerHTML = rt;
    // tvCom.innerHTML = mt;
    year.innerHTML = yearReleased + " |" + " ";
    hours.innerHTML = hour ;
    plot.innerHTML = plots
    poster.setAttribute('src',img);
    genre.innerHTML = "Genre: " + Genre;
    lang.innerHTML = "Language: " + language;
    actors.innerHTML = "Actors: " + act;
    writerName.innerHTML = 'Writer: ' + write ;
    directorName.innerHTML = "Director: " + direct;
    countryName.innerHTML = "Country: " + nation
    plotTitle.innerHTML = "PLOT"

}
})
}


