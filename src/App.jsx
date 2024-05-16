import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "./images/logo/lambang kota tomohon.png";

function App() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [NIK, setNIK] = useState("");
  const navigate = useNavigate();

  const handleAlamatChange = (event) => {
    setAlamat(event.target.value);
  };

  const handleNIKChange = (event) => {
    setNIK(event.target.value);
  };

  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  const handleTujuanChange = (event) => {
    setTujuan(event.target.value);
  };

  const buttonHandler = async (e) => {
    e.preventDefault();

    if (!nama || !NIK || alamat === "-" || tujuan === "-") {
      alert("Tolong isi semua informasi.");
      return;
    } else if (NIK.length = 16) {
      alert("Tolong isi NIK yang benar.");
      return;
    }

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nama,
        NIK,
        alamat,
        tujuan,
        submittedDate: new Date().toJSON().slice(0, 10),
      }),
    };
    const res = await fetch(
      "https://pelayanan-kakaskasen-satu-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json",
      options
    );
    if (res) {
      navigate(`/${tujuan.toLowerCase().replace(/ /g, "_")}`);
    } else {
      navigate("/error-page");
    }
  };

  return (
    <div className="app">
      <div className="app--content">
        <div className="app--header">
          <h1>PELAYANAN UMUM</h1>
          <h3>Pengurusan Surat</h3>
        </div>
        <img src={Logo} alt="logo kota tomohon" />
        <h4>PEMERINTAHAN KOTA TOMOHON</h4>
        <h5>KELURAHAN KAKASKASEN SATU</h5>
        <form method="POST">
          <div>
            <label>
              Nama
              <input type="text" value={nama} onChange={handleNamaChange} />
            </label>
          </div>
          <div>
            <label>
              NIK
              <input type="number" value={NIK} onChange={handleNIKChange} />
            </label>
          </div>
          <div>
            <label>
              Alamat
              <select value={alamat} onChange={handleAlamatChange}>
                <option value="-">-</option>
                <option value="lingkungan 1">lingkungan 1</option>
                <option value="lingkungan 2">lingkungan 2</option>
                <option value="lingkungan 3">lingkungan 3</option>
                <option value="lingkungan 4">lingkungan 4</option>
                <option value="lingkungan 5">lingkungan 5</option>
                <option value="lingkungan 6">lingkungan 6</option>
                <option value="lingkungan 7">lingkungan 7</option>
                <option value="lingkungan 8">lingkungan 8</option>
                <option value="lingkungan 9">lingkungan 9</option>
                <option value="lingkungan 10">lingkungan 10</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Tujuan
              <select value={tujuan} onChange={handleTujuanChange}>
                <option value="-">-</option>
                <option value="Kartu Identitas Anak">
                  Kartu Identitas Anak
                </option>
                <option value="Kartu Keluarga">Kartu Keluarga</option>
                <option value="KTP_EL">KTP-EL</option>
                <option value="SKPWNI">SKPWNI</option>
                <option value="Akte_Kelahiran">Akte Kelahiran</option>
                <option value="Akte_Kematian">Akte Kematian</option>
                <option value="Akte_Perkawinan">Akte Perkawinan</option>
                <option value="Akte_Perceraian">Akte Perceraian</option>
                <option value="skck">SKCK</option>
                <option value="sku">SKU</option>
              </select>
            </label>
          </div>
          <button onClick={buttonHandler}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
