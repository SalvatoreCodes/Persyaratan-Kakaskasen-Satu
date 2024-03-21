import React from "react";
import Back from "../Components/Back";

function AkteKematian() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>Akte Kematian</h1>
          <div></div>
        </div>
        <ul>
          <li>Surat Keterangan Kematian dari Kelurahan</li>
          <li>Formulir Pelaporan Kematian dari Kelurahan</li>
          <li>Surat Keterangan Kematian dari Rumah Sakit (Dokter/Paramedis)</li>
          <li>Surat Pernyataan apabila yang meninggal sudah 1 Tahun keatas</li>
          <li>Surat Pernyataan Kehilangan Akta Kematian</li>
          <li>
            SPTJM Kematian bagi yang tidak memiliki Surat Keterangan Kematian
            Dari Rumah Sakit
          </li>
          <li>
            Surat Keterangan Hilang dari Kepolisian bagi Akta Kematian yang
            hilang
          </li>
          <li>Kartu Keluarga Asli</li>
        </ul>
      </div>
    </div>
  );
}

export default AkteKematian;
