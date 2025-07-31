import type { IMovie } from '@/types'
import { create } from "zustand"
import { persist } from "zustand/middleware"

type AuthUser = {
  credential: string 
} | null

type Store = {
  saved:IMovie[]
  togglesaved: (payload:IMovie) => void

  auth: AuthUser
  setAuth: (payload: AuthUser) => void
  logout: () => void
}
export const useStore = create<Store>()(
  persist(
    (set) => ({
      saved: [],
      togglesaved: (payload) =>
        set((state) => {
          const isExast = state.saved.some((item: IMovie) => item.id === payload.id)
          if (isExast) {
            return {
              saved: state.saved.filter((item: IMovie) => item.id !== payload.id),
            }
          } else {
            return {
              saved: [...state.saved, payload],
            }
          }
        }),
      auth: null,
      setAuth: (payload) => set({ auth: payload }),
      logout: () => set({ auth: null }),
    }),
    {
      name: "movie-saved-store", 
    },
  ),
)