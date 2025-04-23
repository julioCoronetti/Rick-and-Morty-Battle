import axios from "axios";

export const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
});

export const getRandomCharacter = async () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    const response = await api.get(`/character/${randomId}`);
    return response.data;
};