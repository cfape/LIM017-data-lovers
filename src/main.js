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

const yearMovie= data.films
const yearMoviesPublished = document.querySelector("#div_search");
for (let i=0; i<yearMovie.length; i++) {
    let yearMovieTittle = `
    <select id="input_publication" class="section-input_text">
    <option value="todos" select>Selecciona</option>
    <option value="">${yearMovie[i].release_date}</option>
    </select>
`
yearMoviesPublished.innerHTML+=yearMovieTittle;
}
/*const searchMovie = document.querySelector("#div_search_public");
const yearPublication =data.films;
for (let i=0; i<yearPublication.length; i++) {
    let yearMovie = `<div id="div_search_public" class="div_search">
    <option value="todos" disabled select>Selecciona</option></select>
    `
    searchMovie.innerHTML+=yearMovie;*/

/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);
*/

/*<div class="contenedor_movie">
<div><a href=""><img src="img/1984-nausicaa-cartel.jpg" alt="" class="div_img_movie" /></a></div>
<div><b> 1.	Nausicaä del Valle del Viento (1984)</b> 

<p>El caso de Nausicaä del Valle del Viento (1984) se considera a veces la primera película de Studio Ghibli, pero lo cierto es que se estrenó un año antes de la fundación del estudio. Creada por Hayao Miyazaki, se inspiró en su propia novela del mismo nombre que publicó dos años antes, en 1982.
Es considerada como la primera película de Miyazaki dentro de Studio Ghibli, ya que una buena parte del grupo de producción participó en la obra. También porque gracias a su estreno se pudo crear este estudio, por lo que su origen tiene lugar en esta película y el propio estudio la incluye en su colección.
La historia se sitúa 1.00 años después de una guerra que provocó que las personas malvivan en un bosque contaminado por gases e insectos mutantes a causa de la guerra. Nausicaä, princesa del Valle del Viento, se enfrenta al ejército de Tormekia, un reino gobernado por Lady Kushana, que pretende controlar al “Dios de la Guerra” para eliminar el Bosque Contaminado y los Ohms, unos insectos gigantes que habitan allí. La protagonista luchará por evitarlo. 
</div>
</div>*/
