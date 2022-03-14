import data from './data/ghibli/ghibli.js';
const films = data.films;
const mainmovies = document.querySelector("main");

for (let i=0; i<films.length; i++) {
    let movieGhibli = `
<section id="contenido-peliculas"><br><br><br><br><br><br><br>
<div class="contenedor_movies">
<a href=""><img src=${films[i].poster} alt="" class="div_img_movie" /></a><br>
<b><h3 class="contenedor_section_h3__movti"> ${films[i].title}</h3></b> </br>
<div class="div_contenido_movies"><b>Fecha de publicación: </b>${films[i].release_date} </br>
<b>Director: </b>${films[i].director} </br>
<b>Productor: </b>${films[i].producer} </br>
<b>Puntuación: </b>${films[i].rt_score}</br>
</div>
</div>
</section>

`
mainmovies.innerHTML+=movieGhibli;
}
/*declarando variables para el año de publicación*/
const yearMovie= data.films
const yearMoviesPublished = document.querySelector("#input_publication");
for (let i=0; i<yearMovie.length; i++) {
    let yearMovieTittle = `
    <option value="">${yearMovie[i].release_date}</option>
`
yearMoviesPublished.innerHTML+=yearMovieTittle;
}

/*declarando variables para buscar el productor*/
const nameProductor= data.films
const nameProductors = document.querySelector("#input_publication1");
for (let i=0; i<nameProductor.length; i++) {
    let nameProducerGhibli = `
    <option value="">${nameProductor[i].producer}</option>
`
nameProductors.innerHTML+=nameProducerGhibli;
}


const filterOrderAZ = document.querySelector("#input_publication2");

filterOrderAZ.addEventListener("change",() =>{})