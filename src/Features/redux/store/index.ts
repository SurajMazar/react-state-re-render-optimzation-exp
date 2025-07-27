import {configureStore} from "@reduxjs/toolkit";
import BasicSlice from "./basic.slice";

/**
 * REDUX STORE INSTANCE
 */
const ReduxStore = configureStore({
    reducer: {
        basic: BasicSlice.reducer,
    }
})

export type ReduxStoreState = ReturnType<typeof ReduxStore.getState>;
;

export default ReduxStore