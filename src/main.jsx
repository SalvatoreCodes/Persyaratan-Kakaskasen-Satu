import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";
import ErrorPage from "./error-page.jsx";
import Persyaratan from "./Routes/Persyaratan.jsx";
import KIA from "./Routes/KIA.jsx";

import { KKPersyaratan } from "./Routes/KK/Persyaratan.jsx";
import { KKBaru } from "./Routes/KK/Baru.jsx";
import { KKData } from "./Routes/KK/Data.jsx";
import { KKHilang } from "./Routes/KK/Hilang.jsx";
import { KKKelahiran } from "./Routes/KK/Kelahiran.jsx";
import { KKMenumpang } from "./Routes/KK/Menumpang.jsx";
import { KKPengurangan } from "./Routes/KK/Pengurangan.jsx";
import { KKPindah } from "./Routes/KK/Pindah.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
  },

  {
    path: "persyaratan",
    errorElement: <ErrorPage />,
    element: <Persyaratan />,
  },

  {
    path: "persyaratan/kartu-identitas-anak",
    errorElement: <ErrorPage />,
    element: <KIA />,
  },

  {
    path: "persyaratan/kartu-keluarga",
    errorElement: <ErrorPage />,
    element: <KKPersyaratan />,
  },
  {
    path: "persyaratan/kartu-keluarga/baru",
    errorElement: <ErrorPage />,
    element: <KKBaru />,
  },
  {
    path: "persyaratan/kartu-keluarga/kelahiran",
    errorElement: <ErrorPage />,
    element: <KKKelahiran />,
  },
  {
    path: "persyaratan/kartu-keluarga/menumpang",
    errorElement: <ErrorPage />,
    element: <KKMenumpang />,
  },
  {
    path: "persyaratan/kartu-keluarga/pengurangan",
    errorElement: <ErrorPage />,
    element: <KKPengurangan />,
  },
  {
    path: "persyaratan/kartu-keluarga/hilang-atau-rusak",
    errorElement: <ErrorPage />,
    element: <KKHilang />,
  },
  {
    path: "persyaratan/kartu-keluarga/elemen-data",
    errorElement: <ErrorPage />,
    element: <KKData />,
  },
  {
    path: "persyaratan/kartu-keluarga/pindah",
    errorElement: <ErrorPage />,
    element: <KKPindah />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
