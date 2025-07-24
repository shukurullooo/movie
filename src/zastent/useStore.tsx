import { create } from 'zustand'

type Store = {
  saved: unknown[]
  auth: string | unknown
  toggleSaved: (payload: any)=> void

}

 export const useStore = create<Store>()((set) => ({
  saved: [],
  auth: null,
  toggleSaved: (payload: any)=> set((state) =>{
    const exist = state.saved.some(Item => Item.id === payload.id)
    if(exist) {
        return {saved: state.saved.filter(Item => Item.id !== payload.id)}
    }else{
        return {saved: [...state.saved , payload]}
    }
  })
 }))