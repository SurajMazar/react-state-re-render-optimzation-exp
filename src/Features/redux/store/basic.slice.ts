import type {PayloadAction} from "@reduxjs/toolkit"
import {createSlice} from "@reduxjs/toolkit"

interface BasicSliceAddress {
    lat: number,
    lng: number,
    readable: string
}

interface BasicSliceInterface {
    name: string
    email: string
    address: BasicSliceAddress
}

// INITIAL REDUX STATE
const initialState: BasicSliceInterface = {
    name: '',
    email: '',
    address: {
        lat: 0,
        lng: 0,
        readable: ''
    }
}

/**
 * BASIC SLICE
 */
const BasicSlice = createSlice({
    name: 'basic',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload
        },
        setAddress(state, action: PayloadAction<BasicSliceAddress>) {
            state.address = action.payload
        }
    }
})

export default BasicSlice