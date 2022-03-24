import data from './data/ghibli/ghibli.js';
const films = data.films;
const mainmovies = document.querySelector("main");
//const count = document.querySelector(".count");

/*función que activa música en botón "Leer más"*/
const audioMusicTotoro = document.querySelector("#button_start");
audioMusicTotoro.addEventListener("click", () => {
    const audioTagTotoro = document.querySelector("#audio-Totoro");
    audioTagTotoro.play();
});


/*funciones para mostrar contenido de películas */
function showInfoMovies(filmsPublished)
{
  mainmovies.innerHTML = "";
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
      </section> 
      `;
      mainmovies.innerHTML += movieGhibli;
      let divFilms= document.getElementById("contenido-peliculas");
  divFilms.setAttribute("id", filmsPublished[i].id);
  mainmovies.appendChild(divFilms);

  let identificador = document.getElementById(filmsPublished[i].id)
  //console.log("38" + identificador.value)
  identificador.addEventListener("click", newScreen);
  //console.log("click" + filmsPublished[i].id);
    // eslint-disable-next-line no-inner-declarations
    function newScreen() {
      //deleteNodo(mainmovies);
      mainmovies.innerHTML = "";
      //quita y muestra elementos del divFilms
      document.querySelector(".section_welcome").style.display = "none";
      document.querySelector(".contenedor-texto").style.display = "none";
      document.querySelector(".contenido-biography").style.display = "none";
      document.querySelector(".span_search").style.display = "none";
      document.querySelector(".header").style.position="absolute";


}

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
        if (filterOrderAZ.value === "A-Z") {
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
        if (filterOrderZA.value === "Z-A") {
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


//ver el detalle de las películas



/*
const showAllFilms = document.getElementById("showAllFilms");
/*const deleteNodo = (showFilms) => {
  while(showFilms.lastChild){
      showFilms.removeChild(showFilms.lastChild);
  }
}*/

// const showFilmInScreen = (arrayData) =>{
//   //deleteNodo(showAllFilms);
//   if(arrayData.length === 0){
//     const messegeError = document.createElement('div');
//     messegeError.innerHTML=  `<h1> Not found this movie </h1> <img src="img/error01.gif" alt="" class="imgNotFoundSearch">`;
//     showAllFilms.appendChild(messegeError);
//   }


//     arrayData.forEach((filmsPublished) =>{
      
//         const divFilms = document.createElement("div");
//         divFilms.classList.add("card");
//         divFilms.innerHTML =`<center><img src=${filmsPublished.poster} alt=""/></center><br>
//         <span class= "spanFilm"><b><p class= "p_div_card_title"> ${filmsPublished.title}</p></b></span></br>
//         <span class= "spanFilm"><b>Fecha de publicación: </b></span><p class= "p_div_card">${filmsPublished.release_date}</p>
//         <span class= "spanFilm"><b>Descripción: </b></span><p class= "p_div_card">${filmsPublished.description}</p>
//         <span class= "spanFilm"><b>Director: </b></span><p class= "p_div_card">${filmsPublished.director}</p>
//         <span class= "spanFilm"><b>Productor: </b></span><p class= "p_div_card">${filmsPublished.producer}</p>
//         <span class= "spanFilm"><b>Puntuación: </b></span><p class= "p_div_card">${filmsPublished.rt_score}</p>
//         `;
//         divFilms.setAttribute("id", filmsPublished.id);
//         mainmovies.appendChild(divFilms);

//         const identificador = document.getElementById(filmsPublished.id)
//         identificador.addEventListener("click", () => {
        
//         function newScreen() {
//             //deleteNodo(mainmovies);
//             mainmovies.textContent = "";
//             //quita y muestra elementos del divFilms
//             document.getElementsByClassName("section_welcome").style.display = "none";
//             document.getElementsByClassName(".contenedor-texto").style.display = "none";
//             document.getElementsByClassName(".contenido-biography").style.display = "none";
//             document.getElementsByClassName(".span_search").style.display = "none";
//             document.getElementsByClassName("header").style.position="absolute";

//             const article = document.createElement("article");
//             article.classList.add("articleNewS");
    
//             const asideSection = document.createElement('aside');
//             asideSection.classList.add("aside")
//             asideSection.innerHTML= `<h1 class="titleNewScreen">${filmsPublished.title}</h1>
//             <img src=${filmsPublished.poster} class="editImg">
//             <div class="boxAside"> <p class="asideP"><span class="spanDescription">Release Date: </span>${filmsPublished.release_date}</p>
//             <p class="asideP"><span class="spanDescription">Director:</span> ${filmsPublished.director}</p>
//             <p class="asideP"><span class="spanDescription">Producer:</span> ${filmsPublished.producer}</p> </div>`;
//             const mainSection = document.createElement("section");
//             mainSection.classList.add("mainSection");
//             mainSection.innerHTML=`<div class="boxDescription"><h3 class="subTitleBox">Description:</h3> <p class="fontF">${filmsPublished.description}</p></div>`;
//             //VEHICLES        
//             const vehicleLoop = document.createElement('section');
//             vehicleLoop.classList.add("sectionVehicles");
//             vehicleLoop.innerHTML=`<h3 class="subTitleVehicles">Vehicles: </h3>`;
//             const vehicles = filmsPublished.vehicles;
//             if(vehicles.length === 0){
//               vehicleLoop.innerHTML=`<h3 class="subTitleError">Vehicles:</h3> <div class="addFlexError"> There are no vehicles.</div>`;
//             }else{
//               for (let i = 0; i < vehicles.length; i++) {
//                 vehicleLoop.innerHTML+=`
//                 <div class="tarjeta-wrap">
//                   <div class="tarjeta">
//                     <div class="adelante">
//                       <h1 class="designNameCard">${vehicles[i].name}</h1>
//                       <img src=" ${vehicles[i].img}" alt="" class="imgDesignCard">
//                     </div>
//                     <div class="atras"> 
//                       <div class="decriptionCharacters">
//                         <p><span class="spanDescription">Description:</span> ${vehicles[i].description}</p>
//                         <p><span class="spanDescription">Vehicle class: </span>${vehicles[i].vehicle_class}</p>
//                         <p><span class="spanDescription">Length:</span> ${vehicles[i].length}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>`;
//               }
//             }
            
//             //CONTAINER ALL PEOPLE
//             const peopleSection =document.createElement("section");
//             peopleSection.classList.add("peopleSection")//WRAP
//             peopleSection.innerHTML=`<h3 class="subTitlePeople">People:</h3>`;
            
//             //BOX ALL CHARACTERS    
//             const peopleLoop = document.createElement('section');
//             peopleLoop.classList.add("boxAllCharacters");
       
//             const character = filmsPublished.people;
//             for (let index = 0; index < character.length-1; index++) {
//               peopleSection.innerHTML+=`
//               <div class="tarjeta-wrap">
//                 <div class="tarjeta">
//                   <div class="adelante">
//                     <h1 class="designNameCard">${character[index].name}</h1>
//                     <img src=" ${character[index].img}" alt="" class="imgDesignCard">
//                   </div>
//                   <div class="atras"> 
//                     <div class="decriptionCharacters">
//                       <p><span class="spanDescription">Gander:</span> ${character[index].gender}</p>
//                       <p><span class="spanDescription">Age: </span>${character[index].age}</p>
//                       <p><span class="spanDescription">Eye color:</span> ${character[index].eye_color}</p>
//                       <p><span class="spanDescription">Hair color:</span> ${character[index].hair_color}</p>
//                       <p><span class="spanDescription">Specie:</span>  ${character[index].specie}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>`;
//             }
            
//             //LOCATIONS
//             const sectionLocations = document.createElement('section');
//             sectionLocations.classList.add("sectionLocation")
    
//             sectionLocations.innerHTML=`<h3 class="subTitleLocation">Locations:</h3>`;
//             const locations = filmsPublished.locations;
//             if(locations.length === 0){
//               sectionLocations.innerHTML=`<h3 class="subTitleError">Locations:</h3> <div class="addFlexError"> There are no locations.<img class="errorVehicles"src="img/totoroLlorando.gif"></div>`;
//             }else{
//               for (let i = 0; i < locations.length-1; i++) {
//                 sectionLocations.innerHTML+=`
//                 <div class="tarjeta-wrap">
//                   <div class="tarjeta">
//                     <div class="adelante">
//                       <h1 class="designNameCard">${locations[i].name}</h1>
//                       <img src=" ${locations[i].img}" alt="" class="imgDesignCard">
//                     </div>
//                     <div class="atras"> 
//                       <div class="decriptionCharacters">
//                         <p><span class="spanDescription">Climate:</span> ${locations[i].climate}</p>
//                         <p><span class="spanDescription">Terrain:</span> ${locations[i].terrain}</p>
//                         <p><span class="spanDescription">Surface water:</span>  ${locations[i].surface_water}</p>
//                         <p><span class="spanDescription">Residents:</span>  ${locations[i].residents}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>`;
//               }
//             }
//             showAllFilms.append(article);
//             article.append(asideSection, mainSection);  
//             peopleSection.append(peopleLoop);
//             mainSection.append( peopleSection, sectionLocations, vehicleLoop);
            
//           }
//           newScreen()
//         });
//         count.innerHTML=`Count <span id="spanCount">(${arrayData.length})</span>`;
        
//         //return showAllFilms;
//     }
//     )}
//     showFilmInScreen(films);
