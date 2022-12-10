import axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-my-burger-db99c-default-rtdb.firebaseio.com/'
});

export default instance;