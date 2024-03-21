import React from "react";
import Back from "../../Components/Back";

function WNI() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>KTP-EL Bagi Penduduk WNI</h1>
          <div></div>
        </div>
        <ul>
          <li>Kartu Keluarga & Telah Berusia 17 Tahun</li>
          <li>Akta Perkawinan bagi penduduk yang belum berusia 17 Tahun</li>
          <li>Akta Kelahiran</li>
          <li>
            Surat Keterangan Datang dari Luar Negeri bagi Penduduk WNI yang
            datang dari Luar Negeri karena pindah
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WNI;
