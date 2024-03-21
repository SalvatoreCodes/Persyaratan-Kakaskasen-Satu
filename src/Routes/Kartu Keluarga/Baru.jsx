import React from "react";
import Back from "../../Components/Back";

function Baru() {
  return (
    <div>
      <div>
        <Back />
        <div className="container">
          <div className="content--header">
            <h1>Kartu Keluarga Baru</h1>
            <div></div>
          </div>
          <ul>
            <li>
              Formulir Permohonan Kartu Keluarga dari Kelurahan yang
              ditandatangani Lurah
            </li>
            <li>
              Formulir Isian Biodata (F1.01) dari Kelurahan yang ditandatangani
              Lurah
            </li>
            <li>Akta Perkawinan atau Akta Perceraian atau Akta Kematian</li>
            <li>Akta Kelahiran Anggota Keluarga</li>
            <li>
              Surat Keterangan Pindah/Surat Keterangan Pindah Datang Bagi
              Penduduk yang pindah dalam Wilayah NKRI; atau Surat Keterangan
              Datang Dari Luar Negeri yang diterbitkan oleh Instansi Pelaksana
              bagi WNI yang datang dari Luar Negeri karena pindah
            </li>
            <li>Mengisi Form. F-1.01</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Baru;
