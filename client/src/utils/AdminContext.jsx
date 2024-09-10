import { useState, createContext, useContext } from "react";

// Create a context for the admin state
const AdminContext = createContext();

let pswd;

pswd = import.meta.env.VITE_APP_AUTHKEY;

// Create a provider
export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const enableAdminMode = () => {
    const password = prompt("Enter the admin password:");
    if (password === pswd) {
      setIsAdmin(true);
      alert("Admin mode enabled!");
    } else {
      alert("Incorrect password.");
    }
  };

  return (
    <AdminContext.Provider value={{ isAdmin, enableAdminMode }}>
      {children}
    </AdminContext.Provider>
  );
};

// Create a custom hook to use the admin context
export const useAdmin = () => useContext(AdminContext);
