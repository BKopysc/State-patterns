import React, { useState } from "react";
import Field from "./Field";

export default function VarianceField(props) {
  // const [color, setColor] = useState("normalValue");

  // //controller:
  // React.useEffect(() => {
  //   calculate();
  // });

  // var calculate = () => {
  //   var val = props.actualValue - props.expected;
  //   if (val >= 0) {

  //     setColor("normalValue");
  //   } else {
  //     setColor("criticalValue");

  //   }
  // };

  return (
    <Field
      value={props.actualValue - props.expected || "0"}
      editable={props.editable}
      id={props.id}
      label={props.label}
      // className={color}
    />
  );
}
