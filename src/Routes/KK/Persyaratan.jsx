import React from "react";
import Back from "../../Components/Back";
import { Link } from "react-router-dom";

export function KKPersyaratan() {
  return (
    <div className="kartu--keluarga--persyaratan">
      <Back />
      <div className="kartu--keluarga--persyaratan--content container">
        <h3>Kartu Keluarga</h3>
        <h3>
          <Link to="baru">Kartu Keluarga Baru</Link>
        </h3>
        <h3>
          <Link to="kelahiran">Perubahan Karena Kelahiran</Link>
        </h3>
        <h3>
          <Link to="menumpang">Perubahan Karena Menumpang</Link>
        </h3>
        <h3>
          <Link to="pengurangan">Perubahan Karena Pengurangan</Link>
        </h3>
        <h3>
          <Link to="hilang-atau-rusak">Perubahan Karena Hilang atau Rusak</Link>
        </h3>
        <h3>
          <Link to="elemen-data">Perubahan Karena Elemen Data</Link>
        </h3>
        <h3>
          <Link to="pindah">Perubahan Karena Pindah Kel/Kec</Link>
        </h3>
      </div>
    </div>
  );
}
