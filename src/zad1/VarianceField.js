import React, { useState } from "react";
import Field from "./Field";

export default function VarianceField(props) {
  const [color, setColor] = useState("normalValue");

  //controller:
  React.useEffect(() => {
    calculate();
  });

  var calculate = () => {
    var val = props.actualValue - props.expected;
    if (val >= 0) {
      setColor("normalValue");
    } else {
      setColor("criticalValue");
    }
  };

  //view
  return (
    <Field
      value={props.actualValue - props.expected || "0"}
      label={props.label}
      className={color}
      id={props.id}
      editable={props.editable}
    />
  );
}
