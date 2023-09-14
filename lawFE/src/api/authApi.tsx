import axios from "axios"

const url:string= "http://localhost"

export const RegisterAPI= async(data:any)=>{
    try {
        return await axios.post(`${url}/api/create-account`, data)
    } catch (error) {
        console.log(error)
    }
}
export const LoginAPI= async(data:any)=>{
    try {
        return await axios.post(`${url}/api/sign-in`, data).then((res)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}
