import data from './data/ghibli/ghibli.js';
const films = data.films;
const mainmovies = document.querySelector("main");

/*función que activa música en botón "Leer más"*/
const audioMusicTotoro = document.querySelector("#button_start");
audioMusicTotoro.addEventListener("click", () => {
    const audioTagTotoro = document.querySelector("#audio-Totoro");
    audioTagTotoro.play();
});

/*funciones para mostrar contenido de películas */
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
//console.log(filmsOrderAsc);
showInfoMovies(filmsOrderAsc);   
})
//Filtrado descendente
const filterOrderZA = document.querySelector("#input_publication2");
filterOrderZA.addEventListener("change", () => {
       const filmsOrderDesc = films.sort(function (a, b) {
        if(filterOrderZA.value === "Z-A"){
        if (a.title < b.title) {
            return 1;
        } if (a.title > b.title) {
            return -1;
        }
    }
        return 0;
    })

//console.log(filmsOrderDesc);
showInfoMovies(filmsOrderDesc);   
})


//declaración de variables para que filtren
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

//hacer filtro de las movies mejores rankeadas
const filterMoviesTop10 = document.querySelector("#input_publication3");
filterMoviesTop10.addEventListener("change", () => {
    const filterMoviexTop10 = films.sort(function(c,d){
        if (filterMoviesTop10.value === "Mejores rankeadas"){
            if (parseInt(c.rt_score) < parseInt(d.rt_score)) {
                
                return 1;
            } if (parseInt(c.rt_score) > parseInt(d.rt_score)) {
                return -1;
            }
        }
            return 0;
        })
     
    //console.log(filterMoviexTop10.slice(0,5));
    showInfoMovies(filterMoviexTop10.slice(0,5));  
    });


//hacer filtro de las movies peores rankeadas
 const filterMoviesTop5 = document.querySelector("#input_publication3");
filterMoviesTop5.addEventListener("change", () => {
   
    const filterMoviexTop5 = films.sort(function(e,f){
        if (filterMoviesTop5.value === "Menos rankeadas"){
      
            if (parseInt(e.rt_score) > parseInt(f.rt_score)) {
                return 1;
            } if (parseInt(e.rt_score) < parseInt(f.rt_score)) {
                return -1;
            }
        }
            return 0;  
        })
       //console.log(filterMoviexTop5.slice(0,5));
        showInfoMovies(filterMoviexTop5.slice(0,5));
    });


//ver el detalle de las películas
/*const detailDescriptionMovie = document.querySelector(".div_img_movie");
detailDescriptionMovie.addEventListener("click", showMovieDetail(), true);
function showMovieDetail (movie_detail){
    mainmovies.innerHTML = "";
    for (let index = 0; index < movie_detail.length; index++) {
        let divUnitDescripMovie = `
        div id="contenido-peliculas1"><br><br><br><br><br><br><br>
<div class="contenedor_movies1">
<a href=""><img src=${movie_detail[index].poster} alt="" class="div_img_movie1" /></a><br>
<b><h3 class="contenedor_section_h3__movti1"> ${movie_detail[index].title}</h3></b> </br>
<div class="div_contenido_movies1"><b>Fecha de publicación: </b>${movie_detail[index].release_date} </br>
 <b>Director: </b>${movie_detail[index].director} </br>
 <b>Productor: </b>${movie_detail[index].producer} </br>

 </div>
 </div>
 </section>
        `
console.log(divUnitDescripMovie)
mainmovies.innerHTML += divUnitDescripMovie;

}

});

*/
   
//ver el detalle de las películas
/*function showInformationMovies(film, array){
    document.querySelector("#container_main_descriptionmovie").style.display = "none";
    let filmInformation = "";
  
    for (let i = 0; i<film.length; i++ ){
        film[i].addEventListener("click", () => {
            document.querySelector("#container_main_descriptionmovie").style.display = "block";
            for (let g = 0; g < array.length; g++){
                if (i == g) {
                    
                 let filmInfoDiv =   `
                 
                    
                    
                    <a href=""><img src=${array[g].poster} alt="" class="div_img_movie" /></a><br>
                    <b><h3 class="contenedor_section_h3__movti"> ${array[g].title}</h3></b> </br>
                    <div class="div_detail_movies"><b>Fecha de publicación: </b>${array[g].description} </br>
                     <b>Director: </b>${array[g].director} </br>
                     <b>Productor: </b>${array[g].producer} </br>
                     <b>Puntuación: </b>${array[g].rt_score}</br>
                     </div>
                     </div>`;
                     filmInformation = filmInfoDiv;
                }
                mainmovies.innerHTML = filmInformation;
            }
        });
    }

}
//console.log(showInformationMovies(films));
showInformationMovies(films);
*/