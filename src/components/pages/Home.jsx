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
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
            <tr>
              <td>Dia</td>
              <td>Horário Entrada</td>
              <td>Horário Saída</td>
              <td>Horas trabalhadas</td>
            </tr>
            <Hours />
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}
