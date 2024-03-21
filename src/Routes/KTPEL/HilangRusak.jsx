import React from "react";
import Back from "../../Components/Back";

function HilangRusakKTPEL() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>KTP-EL Hilang/Rusak</h1>
          <div></div>
        </div>
        <ul>
          <li>KTP Elektronik Rusak</li>
          <li>Surat Keterangan Hilang dari Kepolisian</li>
          <li>Fotocopy Kartu Keluarga</li>
        </ul>
      </div>
    </div>
  );
}

export default HilangRusakKTPEL;
