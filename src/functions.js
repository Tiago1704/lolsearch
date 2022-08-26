import axios from 'axios';

export const champsArrays = async() => {
    let arr = []
    await axios.get("http://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion.json").then((response) =>{
        arr = response?.data.data;
      }).catch((error) => console.error(error));
    arr = Object.values(arr)
    return arr.length > 0 ? arr : [];
}

export const searchChamps = async(element) => {
    console.log(element)
    let arr = []
    await axios.get(`http://ddragon.leagueoflegends.com/cdn/12.15.1/data/es_MX/champion/${element}.json`).then((response) =>{
        arr = response?.data.data;
    }).catch((error) => console.error(error));
    console.log(arr)
    return arr
}
