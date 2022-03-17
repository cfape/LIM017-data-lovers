
import data from './data/ghibli/ghibli.js';
const films = data.films;
const mainmovies = document.querySelector("main");

/* Función que activa música en botón Leer más*/
const audioMusicTotoro = document.querySelector("#button_start");
audioMusicTotoro.addEventListener("click", () => {
    const audioTagTotoro = document.querySelector("#audio-Totoro");
    audioTagTotoro.play();
})

function showInfoMovies(filmsPublished) {
mainmovies.innerHTML = "";
    for (let i = 0; i < filmsPublished.length; i++) {
    let movieGhibli = `
<div id="contenido-peliculas"><br><br><br><br><br><br><br>
<div class="contenedor_movies">
<a href=""><img src=${filmsPublished[i].poster} alt="" class="div_img_movie" /></a><br>
<b><h3 class="contenedor_section_h3__movti"> ${filmsPublished[i].title}</h3></b> </br>
<div class="div_contenido_movies"><b>Fecha de publicación: </b>${filmsPublished[i].release_date} </br>
<b>Director: </b>${filmsPublished[i].director} </br>
<b>Productor: </b>${filmsPublished[i].producer} </br>
<b>Puntuación: </b>${filmsPublished[i].rt_score}</br>
</div>
</div>
</section>
`
        mainmovies.innerHTML += movieGhibli;
    }
}
showInfoMovies(films);
/*declarando variables para el año de publicación*/
const yearMovie = data.films.map((item) => { return item.release_date });
const moviePremier = yearMovie.filter((item, index) => {
    return yearMovie.indexOf(item) === index;
})
//console.log(moviePubli);
const yearMoviesPublished = document.querySelector("#input_publication0");
for (let i = 0; i < moviePremier.length; i++) {
    let yearMovieTittle = `
    <option value="${moviePremier[i]}">${moviePremier[i]}</option>
`
    yearMoviesPublished.innerHTML += yearMovieTittle;
}
/*declarando variables para buscar el productor*/
const nameProducer = data.films.map((item) => { return item.producer });
const movieProducer = nameProducer.filter((item, index) => {
    return nameProducer.indexOf(item) === index;
});

const nameProductors = document.querySelector("#input_publication1");
for (let i = 0; i < movieProducer.length; i++) {
    let nameProducerGhibli = `
    <option value="${movieProducer[i]}">${movieProducer[i]}</option>
`
/*el value vendría a ser movieProducer que representa al filtro de los productores*/
    nameProductors.innerHTML += nameProducerGhibli;
}

/*Filtrado ascendente*/
const filterOrderAZ = document.querySelector("#input_publication2");
filterOrderAZ.addEventListener("change", () => {
    const filmsOrder = films.sort(function (a, b) {
    if(filterOrderAZ.value === "A-Z"){
        if (a.title > b.title) {
            return 1;
        } if (a.title < b.title) {
            return -1;
        }
    }
        return 0;
    })
    //console.log(filmsOrder);
    showInfoMovies(filmsOrder);
})

/*Filtrado descendente*/
const filterOrderZA = document.querySelector("#input_publication2");
filterOrderZA.addEventListener("change", () => {
    const filmsOrderDes = films.sort(function (a, b) {
        if(filterOrderAZ.value === "Z-A"){
        if (a.title < b.title) {
            return 1;
        } if (a.title > b.title) {
            return -1;
        }
    }
        return 0;
    })
    /*console.log(filmsOrderDes);*/
    showInfoMovies(filmsOrderDes);
})
//hacer click a los años de las publicaciones de las peliculas para que aparezcan los titles que se hicieron ese año
const filterYearPublisher = document.querySelector("#input_publication0");
filterYearPublisher.addEventListener("change", () => {

    const filterMoviexYear = films.filter(function(film){
        //console.log(typeof film.release_date, typeof filterYearPublisher.value, film.release_date, filterYearPublisher.value)
        if (film.release_date === filterYearPublisher.value){
            return true;
        }else{
            return false;
        }
    })
    /*console.log(filterMoviexYear);*/
    showInfoMovies(filterMoviexYear);
})

//hacer click a los productores de las peliculas para que aparezcan los titles que se hicieron ese año
const filterProducer = document.querySelector("#input_publication1");
filterProducer.addEventListener("change", () => {

    const filterProducerxMovie = films.filter(function(name){
        //console.log(typeof film.release_date, typeof filterYearPublisher.value, film.release_date, filterYearPublisher.value)
        if (name.producer === filterProducer.value){
            return true;
        }else{
            return false;
        }
    })
    /*console.log(filterProducerxMovie);*/
    showInfoMovies(filterProducerxMovie);
})


//hacer filtro del top 5
const filterMoviesTop5 = document.querySelector("#input_publication3");
filterMoviesTop5.addEventListener("change", () => {

    const filterMoviexTop5 = films.sort(function(e,f){

        if (filterMoviesTop5.value === "top5"){
            if (parseInt(e.rt_score) < parseInt(f.rt_score)) {
                return 1;
            } if (parseInt(e.rt_score) > parseInt(f.rt_score)) {
                return -1;
            }

        }
            return 0;

        })
        //console.log(filterMoviexTop10);
        showInfoMovies(filterMoviexTop5.slice(0,5));


    });