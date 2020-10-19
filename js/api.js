const API_key = 'JAsSvdrs6vTd8bjSwT6bSZHcbOTTbTOa';
const urlPrincipal = 'https://api.giphy.com/v1/gifs';

async function apiGiphy(url, params) {
    try {
        
        const response = await fetch(url + `?api_key=${API_key}` + params);

        const json = await response.json();

        return json;
    } catch (error) {

        console.log(error);
    }

}


