import axios from "axios";

const api = 'https://api.github.com/users';

export const getUser = async (user) => {
    const resp = await axios.get(`${api}/${user}`);
    return resp;

}