import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './pages/Home'
import Consultas from "./pages/Consultas";
import HorariosAtencion from "./pages/HorariosAtancion";

import Galeria from "./pages/Galeria";
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
                path: "Horarios",
                element: <HorariosAtencion />
      },
       {
                path: "Galeria",
                element: <Galeria />
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