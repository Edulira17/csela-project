import { createBrowserRouter } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Layout from "./shared/components/Layout/Layout";
import History from "./pages/History/History";
import Formulario from "./pages/Form/Formulario";
import Workshops from "./pages/Workshops/Workshops";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/history",
        element: <History />
      },
      {
        path: "/workshops",
        element: <Workshops />
      },
      {
        path: "/forms",
        element: <Formulario />,
      }
    ],
  },
]);


export default router