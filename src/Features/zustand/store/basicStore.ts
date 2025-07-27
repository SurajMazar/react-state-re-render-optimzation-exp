import {create} from "zustand/react";

/**
 * STORE INTERFACE
 */
interface BasicStoreInterface {
    name: string
    email: string,
    setName: (value: string) => void,
    setEmail: (value: string) => void,
}

/**
 * STORE INITIALIZATION
 */
export const useBasicStore = create<BasicStoreInterface>((set) => ({
    name: '',
    email: '',
    setEmail: (email) => set({email}),
    setName: (name) => set({name})
}))