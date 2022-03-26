import data from './data/ghibli/ghibli.js';
import { sortData } from './data.js';
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
    /*let divFilms= document.getElementById("contenido-peliculas");
    divFilms.setAttribute("id", filmsPublished[i].id);
    mainMovies.appendChild(divFilms);*/

    /*let identificador = document.getElementById(`${filmsPublished[i].id}`)
    //("38" + filmsPublished[i].title)
    identificador.addEventListener("click", () => {
    //console.log("click" + filmsPublished[i].id);
    //console.log("click" + filmsPublished[i].title);
    mainMovies.innerHTML = "";
    //quita y muestra elementos del divFilms
    document.querySelector(".section_welcome").style.display = "none";
    document.querySelector(".contenedor-texto").style.display = "none";
    document.querySelector(".contenido-biography").style.display = "none";
    document.querySelector(".span_search").style.display = "none";
    document.querySelector(".header").style.position="absolute";
    });*/
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

//Filtrado ascendente y descendente
const sortDataMovie = document.querySelector("#input_publication2");
sortDataMovie.addEventListener("change", () => {
    showInfoMovies(sortData(films,sortDataMovie.value))
});

//declaración de variables para que filtren
//hacer click a los años de las publicaciones de las peliculas para que aparezcan los titles que se hicieron ese año
const filterYearPublisher = document.querySelector("#input_publication0");
filterYearPublisher.addEventListener("change", () => {

    const filterMoviexYear = films.filter(function (film) {
        //console.log(typeof film.release_date, typeof filterYearPublisher.value, film.release_date, filterYearPublisher.value)
        if (film.release_date === filterYearPublisher.value) {
            return true;
        } else {
            return false;
        }
    })
    //console.log(filterMoviexYear);
    showInfoMovies(filterMoviexYear);
});



//hacer filtro de las movies mejores rankeadas
const filterMoviesTop10 = document.querySelector("#input_publication3");
filterMoviesTop10.addEventListener("change", () => {
    const filterMoviexTop10 = films.sort(function (c, d) {
        if (filterMoviesTop10.value === "Mejores rankeadas") {
            if (parseInt(c.rt_score) < parseInt(d.rt_score)) {

                return 1;
            } if (parseInt(c.rt_score) > parseInt(d.rt_score)) {
                return -1;
            }
        }
        return 0;
    })

    //console.log(filterMoviexTop10.slice(0,5));
    showInfoMovies(filterMoviexTop10.slice(0, 5));
});


//hacer filtro de las movies peores rankeadas
const filterMoviesTop5 = document.querySelector("#input_publication3");
filterMoviesTop5.addEventListener("change", () => {

    const filterMoviexTop5 = films.sort(function (e, f) {
        if (filterMoviesTop5.value === "Menos rankeadas") {

            if (parseInt(e.rt_score) > parseInt(f.rt_score)) {
                return 1;
            } if (parseInt(e.rt_score) < parseInt(f.rt_score)) {
                return -1;
            }
        }
        return 0;
    })
    //console.log(filterMoviexTop5.slice(0,5));
    showInfoMovies(filterMoviexTop5.slice(0, 5));
});



