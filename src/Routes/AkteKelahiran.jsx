import React from "react";
import Back from "../Components/Back";
import { Link } from "react-router-dom";

function AkteKelahiran() {
  return (
    <div>
      <Back />
      <div className="container">
        <div className="content--header">
          <h1>Akte Kelahiran</h1>
          <div></div>
        </div>
        <Link to="baru">
          <button>Akte Kelahiran Baru</button>
        </Link>
        <Link to="60_hari_keatas">
          <button>Akte Kelahiran 60 Hari Keatas</button>
        </Link>
        <Link to="1-16_tahun">
          <button>Akte Kelahiran 1-16 Tahun</button>
        </Link>
        <Link to="17_tahun_keatas">
          <button>Akte Kelahiran 17 Tahun Keatas</button>
        </Link>
        <Link to="hilang_atau_rusak">
          <button>Akte Kelahiran Hilang/Rusak</button>
        </Link>
      </div>
    </div>
  );
}

export default AkteKelahiran;
