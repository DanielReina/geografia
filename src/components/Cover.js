import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const DivFather = styled.div`
  padding: 5% 0;
`
const DivSon = styled.div`
  padding: 10% 0;
  text-align: center;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;
const Start = styled.h2`
  border: solid 1px;
  background-color: black;
  padding: 10px 20px;
  color: white;
  text-align: center;
  display: inline-block;
`;
const H1 = styled.h1`
margin: 0 10%auto;
`

const Cover = () => {
  return (
    <>
      <DivFather>
        <DivSon>
          <H1>
            Esta página web está realizada para el uso y disfrute de la
            Grandiosa, Magnífica, Majuestuosa y Entrañable Abuelita Goyi.
          </H1>
        </DivSon>
      </DivFather>
      <Link to="/aplicacion" style={{ textDecoration: "none" }}>
        <Center>
          <Start>EMPEZAR</Start>
        </Center>
      </Link>
    </>
  );
};

export default Cover;
