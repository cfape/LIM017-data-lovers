import data from './data/ghibli/ghibli.js';
import { sortData, sortMovieRanking, filterYearPublisher } from './data.js';
const films = data.films;
const mainMovies = document.querySelector("main");
//const count = document.querySelector(".count");

/*función que activa música en botón "Leer más"*/
const audioMusicTotoro = document.querySelector("#button_start");
audioMusicTotoro.addEventListener("click", () => {
    const audioTagTotoro = document.querySelector("#audio-Totoro");
    audioTagTotoro.play();
});

//funciones para mostrar contenido de películas
function showInfoMovies(filmsPublished)
{
    mainMovies.innerHTML = "";
    for (let i = 0; i < filmsPublished.length; i++)
    {
    let movieGhibli = `
    <div id="contenido-peliculas" class="contenido-peliculas"><br><br><br><br><br><br><br>
        <div class="contenedor_movies">
        <img src=${filmsPublished[i].poster} alt="" class="div_img_movie"  /></a><br>
        <b><h3 class="contenedor_section_h3__movti"> ${filmsPublished[i].title}</h3></b> </br>
        <div class="div_contenido_movies"><b>Fecha de publicación: </b>${filmsPublished[i].release_date} </br>
        <b>Director: </b>${filmsPublished[i].director} </br>
        <b>Productor: </b>${filmsPublished[i].producer} </br>
        <b>Puntuación: </b>${filmsPublished[i].rt_score}</br>
        </div>
    </div>
    `;
    mainMovies.innerHTML += movieGhibli;
    }
}
showInfoMovies(films);

//declaración de variables para que aparezcan dentro de los selects del HTML
/*declarando variables para el año de publicación*/
const yearMovie = films.map((item) => { return item.release_date });
const moviePremier = yearMovie.filter((item, index) => {
    return yearMovie.indexOf(item) === index;
})
//console.log(moviePubli);
const yearMoviesPublished = document.querySelector("#input_publication0");
for (let i = 0; i < moviePremier.length; i++) {
    let yearMovieTittle = `
    <option value="${moviePremier[i]}">${moviePremier[i]}</option>
    `
/*el value vendría a ser moviePremier que representa al filtro de las peliculas con sus índices*/
    yearMoviesPublished.innerHTML += yearMovieTittle;
}
/*declarando variables para buscar el productor*/
const nameProducer = films.map((item) => { return item.producer });
const movieProducer = nameProducer.filter((item, index) => {
    return nameProducer.indexOf(item) === index;
});

const nameProductors = document.querySelector("#input_publication1");
for (let i = 0; i < movieProducer.length; i++) {
    let nameProducerGhibli = `
    <option value="${movieProducer[i]}">${movieProducer[i]}</option>
    `
/*el value vendría a ser moviepmovieProducerremier que representa al filtro de los productores con sus índices*/
    nameProductors.innerHTML += nameProducerGhibli;
}
//hacer click a los productores de las peliculas para que aparezcan los titles que produjeron
const filternameProducer = document.querySelector("#input_publication1");
filternameProducer.addEventListener("change", () => {

    const filterMoviexProducer = films.filter(function (name) {
        //console.log(typeof name.producer, typeof filternameProducer.value, name.producer, filternameProducer.value)
        if (name.producer === filternameProducer.value) {
            return true;
        } else {
            return false;
        }
    })
    //console.log(filterMoviexProducer);
    showInfoMovies(filterMoviexProducer);
});

//Filtrado ascendente y descendente alfabéticamente
const sortDataMovie = document.querySelector("#input_publication2");
sortDataMovie.addEventListener("change", () => {
    showInfoMovies(sortData(films,sortDataMovie.value))
});

/*filtrado ranking por puntaje de películas*/
const selectRankingMovies = document.querySelector("#input_publication3");
selectRankingMovies.addEventListener("change", () => {
    showInfoMovies(sortMovieRanking(films,selectRankingMovies.value))
});

//declaración de variables para que filtren
//hacer click a los años de las publicaciones de las peliculas para que aparezcan los titles que se hicieron ese año
const filterDataMovie = document.querySelector("#input_publication0");
filterDataMovie.addEventListener("change", () => {
/*debugger*/

    showInfoMovies(filterYearPublisher(films, filterDataMovie.value));
});


