// import films from './main.js';
// import{porcentGender} from './data.js';
// export const films = mainmovies ;


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

// import data from './data/ghibli/ghibli.js';
// const datas = data.films;

// function totalPeoplexGener(stdscore){
//     const {rt_score, title} = datas; //solicitamos la info de la data
// const chart = new Chart(stdscore, {
//     type:"bar",
//     data:{
//         labels: datas.title.map(item => item.title), //cabecera
//         datasets:[
//         {   
//             label: "Puntuación", //titulo
//             backgroundColor: "#4DF4FF",
//             borderColor: "#ff5Ab0",
//             data: parseInt(rt_score).map(item => item.rt_score), //cantidad del peliculas
//         }
//     ]
// }
// })
// }
// function renderCharts(){
// const stadisticsGraphicGener = document.querySelector("#stadistics_graphic_gener").getContext("2d");
// totalPeoplexGener(stadisticsGraphicGener);
// }
// renderCharts()