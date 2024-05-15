import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
});


// Test API

export const testApi = () => api.get("/test");

// REGISTER API

export const registerUserApi = (data) => api.post('/api/user/create', data);

// LOGIN API
export const loginUserApi = (data) => api.post('/api/user/login', data);

//http://localhost:5000/test