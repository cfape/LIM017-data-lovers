import data from './data/ghibli/ghibli.js';
const films = data.films;
const mainmovies = document.querySelector("main");

for (let i=0; i<films.length; i++) {
    let movieGhibli = `<div class="contenedor_movie">

<div><a href=""><img src="img/1984-nausicaa-cartel.jpg" alt="" class="div_img_movie" /></a></div>
<div><b> ${films[i].title}</b> 

<p>El caso de Nausicaä del Valle del Viento (1984) se considera a veces la primera película de Studio Ghibli, pero lo cierto es que se estrenó un año antes de la fundación del estudio. Creada por Hayao Miyazaki, se inspiró en su propia novela del mismo nombre que publicó dos años antes, en 1982.
Es considerada como la primera película de Miyazaki dentro de Studio Ghibli, ya que una buena parte del grupo de producción participó en la obra. También porque gracias a su estreno se pudo crear este estudio, por lo que su origen tiene lugar en esta película y el propio estudio la incluye en su colección.
La historia se sitúa 1.00 años después de una guerra que provocó que las personas malvivan en un bosque contaminado por gases e insectos mutantes a causa de la guerra. Nausicaä, princesa del Valle del Viento, se enfrenta al ejército de Tormekia, un reino gobernado por Lady Kushana, que pretende controlar al “Dios de la Guerra” para eliminar el Bosque Contaminado y los Ohms, unos insectos gigantes que habitan allí. La protagonista luchará por evitarlo. 
</div>
</div>`
mainmovies.innerHTML+=movieGhibli;
}
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
