import axios from 'axios';
import { ImgName } from './interfaces';

//TIAGO: CREAR INTERFFACES DE LA DEVOLUCIÓN DE LOS EP

export const champsArrays = async(): Promise<any> => {
    let arr: any = []
    await axios.get("http://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion.json").then((response) =>{
        arr = response?.data.data;
      }).catch((error) => console.error(error));
    arr = Object.values(arr)
    return arr.length > 0 ? arr : [];
}

export const itemsArrays = async(): Promise<any> => {
    let arr: any = []
    await axios.get("http://ddragon.leagueoflegends.com/cdn/12.16.1/data/es_MX/item.json").then((response) =>{
        arr = response?.data.data;
      }).catch((error) => console.error(error));
    arr = Object.values(arr)
    return arr.length > 0 ? arr : [];
}

export const searchChamps = async(element: any): Promise<any> => {
    let arr: any = []
    await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion/${element}.json`).then((response) =>{
        arr = response?.data.data;
    }).catch((error) => console.error(error));
    return arr
}
// funcion que trae el array de champs, elije 4 o 5 champs y los devuelve.

function random(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

// Se le pasa el array de todos los champs y elije a lazar 5 y los guarda en un array
export const aFewChamps = (element: any): ImgName[] => {
    let arr = []
    //puedo usar un for del 1 al 5.
    for (let i = 0; i < 5; i++) {
        arr.push({
            name: element[random(0,element.length)]?.id && element[random(0,element.length)]?.id !== '' ? element[random(0,element.length)]?.id : element[random(0,element.length)]?.name,
            img: element[random(0, element.length)]?.id && element[random(0,element.length)]?.id !== '' ? `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${element[random(0,element.length)]?.id }_1.jpg` : `http://ddragon.leagueoflegends.com/cdn/12.16.1/img/item/${ element[random(0,element.length)]?.image?.full}`
        })

    }    
    console.log(arr)
    return arr
}



// Funcion que devuelve un array con nombres de champs
