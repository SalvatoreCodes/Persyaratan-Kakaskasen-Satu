import React from "react";
import Back from "../../Components/Back";

function Menumpang() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>
            Perubahan KK Karena <br />
            (Menumpang)
          </h1>
          <div></div>
        </div>
        <ul>
          <li>Kartu Keluarga Lama</li>
          <li>Kartu Keluarga yang akan ditumpangi</li>
          <li>
            Surat Keterangan Pindah/Surat Keterangan Pindah Datang bagi penduduk
            yang pindah dalam Wilayah NKRI; atau Surat Keterangan Datang dari
            Luar Negeri yang diterbitkan oleh Instansi Pelaksana bagi WNI yang
            datang dari Luar Negeri karena Pindah.
          </li>
          <li>Foto Formulir F.1.15</li>
          <li>Fotocopy Akte Lahir</li>
          <li>Fotocopy Akte Kawin</li>
        </ul>
      </div>
    </div>
  );
}

export default Menumpang;
