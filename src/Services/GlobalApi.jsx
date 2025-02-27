import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
//const api_key = '0a97fbee249b04c1046a5ebb5c0aaa0e'
const api_key = '0a97fbee249b04c1046a5ebb5c0aaa0e'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=0a97fbee249b04c1046a5ebb5c0aaa0e';

//https://api.themoviedb.org/3/trending/all/day?api_key=0a97fbee249b04c1046a5ebb5c0aaa0e
const getTrendingVideos = axios.get(movieBaseUrl + 
    "/trending/all/day?api_key=" + api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}

