import React from "react";
import Back from "../../Components/Back";

function HilangRusak() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>Akte Kelahiran Hilang/Rusak</h1>
          <div></div>
        </div>
        <ul>
          <li>Fotocopy Kartu Keluarga</li>
          <li>
            Surat Keterangan Hilang dari Kepolisian bagi Akta Kelahiran yang
            hilang
          </li>
          <li>Fotocopy Akta Kelahiran</li>
        </ul>
      </div>
    </div>
  );
}

export default HilangRusak;
