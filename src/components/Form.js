import React, { useState } from "react";
import allCountries from "../countries.json";

const RandomCountry = () => {
  const [countries, setCountries] = useState(allCountries);
  const [randomC, setRamdonC] = useState(false);
  const [capital, setCapital] = useState(false)
  const [verify, setVerify] = useState(false)
  const [submit, setSubmit] = useState(false);

  function eliminarDiacriticosEs(texto) {
    return texto
      .normalize("NFD")
      .replace(
        /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
        "$1"
      )
      .normalize();
  }

  const getRandomCountry = (e) => {
    e.preventDefault();
    let ctries = [...allCountries];
    let randomC = ctries[Math.floor(Math.random() * ctries.length)];
    setRamdonC(randomC);
    setVerify(false);
     console.log(randomC.capitalEsp);
  };
  const confirm = (e) => {
    e.preventDefault();
    if (capital && randomC.capitalEsp) {
      if (capital.toLowerCase() === randomC.capitalEsp[0].toLowerCase()) {
        setVerify(true);
      } else {
        setVerify(false);
      }
    }
    setSubmit(true);
   
  };

  return (
    <div>
      {countries && (
        <>
          <form onSubmit={getRandomCountry}>
            <input
              type="submit"
              className="button-primary u-full-width"
              value="Nuevo país aleatorio"
            />
          </form>
          {randomC &&
            <><h1>{randomC.translations.spa.common}</h1>
          <form onSubmit={confirm}>
            <input
              type="text"
              placeholder="Capital"
              onChange={(e) => setCapital(e.target.value)}
            ></input>
            <input
              type="submit"
              className="button-primary u-full-width"
              value="Probar suerte"
            />
          </form>
          {submit && (
            <>
              {verify ? (
                <p>Respuesta correcta, que sabia eres Goyi!</p>
              ) : (
                <p>Incorrecto, prueba de nuevo abuela ¡Venga que tu puedes!</p>
              )}
            </>
          )}
          </>}
        </>
      )}
    </div>
  );
};

export default RandomCountry;
