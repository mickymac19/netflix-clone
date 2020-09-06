import axios from "axios";

/**base url to make requests to the movie database */

const instance = axios.create({
    baseURL: "https://api.themoviedb.org3", 
}); 

export default instance; 