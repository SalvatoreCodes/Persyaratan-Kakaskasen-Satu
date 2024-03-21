import React from "react";
import Back from "../../Components/Back";

function Baru() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>Akte Kelahiran Baru</h1>
          <div></div>
        </div>
        <ul>
          <li>Foto Surat Kelahiran dari Dokter/Bidang/Penolong Kelahiran</li>
          <li>Foto Nama dan Identitas saksi kelahiran</li>
          <li>Foto KK Orangtua</li>
          <li>Foto KTP Orangtua</li>
          <li>Foto Akta Nikah/Akta Perkawinan</li>
          <li>Surat Keterangan Kelahiran dari Kelurahan</li>
          <li>
            SPTJM Kelahiran bagi yang tidak ada keterangan lahir dari Rumah
            Sakit/Puskesmas
          </li>
          <li>SPTJM Suami-Istri bagi yang tidak ada Akta Perkawinan</li>
        </ul>
      </div>
    </div>
  );
}

export default Baru;
