import React from "react";
import Back from "../Components/Back";

function AktePerkawinan() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>Akte Perkawinan</h1>
          <div></div>
        </div>
        <ul>
          <li>
            Fotocopy surat keterangan telah terjadinya perkawinan dari pemuka
            agama atau penghayat kepercayaan terhadap Tuhan Yang Maha Esa
          </li>
          <li>Pas foto berwarna calon Suami-Istri</li>
          <li>KTP-EL calon Suami-Istri</li>
          <li>Kartu Keluarga calon Suami-Istri</li>
          <li>
            Bagi janda atau duda karena cerai mati melampirkan fotocopy akta
            kematian pasangannya
          </li>
          <li>
            Bagi janda atau duda karena cerai hidup melampirkan fotokopi akta
            perceraian
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AktePerkawinan;
