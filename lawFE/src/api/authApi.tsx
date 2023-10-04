import axios from "axios"

const url:string= "http://localhost:2030/api/v1/"

export const RegisterAPI= async(data:any)=>{
    try {
        return await axios.post(`${url}register`, data)
    } catch (error) {
        console.log(error)
    }
}
export const LoginAPI= async(data:any)=>{
    try {
        return await axios.post(`${url}sign-in`, data).then((res)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
