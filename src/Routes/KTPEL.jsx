import React from "react";
import Back from "../Components/Back";
import { Link } from "react-router-dom";

function KTPEL() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>Kartu Tanda Penduduk Elektronik</h1>
          <div></div>
        </div>
        <Link to="wni">
          <button>KTP-EL Bagi Penduduk WNI</button>
        </Link>
        <Link to="elemen_data">
          <button>KTP-EL Perubahan Elemen Data</button>
        </Link>
        <Link to="hilang_atau_rusak">
          <button>KTP-EL Hilang/Rusak</button>
        </Link>
      </div>
    </div>
  );
}

export default KTPEL;
