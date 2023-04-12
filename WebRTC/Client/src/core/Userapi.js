

import { api } from "./api";

// const loginApi = (action) => {
//     const url = "http://localhost:5000/login";

//     const body = {
//         email: action.email,
//         password: action.password
//     }

//     return api._post(url, body).then((response) => {
//         console.log(url,body)
//         console.log("response",response)
//         const payload = response
//         return {
//             payload
//         }
//     }).catch((error) => {
//         console.log(error)
//         return {
//             error
//         }
//     })
// }

const loginApi = (action) => {
    const url = `http://localhost:5000/login`
    const body = {
        email: action.email,
        password: action.password
    }
    return api._post(url, body).then((response) => {
        console.log("api", response)
        const payload = response.data
        return {
            payload
        }
    }).catch((error) => {
        console.log("api", error)

        return {
            error
        }
    })
}
export const Userapi = {
    loginApi
}





