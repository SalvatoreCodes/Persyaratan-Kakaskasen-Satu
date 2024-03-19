import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";
import ErrorPage from "./error-page.jsx";
import KIA from "./Routes/KIA.jsx";
import KK from "./Routes/KK.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
  },

  {
    path: "/kartu_identitas_anak",
    element: <KIA />,
  },

  {
    path: "/kartu_keluarga",
    element: <KK />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
