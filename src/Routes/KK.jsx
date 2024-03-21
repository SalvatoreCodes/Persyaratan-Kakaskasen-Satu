import React from "react";
import Back from "../Components/Back";
import { Link } from "react-router-dom";

function KK() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>KARTU KELUARGA</h1>
          <div></div>
        </div>
        <Link to="baru">
          <button>Kartu Keluarga Baru</button>
        </Link>
        <Link to="kelahiran">
          <button>Perubahan KK Karena (Kelahiran)</button>
        </Link>
        <Link to="menumpang">
          <button>Perubahan KK Karena (Menumpang)</button>
        </Link>
        <Link to="pengurangan">
          <button>Perubahan KK Karena (Pengurangan)</button>
        </Link>
        <Link to="hilang_atau_rusak">
          <button>Perubahan KK Karena hilang/rusak</button>
        </Link>
        <Link to="elemen_data">
          <button>Perubahan KK Karena elemen data</button>
        </Link>
        <Link to="pindah">
          <button>Perubahan KK Karena Pindah (Kel/Kec)</button>
        </Link>
      </div>
    </div>
  );
}

export default KK;
