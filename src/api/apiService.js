import axios from './axiosInstance';
import { SERACH_genres, GETIMAGES, SERACH } from '../constants/endpoints'


export const getShows = async (genre) => {
    return axios.get(`${SERACH_genres}${genre}`)
}

export const getShows1 = async (genre) => {
    return axios.get(`${SERACH}${genre}`)
}

export const getImages = async (id) => {
    return axios.get(`https://api.tvmaze.com/shows/${id}${GETIMAGES}`)
}  