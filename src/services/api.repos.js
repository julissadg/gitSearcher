import axios from "axios";

const api = 'https://api.github.com/repos';

export const getRepo = async (user, name) => {
    const resp = await axios.get(`${api}/${user}/${name}`);
    return resp;

}