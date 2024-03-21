import React from "react";
import Back from "../Components/Back";

function KIA() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>KARTU IDENTITAS ANAK</h1>
          <div></div>
        </div>
        <ul>
          <li>Fotocopy KK</li>
          <li>Fotocopy Akta Kelahiran</li>
          <li>Pas Foto, Bagi anak usia 5-17 Tahun</li>
        </ul>
      </div>
    </div>
  );
}

export default KIA;
