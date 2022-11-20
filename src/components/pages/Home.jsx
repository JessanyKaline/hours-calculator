import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Hours from "../cards/Hours";
import "../style/global.css";
import "../cards/style.css";

export default function Home() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container  maxWidth="sm">
          <Box className="box">
            <tr className="description">
              <td>DIA</td>
              <td>ENTRADA</td>
              <td>SAÍDA</td>
              <td>TOTAL</td>
            </tr>
            <Hours />
            <Hours />
            <Hours />
            <Hours />
            <Hours />
            <Hours />
            <Hours />
            <Hours />
            <Hours />
            <Hours />
            
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}
