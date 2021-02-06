import React, { useState } from "react";
import allCountries from "../countries.json";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 10% 0;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
`
// const Button1 = styled.input`
//   border: solid 1px white;
//   background-color: black;
//   padding: 10px 20px;
//   color: white;
//   font-size:20px;
//   text-align: center;   
//   text-transform:uppercase;
// `;

const Button1 = styled.input`
  background-color: white;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid black;
  transition: background-color 0.4s ease;
  margin-top: 2rem;
  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

const Flag = styled.p`
  font-size:150px;
  margin: 2% 0;
`;

const Ctry = styled.h1`
 margin:4% 0;
`;

const Input = styled.input`
  width: 150px;
  padding: 1em;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;
const Button2 = styled.input`
  width: 110px;
  padding: 1em;
  transition: background-color 0.4s ease;
  border: 1px solid #e1e1e1;
  &:hover {
    background-color: #c1ccca;
    color: black;
    cursor: pointer;
  }
`;

const Button3 = styled.input`
  width: 200px;
  padding: 1em;
  margin-top: 5em;
  transition: background-color 0.4s ease;
  border: 1px solid #e1e1e1;
  &:hover {
    background-color: #515453;
    color: white;
    cursor: pointer;
  }
`;




const RandomCountry = () => {
  const [countries] = useState(allCountries);
  const [randomC, setRamdonC] = useState(false);
  const [country, setCapital] = useState(false);
  const [verify, setVerify] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const getRandomCountry = (e) => {
    e.preventDefault();
    let ctries = [...allCountries];
    let randomC = ctries[Math.floor(Math.random() * ctries.length)];
    setRamdonC(randomC);
    setVerify(false);
    setSubmit(false);
    setShowSolution(false);
    
  };
  const confirm = (e) => {
    e.preventDefault();
    if (country && randomC.translations.spa.common) {
      if (
        country.toLowerCase() === randomC.translations.spa.common.toLowerCase()
      ) {
        setVerify(true);
      } else {
        setVerify(false);
      }
    }
    setSubmit(true);
  };

  const getSolution = (e) => {
    e.preventDefault();
    if (showSolution) {
      setShowSolution(false);
    } else {
      setShowSolution(true);
    }
  };
  
  return (
    <Container>
      {countries && (
        <>
          <form onSubmit={getRandomCountry}>
            <Button1 type="submit" value="Nueva Bandera" />
          </form>
          {randomC && (
            <>
              <Flag>{randomC.flag}</Flag>
              <form onSubmit={confirm}>
                <Input
                  type="text"
                  placeholder="País"
                  onChange={(e) => setCapital(e.target.value)}
                ></Input>
                <Button2 type="submit" value="Probar suerte" />
              </form>
              {submit && (
                <>
                  {verify ? (
                    <p>Respuesta correcta, ¡Qué sabia eres Goyi!</p>
                  ) : (
                    <p>
                      Incorrecto, prueba de nuevo abuela ¡Venga que tu puedes!
                    </p>
                  )}
                </>
              )}
              <form onSubmit={getSolution}>
                <Button3
                  type="submit"
                  value={showSolution ? "Ocultar solución" : "Ver solución"}
                />
              </form>
              {showSolution && <Ctry>{randomC.translations.spa.common}</Ctry>}
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default RandomCountry;
