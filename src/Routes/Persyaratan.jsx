import React from "react";
import Back from "../Components/Back";
import { Link, Outlet } from "react-router-dom";

function Persyaratan() {
  return (
    <div className="persyaratan">
      <Back />
      <div className="persyaratan--content container">
        <h3>Persyaratan Pengurusan Berkas</h3>
        <h3>
          <Link to={"kartu-identitas-anak"}>Kartu Identitas Anak</Link>
        </h3>
        <h3>
          <Link to={"kartu-keluarga"}>Kartu Keluarga</Link>
        </h3>
        <h3>KTP-EL</h3>
        <h3>Surat Keterangan Pindah WNI</h3>
        <h3>Akte Kelahiran</h3>
        <h3>Akte Kematian</h3>
        <h3>Akte Perkawinan</h3>
        <h3>Akte Perceraian</h3>
      </div>
    </div>
  );
}

export default Persyaratan;
