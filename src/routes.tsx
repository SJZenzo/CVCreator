import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatedCV from "./components/CreatedCV";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/example",
    element: <CreatedCV />,
  },
]);

export default router;
