import axios from 'axios';
import { api } from "./config"
import { apiKey } from "./config"

export const getTvShows = async (page) => {
    console.log("fetching TV data for page: " + page + "for the first time")
    return await axios.get(`${api}/tv/popular`, { params: { api_key: apiKey, page: page } })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err)
        });
}

export const getMovies = async (page) => {
    console.log("fetching Movies data for page: " + page + "for the first time")
    return await axios.get(`${api}/movie/popular`, { params: { api_key: apiKey, page: page } })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err)
        });
}