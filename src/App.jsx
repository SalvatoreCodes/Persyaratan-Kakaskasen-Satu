import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo/lambang kota tomohon.png";

function App() {
  return (
    <div className="app">
      <div className="app--content">
        <img src={Logo} alt="logo kota tomohon" />
        <button>
          <Link to={"/persyaratan"}>Persyaratan</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
