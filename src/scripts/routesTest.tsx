import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Resume from "../components/routes/Resume";
import Home from "../components/routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "team",
        element: <Resume />,
      },
    ],
  },
]);
