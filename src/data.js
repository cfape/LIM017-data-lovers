//Función orden ascendente y descendente
export const sortData = (films,filterData) => {
  console.log(films);
    if (filterData === "A-Z") {
      films.sort((a,b) => {
        if (a.title > b.title) {
            return 1;
        }else if (a.title < b.title) {
            return -1;
        }
        return 0;
    })

  }
  else {
  films.sort((a, b) => {
    if (a.title > b.title) {
      return -1;
    }else if (a.title < b.title) {
      return 1;
    }
    return 0;
  })

}
return films;
};

export const anotherExample = () => {
  return 'OMG';
};


