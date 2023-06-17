import axios from "axios"
const BASE_URL ='https://youtube-v31.p.rapidapi.com'


const options = {
    params: {
    
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '8c90e040f1mshe68a1930257fb4ep18813djsn70c291c01c52',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

  export const fetchFromAPI = async(url)=>{
    const {data} =await axios.get(`${BASE_URL}/${url}`,options) ;
    return data;

  }
  