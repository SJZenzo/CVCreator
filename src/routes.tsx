import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatedCV from "./components/CreatedCV";
import Form from "./components/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Form />,
      },
    ],
  },
  {
    path: "/example",
    element: <CreatedCV />,
  },
]);

export default router;
