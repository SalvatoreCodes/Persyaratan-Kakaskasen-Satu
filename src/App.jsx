// App.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firestore from "./firebase"; // Import Firestore instance

import Logo from "./images/logo/lambang kota tomohon.png";

function App() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tujuan, setTujuan] = useState("");
  const navigate = useNavigate();

  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  const handleAlamatChange = (event) => {
    setAlamat(event.target.value);
  };

  const handleTujuanChange = (event) => {
    setTujuan(event.target.value);
  };

  const buttonHandler = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nama,
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
          <h3>Proses Pengurusan Surat-menyurat</h3>
        </div>
        <img src={Logo} alt="logo kota tomohon" />
        <h4>PEMERINTAHAN KOTA TOMOHON</h4>
        <h5>KELURAHAN KAKASKASEN SATU</h5>
        <form method="POST">
          <div>
            <label>
              Nama
              <input
                required
                type="text"
                value={nama}
                onChange={handleNamaChange}
              />
            </label>
          </div>
          <div>
            <label>
              Alamat
              <input
                required
                type="text"
                value={alamat}
                onChange={handleAlamatChange}
              />
            </label>
          </div>
          <div>
            <label>
              Tujuan
              <select value={tujuan} onChange={handleTujuanChange}>
                <option value="">-</option>
                <option value="Kartu Identitas Anak">
                  Kartu Identitas Anak
                </option>
                <option value="Kartu Keluarga">Kartu Keluarga</option>
                <option value="KTP-EL">KTP-EL</option>
                <option value="SKPWNI">SKPWNI</option>
                <option value="Akte Kelahiran">Akte Kelahiran</option>
                <option value="Akte Kematian">Akte Kematian</option>
                <option value="Akte Perkawinan">Akte Perkawinan</option>
                <option value="Akte Perceraian">Akte Perceraian</option>
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
