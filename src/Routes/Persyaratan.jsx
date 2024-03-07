import React from "react";
import Back from "../Components/Back";
import { useNavigate } from "react-router-dom";

function Persyaratan() {
  return (
    <div className="persyaratan">
      <Back />
      <div className="persyaratan--content">
        <p>persyaratan</p>
      </div>
    </div>
  );
}

export default Persyaratan;
