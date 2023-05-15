import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FirstForm from "./components/form/FirstForm";
import SecondForm from "./components/form/SecondForm";
import ThirdForm from "./components/form/ThirdForm";
import EndResult from "./components/navigation/EndResult";
import CVExample from "./components/navigation/CVExample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/example",
        element: <CVExample />,
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
