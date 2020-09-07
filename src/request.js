const API_KEY = "5f29616abe0c912150243172afe0a4fb";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_keys=${API_KEY}&language=en-US`,
    fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchHorrorMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchRomanceMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchDocumentaries: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
}

export default requests; 