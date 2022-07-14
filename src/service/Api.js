import { BASE_URL,API_KEY } from "../utils/Config";
export const GET = async url => {
    const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}&page=2`; //+pageCurrent;
 //   https://api.themoviedb.org/3/tv/on_the_air?api_key=<<api_key>>
 //   &language=en-US&page=1
    
    let response = await fetch(
      API_URL,
       {
         method: 'GET'
        } 
      );
    response = response.json();
    return response;
  };