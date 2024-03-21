import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css";
import ErrorPage from "./error-page.jsx";
import KIA from "./Routes/KIA.jsx";
import KK from "./Routes/KK.jsx";
import Baru from "./Routes/Kartu Keluarga/Baru.jsx";
import Kelahiran from "./Routes/Kartu Keluarga/Kelahiran.jsx";
import Menumpang from "./Routes/Kartu Keluarga/Menumpang.jsx";
import Pengurangan from "./Routes/Kartu Keluarga/Pengurangan.jsx";
import HilangRusakKK from "./Routes/Kartu Keluarga/HilangRusak.jsx";
import ElemenDataKK from "./Routes/Kartu Keluarga/ElemenData.jsx";
import Pindah from "./Routes/Kartu Keluarga/Pindah.jsx";
import KTPEL from "./Routes/KTPEL.jsx";
import WNI from "./Routes/KTPEL/WNI.jsx";
import ElemenDataKTPEL from "./Routes/KTPEL/ElemenData.jsx";
import HilangRusakKTPEL from "./Routes/KTPEL/HilangRusak.jsx";
import SKPWNI from "./Routes/SKPWNI.jsx";
import AkteKelahiran from "./Routes/AkteKelahiran.jsx";
import BaruAK from "./Routes/Akte Kelahiran/Baru.jsx";
import EnamPuluh from "./Routes/Akte Kelahiran/EnamPuluh.jsx";
import EnamBelas from "./Routes/Akte Kelahiran/EnamBelas.jsx";
import TujuhBelas from "./Routes/Akte Kelahiran/TujuhBelas.jsx";
import HilangRusakAK from "./Routes/Akte Kelahiran/HilangRusak.jsx";
import AkteKematian from "./Routes/AkteKematian.jsx";
import AktePerkawinan from "./Routes/AktePerkawinan.jsx";
import AktePerceraian from "./Routes/AktePerceraian.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
  },

  {
    path: "/error-page",
    element: <ErrorPage />,
  },

  {
    path: "/kartu_identitas_anak",
    element: <KIA />,
  },

  {
    path: "/kartu_keluarga",
    element: <KK />,
  },

  {
    path: "/kartu_keluarga/baru",
    element: <Baru />,
  },

  {
    path: "/kartu_keluarga/kelahiran",
    element: <Kelahiran />,
  },

  {
    path: "/kartu_keluarga/menumpang",
    element: <Menumpang />,
  },

  {
    path: "/kartu_keluarga/pengurangan",
    element: <Pengurangan />,
  },

  {
    path: "/kartu_keluarga/hilang_atau_rusak",
    element: <HilangRusakKK />,
  },

  {
    path: "/kartu_keluarga/elemen_data",
    element: <ElemenDataKK />,
  },

  {
    path: "/kartu_keluarga/pindah",
    element: <Pindah />,
  },

  {
    path: "/ktp_el",
    element: <KTPEL />,
  },

  {
    path: "/ktp_el/wni",
    element: <WNI />,
  },

  {
    path: "/ktp_el/elemen_data",
    element: <ElemenDataKTPEL />,
  },

  {
    path: "/ktp_el/hilang_atau_rusak",
    element: <HilangRusakKTPEL />,
  },

  {
    path: "/skpwni",
    element: <SKPWNI />,
  },

  {
    path: "/akte_kelahiran",
    element: <AkteKelahiran />,
  },

  {
    path: "/akte_kelahiran/baru",
    element: <BaruAK />,
  },

  {
    path: "/akte_kelahiran/60_hari_keatas",
    element: <EnamPuluh />,
  },

  {
    path: "/akte_kelahiran/1-16_tahun",
    element: <EnamBelas />,
  },

  {
    path: "/akte_kelahiran/17_tahun_keatas",
    element: <TujuhBelas />,
  },

  {
    path: "/akte_kelahiran/hilang_atau_rusak",
    element: <HilangRusakAK />,
  },

  {
    path: "/akte_kematian",
    element: <AkteKematian />,
  },

  {
    path: "/akte_perkawinan",
    element: <AktePerkawinan />,
  },

  {
    path: "/akte_perceraian",
    element: <AktePerceraian />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
