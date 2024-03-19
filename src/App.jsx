import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "./firebase";
import Logo from "./images/logo/lambang kota tomohon.png";

function App() {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tujuan, setTujuan] = useState("");
  const navigate = useNavigate();
  const db = firebase.firestore();

  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  const handleAlamatChange = (event) => {
    setAlamat(event.target.value);
  };

  const handleTujuanChange = (event) => {
    setTujuan(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      nama,
      alamat,
      tujuan,
      submittedDate: new Date().toISOString(),
    };

    try {
      await db.collection("submissions").add(data);
      console.log("Form submitted successfully!");
      navigate(`/${tujuan.toLowerCase().replace(/ /g, "_")}`);
    } catch (error) {
      console.error("Error submitting form:", error);
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
        <h3>PEMERINTAHAN KOTA TOMOHON</h3>
        <h5>KELURAHAN KAKASKASEN SATU</h5>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nama:
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
              Alamat:
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
              Tujuan:
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
