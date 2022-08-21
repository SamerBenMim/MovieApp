import axios from 'axios';
import { api } from "./config"
import { apiKey } from "./config"

export const getMovies = async(page) => {
    return await axios.get(`${api}/tv/popular`,{ params: { api_key :apiKey , page:page }  })
        .then(res => {
            return res.data.results;
        })
        .catch(err => {
            console.log(err)
        });
}