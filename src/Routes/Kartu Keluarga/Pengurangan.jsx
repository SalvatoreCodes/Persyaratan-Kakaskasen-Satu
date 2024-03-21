import React from "react";
import Back from "../../Components/Back";

function Pengurangan() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>
            Perubahan KK Karena <br />
            (Pengurangan)
          </h1>
          <div></div>
        </div>
        <ul>
          <li>Kartu Keluarga Lama</li>
          <li>Fotocopy Akta Kematian</li>
          <li>
            Surat Keterangan Pindah/Surat Keterangan Pindah Datang bagi penduduk
            yang pindah dalam Wilayah NKRI; atau Surat Keterangan Datang dari
            Luar Negeri yang diterbitkan oleh Instansi Pelaksana bagi WNI yang
            datang dari Luar Negeri karena Pindah.
          </li>
          <li>Foto Formulir F.1.15</li>
          <li>
            Fotocopy Akta Perkawinan bagi anggota keluarga yang akan pisah
            KK/membentuk KK Baru
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pengurangan;
