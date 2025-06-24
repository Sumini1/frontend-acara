import environment from "@/config/environment";
import { SessionExtended } from "@/Types/Auth";
import axios from "axios"
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface CustomSession extends Session {
   accessToken?: string
}

const headers = {
"Content-Type": "application/json",
}

const instance = axios.create({
    baseURL: environment.API_URL,
    headers,
    timeout: 60 * 1000,
})

// mengintercept setiap request dan response yang masuk
instance.interceptors.request.use(
    async (request) => {
        const session : SessionExtended | null = await getSession()
        if (session && session.accessToken) {
            request.headers.Authorization = `Bearer ${session.accessToken}`
        }
        return request
    },
    (error) => {
        return Promise.reject(error)
    }
)

// response
instance.interceptors.response.use(
   (response) => response,
    (error) => {
        return Promise.reject(error)
    }
)

export default instance