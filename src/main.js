import data from './data/ghibli/ghibli.js';
const films = data.films;
const mainmovies = document.querySelector("main");

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
const yearMovie = films.map((item) => { return item.release_date });
const moviePremier = yearMovie.filter((item, index) => {
    return yearMovie.indexOf(item) === index;
})
//console.log(moviePubli);
const yearMoviesPublished = document.querySelector("#input_publication0");
for (let i = 0; i < moviePremier.length; i++) {
    let yearMovieTittle = `
    <option value="${moviePremier[i]}">${moviePremier[i]}</option>
`/*el value vendría a ser moviepremier que representa al filtro de las peliculas con sus índices*/
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
`/*el value vendría a ser moviepmovieProducerremier que representa al filtro de los productores con sus índices*/
    nameProductors.innerHTML += nameProducerGhibli;
}

//Filtrado ascendente
const filterOrderAZ = document.querySelector("#input_publication2");
filterOrderAZ.addEventListener("change", () => {
       const filmsOrderAsc = films.sort(function (a, b) {
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
showInfoMovies(filmsOrderAsc);   
})
//Filtrado descendente
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
    //console.log(filmsOrderDes);
    showInfoMovies(filmsOrderDes);   
})

//hacer click a los años de las publicaciones de las peliculas para que aparezcan los titles que se hicieron ese año
const filterYearPublisher = document.querySelector("#input_publication0");
filterYearPublisher.addEventListener("change", () => {
    
    const filterMoviexYear = films.filter(function(film){
        console.log(typeof film.release_date, typeof filterYearPublisher.value, film.release_date, filterYearPublisher.value)
        if (film.release_date === filterYearPublisher.value){
            return true;
        }else{
            return false;
        }
    })
    //console.log(filterMoviexYear);
    showInfoMovies(filterMoviexYear);
});

//hacer click a los productores de las peliculas para que aparezcan los titles que produjeron
const filternameProducer = document.querySelector("#input_publication1");
filternameProducer.addEventListener("change", () => {
   
    const filterMoviexProducer = films.filter(function(name){
        //console.log(typeof name.producer, typeof filternameProducer.value, name.producer, filternameProducer.value)
        if (name.producer === filternameProducer.value){
            return true;
        }else{
            return false;
        }
    })
    //console.log(filterMoviexProducer);
    showInfoMovies(filterMoviexProducer);
});