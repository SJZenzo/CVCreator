import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CreatedCV from "./components/CreatedCV";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";
import EndResult from "./components/EndResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/example",
        element: <CreatedCV />,
      },
      {
        index: true,
        element: <FirstForm />,
      },
      {
        path: "second",
        element: <SecondForm />,
      },
      {
        path: "third",
        element: <ThirdForm />,
      },
      {
        path: "result",
        element: <EndResult />,
      },
    ],
  },
]);

export default router;
