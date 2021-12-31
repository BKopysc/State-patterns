import React from "react";
import ReactDOM from "react-dom";

import { Form } from "./zad1/Form";
import { Form2 } from "./zad2/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h4 style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      Zadanie 1: MVC z kontrolerem na poziomie kontrolek
    </h4>
    <Form />
    <h4 style={{ paddingTop: "40px", paddingBottom: "20px" }}>
      Zad.2: Kontroler Zarządzający
    </h4>
    <Form2 />
  </React.StrictMode>,
  rootElement
);
