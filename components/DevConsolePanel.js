import React, { useState } from "react";
import styled from "styled-components";

// Definir el estilo para la consola
const ConsoleContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-family: monospace;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

// ... Resto del código aquí

export default DevConsolePanel;
