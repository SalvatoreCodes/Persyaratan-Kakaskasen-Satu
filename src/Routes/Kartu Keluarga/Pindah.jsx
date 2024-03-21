import React from "react";
import Back from "../../Components/Back";

function Pindah() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>
            Perubahan KK Karena <br />
            (Pindah Kel/Kec)
          </h1>
          <div></div>
        </div>
        <ul>
          <li>
            Surat Keterangan Pindah WNI (antar Kelurahan atau antar Kecamatan)
            dari Kelurahan
          </li>
          <li>Kartu Keluarga Asli</li>
          <li>Fotocopy Akta Perkawinan/Kematian/Perceraian</li>
        </ul>
      </div>
    </div>
  );
}

export default Pindah;
