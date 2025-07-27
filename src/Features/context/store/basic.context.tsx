import type {PropsWithChildren} from 'react'
import React, {createContext, useState} from "react"

interface BasicContextInterface {
    name: string,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>
}

/**
 * BASIC CONTEXT INITIALIZATION
 */
export const BasicContext = createContext<BasicContextInterface>({} as BasicContextInterface)

/**
 *
 * @param children
 * @constructor
 */
export const BasicContextWrapper: React.FC<PropsWithChildren> = ({children}) => {

    /**
     * COMPONENT STATE
     */
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    return <>
        <BasicContext.Provider value={{
            name,
            email,
            setName,
            setEmail
        }}>
            {children}
        </BasicContext.Provider>
    </>
}