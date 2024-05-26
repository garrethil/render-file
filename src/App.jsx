import { Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            {/* The Outlet component will be replaced by the proper page based on the URL */}
            <Outlet />
          </div>
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
