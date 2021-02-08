import {show} from './main.js';

export const anotherExample = () => {
  return 'OMG';
};



export const searchPokemon = (obj,dato) => {
  const resultSearch=obj.filter(item=>
    item.name.startsWith(dato.toLowerCase()));
  return resultSearch;
};


// Filtrar pokemon por Tipo
export const filterByType = (obj, property, condition) => {
  const resultFilterByType = obj.filter(element => (element[property][0] === condition
  || element[property][1] === condition));
  return resultFilterByType;
};


// Filtrar por CP
export const orderByMxCP = (obj, condition) => {
  let resultOrderByMaxCP = [];
  if (condition === 'high-low') {
    resultOrderByMaxCP = obj.sort((a, b) => b.stats['max-cp'] - a.stats['max-cp']);
  }
  if (condition === 'low-high') {
    resultOrderByMaxCP = obj.sort((a, b) => a.stats['max-cp'] - b.stats['max-cp']);
  }
  return resultOrderByMaxCP;
};




export const computeStats = (data) => {
  data.filter((pokemon) => pokemon.spawn_chance > 2.5);
}

/*

export const filterData = (data, condition) => {
  const conditionType = condition[0].value;
  const conditionByPower = condition[1].value;

  let arrFilter = data;
  if (conditionType !== '' && conditionType !== 'all') {
    arrFilter = arrFilter.filter((infoPokemon) => infoPokemon.type.indexOf(conditionType) !== -1);
  }
  if (conditionByPower !== '' && conditionByPower !== 'all') {
    arrFilter = arrFilter.filter((infoPokemon) => infoPokemon.stats['max-cp'] === conditionByPower);
  }
 
  return arrFilter;*/

export const orderAlpha=(option)=>{ 
  let arrayShow=show();
  let arrayOrder=[];
  switch(option){
    case '1':
       arrayOrder=arrayShow.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case '2':
      arrayOrder=arrayShow.sort((a, b) => a.name.localeCompare(b.name));
      arrayOrder.reverse();
      break;  
  }
  return arrayOrder;
};
export const orderRegion = (option) => {
  let arrayShow=show();
  console.log(arrayShow);
  let arrayRegion=[];
  switch(option){
    case '2':
      arrayRegion=arrayShow.filter(item=>
        item.generation['name']=='kanto');
        break;
    case '3':
        arrayRegion=arrayShow.filter(item=>
          item.generation['name']=='johto');
        break;
  }
  return arrayRegion;

};












