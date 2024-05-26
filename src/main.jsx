import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Importing routing components from react-router-dom
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} /> // Providing the router to the RouterProvider
);