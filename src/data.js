// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

export const porcentGender=(data,total) =>{
  
  //Generamos un objeto para conocer la cantidad de mujeres y varones
  let array =[{gender:'Femenino', valor:0},{gender:'Masculino', valor:0}];
  for(let element of data){
      (element.gender === 'F' || element.gender ==='🙋🏻‍♀️')? array[0].valor += 1: array[1].valor += 1;
  }
  //Convertimos los valores obtenidos de mujeres y varones en porcentaje:
  array[0].valor=Math.round((array[0].valor/total)*100);
  array[1].valor=Math.round((array[1].valor/total)*100);
  return array;
}
