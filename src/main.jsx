import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Persyaratan from "./Routes/Persyaratan.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  {
    path: "persyaratan",
    element: <Persyaratan />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
