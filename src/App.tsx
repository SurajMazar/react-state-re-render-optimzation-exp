import {RouterProvider} from "react-router";
import ApplicationRoutes from "./routes";
import './App.css'

function App() {
    return <RouterProvider router={ApplicationRoutes}/>
}

export default App
