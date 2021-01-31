import React from "react";
import { Link } from "react-router-dom";


const Cover = () => {
  return (
    <>
      <div className="padre">
        <div className="hijo">
          <h1>
            Esta página web está realizada para el uso y disfrute de la
            Grandiosa, Magnífica, Majuestuosa y Entrañable Abuelita Goyi.
          </h1>
        </div>
      </div>
      <Link to="/aplicacion" style={{ textDecoration: "none" }}>
        <div className='centrar'>
          <h2 className="empezar">EMPEZAR</h2>
        </div>
      </Link>
    </>
  );
};

export default Cover;
