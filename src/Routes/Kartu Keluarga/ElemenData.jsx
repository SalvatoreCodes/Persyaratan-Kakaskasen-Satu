import React from "react";
import Back from "../../Components/Back";

function ElemenData() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>
            Perubahan KK Karena <br />
            (Elemen Data)
          </h1>
          <div></div>
        </div>
        <ul>
          <li>Kartu Keluarga Asli (Catatan Perubahan Yang Dimaksud</li>
          <li>
            Fotocopy Akta Kelahiran (bagi yang ada perubahan elemen data di KK)
          </li>
          <li>
            Fotocopy Akta Perkawinan, Kematian, Perceraian untuk Perubahan
            Status
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ElemenData;
