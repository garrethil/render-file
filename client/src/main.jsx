import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Importing routing components from react-router-dom
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home.jsx";
import About from "./components/About.jsx";
import Vault from "./components/Vault.jsx";
import Error from "./pages/Error.jsx";
import DetailsPage from "./pages/Details.jsx";
import { CardProvider } from "./utils/CardContext";
import { AdminProvider } from "./utils/AdminContext"; // Import AdminProvider

const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Main App component
    errorElement: <Error />, // Error page component
    children: [
      // Child routes
      {
        index: true, // Index route
        element: <Home />, // Home page component
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
        element: <DetailsPage />, // Details route
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CardProvider>
    {" "}
    {/* Wrap with CardProvider */}
    <AdminProvider>
      {" "}
      {/* Wrap with AdminProvider */}
      <RouterProvider router={router} />
    </AdminProvider>
  </CardProvider>
);
