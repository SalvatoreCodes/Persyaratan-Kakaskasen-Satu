import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "./images/logo/lambang kota tomohon.png";

function App() {
  return (
    <div className="app">
      <div className="app--content">
        <img src={Logo} alt="logo kota tomohon" />
        <h3>PEMERINTAHAN KOTA TOMOHON</h3>
        <h5>KELURAHAN KAKASKASEN SATU</h5>
        <button>
          <Link to={"persyaratan"}>Persyaratan</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
