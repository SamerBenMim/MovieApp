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
export const getTvShowById = async (id) => {
    
    return await axios.get(`${api}/tv/${id}`, { params: { api_key: apiKey,append_to_response:"season/1,season/2,season/3,season/4,season/5,season/6" } })
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err)
        });
}