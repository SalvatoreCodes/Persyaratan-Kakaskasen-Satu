import React from "react";
import Back from "../../Components/Back";

function HilangRusak() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>
            Perubahan KK Karena <br />
            (Hilang Atau Rusak)
          </h1>
          <div></div>
        </div>
        <ul>
          <li>Surat Keterangan hilang dari kepolisian</li>
          <li>Kartu Keluarga yang rusak</li>
        </ul>
      </div>
    </div>
  );
}

export default HilangRusak;
