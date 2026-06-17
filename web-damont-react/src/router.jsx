import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './pages/Home'
import Consultas from "./pages/Consultas";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "consultas",
                element: <Consultas />
      },
            {
                path: "*",
                element: (
                    <div>
                        <h1> Erro 404</h1>
                        <p>Pagina no encontrada</p>
                    </div>
                )
            }
        ]
    }
])