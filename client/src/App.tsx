import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import HomePage from './pages/homepage';
import NotFoundPage from './pages/not-found';
import ConfigPage from "./pages/config";
import LoginPage from "./pages/login";
import InvoicePage from "./pages/invoice";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/config/:domain",
      element: <ConfigPage/>
    },
    {
      path: "/invoice",
      element: <InvoicePage/>
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (<RouterProvider router={router} />)
}

export default App
