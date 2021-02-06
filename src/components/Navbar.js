import React from 'react';
import { Navbar } from "react-bootstrap";

const Navbar1 = () => {
    return (
      <Navbar bg="light" expand="xxl">
        <Navbar.Brand
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
            font: "Arial",
            fontWeight: "800",
          }}
        >
          PORTADA
        </Navbar.Brand>
     
      </Navbar>
    );
}
 
export default Navbar1;