import axios from "axios"
import { useStore } from "@/Zustand/Store"

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

api.interceptors.request.use((config) => {
    const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2U0Y2M0YzA2YzcwN2I0ODcyMWVlY2ZjMjE5MGVmYyIsIm5iZiI6MTcyODg3NzQyNi4yLCJzdWIiOiI2NzBjOTM3MmIxNWQ5N2IxYTkzY2UwZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zZR_akio6SBvGWR4ThRbmrrWDuHZukkom4xo091rw8U"

    if (token) {
        config.headers.Authorization = token
    }

    // 🔥 Zustand’dan language olib qo‘shamiz
    const { language } = useStore.getState()
    config.params = {
        ...config.params,
        language,
    }

    return config
})
