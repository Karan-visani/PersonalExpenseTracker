import axios from 'axios'
console.log(import.meta.env.VITE_API_URL)
const API = axios.create({
    // baseURL: "http://localhost:3000/api"
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000
})

API.interceptors.request.use((req)=>{
    const token = localStorage.getItem("token")

    if(token){
        req.headers.Authorization = `Bearer ${token}`
    }

    return req
})

export default API