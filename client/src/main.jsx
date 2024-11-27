import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Error from "./pages/Error.jsx"; // Optional if you want an error route
import { CardProvider } from "./utils/CardContext";
import { AdminProvider } from "./utils/AdminContext"; // Import AdminProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <CardProvider>
    {/* Wrap with CardProvider */}
    <AdminProvider>
      {/* Wrap with AdminProvider */}
      <HashRouter>
        <Routes>
          {/* App layout */}
          <Route path="/" element={<App />}>
            {/* Home route */}
            <Route index element={<Home />} />
            {/* Vault route with parameter */}
            <Route path="vault/:id" element={<Details />} />
          </Route>
          {/* Optional fallback for undefined routes */}
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </AdminProvider>
  </CardProvider>
);
