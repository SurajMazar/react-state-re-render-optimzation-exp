import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import ReduxStore from "./Features/redux/store";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={ReduxStore}>
            <App/>
        </Provider>
    </StrictMode>,
)
