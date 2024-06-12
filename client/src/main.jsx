import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Importing routing components from react-router-dom
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vault from "./pages/Vault.jsx";
import Error from "./pages/Error.jsx";
import DetailsPage from "./pages/Details.jsx";
import { CardProvider } from "./utils/CardContext";
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Main App component
    errorElement: <Error />, // Error page component
    children: [
      // Child routes
      {
        index: true, // Index route
        element: <Home />, // Login page component
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/vault",
        element: <Vault />,
      },
      {
        path: "/vault/:id",
        element: <DetailsPage />, // Add the Details route
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CardProvider>
    {" "}
    {/* Wrap with CardProvider */}
    <RouterProvider router={router} />
  </CardProvider>
);
