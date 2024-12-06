import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import NotFound from "../lib/NotFound";
import Home from "../pages/Home/Home/Home";

// Create router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
