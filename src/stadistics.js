// //import films from './main.js';
// import{porcentGender} from './data.js';
// //export const films = mainmovies ;


// let arrayForGender= [];
// let count =[];
// for(let element of porcentGender(films,2023) ){
//   arrayForGender.push(element.gender);
//   count.push(element.valor);
// }
// const secondGraphic = new Chart(graphicForGender, {
//     type: "pie",
//     data:{
//         labels:arrayForGender,
//         datasets:[
//             {
//                 label:'Género',
//                 data: [964,1054],
//                 backgroundColor:['rgb(216, 133, 163)','rgb(120, 151, 171)']
//             },
//         ],
//     },
//     options:{
//         maintainAspectRatio:false,
//         plugins: {
//             title:{
//                 display:true,
//                 align:'center',
//                 position:'top',
//                 text:`Participantes por género: Mujeres: ${count[0]}%, Hombres:${count[1]}%`,
//                 font:{
//                     size:20,
//                     family:"Delius",
//                 },
//             },
//             legend: {
//               position: "top",
//             }
//           }
//     },
// }
// )
//import "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.js";


const stadisticsGraphicGener = document.querySelector("#stadistics_graphic_gener").getContext("2d");
const chart = new Chart(stadisticsGraphicGener,{
    type:"bar",
    data:{
        labels: ["Female", "Male"], //cabecera
        datasets:[
        {   
            label: "Estadísticas de género en las películas", //titulo
            backgroundColor: "rgba(255,255,255)",
            borderColor: "rgb(255,255,0)",
            data:[100,58] //cantidad del peliculas
        }
    ]
}
})