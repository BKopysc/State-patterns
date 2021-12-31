import React from "react";
import ReactDOM from "react-dom";

import { Form } from "./zad1/Form";
import { Form2 } from "./zad2/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <h4>Zadanie 1</h4>
    <Form /> */}
    <h4>Zad.2: Kontroler Zarządzający</h4>
    <Form2 />
  </React.StrictMode>,
  rootElement
);
