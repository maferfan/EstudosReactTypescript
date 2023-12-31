import axios from "axios";

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getAllAlbums: async () => {
        let response = await http.get("/albums")
        return response.data
    },
    getAlbumById: async (id: string) => {
        let response = await http.get(`/albums/${id}`)
        return response.data
    },
    getPhotosByAlbum: async (id: string) => {
        let response = await http.get(`/albums/${id}/photos`)
        return response.data
    },
    getPhotosById: async (id: string) => {
        let response = await http.get(`/photos/${id}`)
        return response.data
    },
}