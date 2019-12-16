import axios from 'axios'

export function api() {
    return axios.create({
        baseURL: "http://localhost:8080/api",
        headers: {
             Accept: 'application/json',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*"
        }
    })
}