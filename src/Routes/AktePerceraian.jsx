import React from "react";
import Back from "../Components/Back";

function AktePerceraian() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>Akte Perceraian</h1>
          <div></div>
        </div>
        <ul>
          <li>Putusan Perceraian dari Pengadilan Asli</li>
          <li>Pengantar dari Pengadilan</li>
          <li>Akta Perkawinan Asli Suami-Istri</li>
          <li>KTP Suami-Istri</li>
          <li>Kartu Keluarga Suami-Istri</li>
          <li>Formulir Pencatatan Perceraian</li>
          <li>Formulir Permohonan Perceraian</li>
        </ul>
      </div>
    </div>
  );
}

export default AktePerceraian;
