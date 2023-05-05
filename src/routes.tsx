import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatedCV from "./components/CreatedCV";
import FormsHolder from "./components/FormsHolder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <FormsHolder />,
      },
    ],
  },
  {
    path: "/example",
    element: <CreatedCV />,
  },
]);

export default router;
