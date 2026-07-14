import axios from "axios";

const API_URL = "http://localhost:8082/api/users";

const register = (user) => {
    return axios.post(API_URL + "/register", user);
};

const login = (user) => {
    return axios.post(API_URL + "/login", user);
};

export default {
    register,
    login
};