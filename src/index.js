import React from "react";
import ReactDOM from "react-dom";

import { Form } from "./zad1/App";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h4>Zadanie 1</h4>
    <Form />
    {/* <h4>Zadanie 2</h4>
    <Form /> */}
  </React.StrictMode>,
  rootElement
);
