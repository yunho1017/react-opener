import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Demo } from "./pages";
import GettingStarted from "./pages/docs/GettingStarted.md";
import ReactOpener from "./pages/docs/ReactOpener/ReactOpener.md";
import ReactOpenerUseOpener from "./pages/docs/ReactOpener/UseOpener.md";
import ReactOpenerCustom from "./pages/docs/ReactOpener/Custom.md";
import ReactToastOpener from "./pages/docs/ReactToastOpener/ReactToastOpener.md";
import ReactToastOpenerUseToast from "./pages/docs/ReactToastOpener/UseToast.md";
import ReactToastOpenerCustom from "./pages/docs/ReactToastOpener/Custom.md";
import { DocsLayout } from "./pages/docs/Layout";
import { Markdown } from "./components/Markdown";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo />,
  },
  {
    path: "/docs",
    element: <DocsLayout />,
    children: [
      {
        path: "",
        element: <Markdown markdown={GettingStarted} />,
      },
      {
        path: "/docs/react-opener",
        element: <Markdown markdown={ReactOpener} />,
      },
      {
        path: "/docs/react-opener/use-opener",
        element: <Markdown markdown={ReactOpenerUseOpener} />,
      },
      {
        path: "/docs/react-opener/custom",
        element: <Markdown markdown={ReactOpenerCustom} />,
      },
      {
        path: "/docs/react-toast-opener",
        element: <Markdown markdown={ReactToastOpener} />,
      },
      {
        path: "/docs/react-toast-opener/use-toast",
        element: <Markdown markdown={ReactToastOpenerUseToast} />,
      },
      {
        path: "/docs/react-toast-opener/custom",
        element: <Markdown markdown={ReactToastOpenerCustom} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
