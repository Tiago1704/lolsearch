import axios from 'axios';

export const champsArrays = async() => {
    let arr = []
    await axios.get("http://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion.json").then((response) =>{
        arr = response?.data.data;
      }).catch((error) => console.error(error));
    arr = Object.values(arr)
    return arr.length > 0 ? arr : [];
}

export const itemsArrays = async() => {
    let arr = []
    await axios.get("http://ddragon.leagueoflegends.com/cdn/12.16.1/data/es_MX/item.json").then((response) =>{
        arr = response?.data.data;
      }).catch((error) => console.error(error));
    arr = Object.values(arr)
    return arr.length > 0 ? arr : [];
}

export const searchChamps = async(element) => {
    let arr = []
    await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion/${element}.json`).then((response) =>{
        arr = response?.data.data;
    }).catch((error) => console.error(error));
    return arr
}
// funcion que trae el array de champs, elije 4 o 5 champs y los devuelve.

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// Se le pasa el array de todos los champs y elije a lazar 5 y los guarda en un array
export const aFewChamps = (element) => {
    let arr = []
    //puedo usar un for del 1 al 5.
    for (let i = 0; i < 5; i++) {
        arr.push(element[random(0,element.length)]?.id);

    }    
    return arr
}



// Funcion que devuelve un array con nombres de champs
