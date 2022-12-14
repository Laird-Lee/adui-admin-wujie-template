import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {useRouter} from "vue-router";

const $http = axios.create({
    baseURL: 'http://localhost:8888'
})

$http.interceptors.request.use((config: AxiosRequestConfig) => {
    // if (config.method === 'get') {
    //     config.params = {...config.params, _t: new Date().getTime()};
    // }
    const token = window.sessionStorage.getItem('token')
    if (token) {
        config.headers!.Authorization = `Bearer ${token}`
    }
    return config
}, error => {
    return Promise.reject(error)
})

$http.interceptors.response.use((response: AxiosResponse) => {
    return response
},  async error => {
    if (error.response.status.toString().includes('50')) {
        message.error(error.response.data.message)
    }
    if (error.response.status === 401) {
        window.sessionStorage.removeItem('token');
        const router = useRouter()
        await router.push({name: 'Login'});
    }
    return Promise.reject(error)
})

export default $http