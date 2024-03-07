import React from "react";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();
  return (
    <div className="back">
      <button onClick={() => navigate(-1)}>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/ffffff/back.png"
          alt="back"
        />
        Kembali
      </button>
    </div>
  );
}

export default Back;
