import React, { useState } from "react";

export default function Field(props) {
  // useState()
  // const [value, setValue] = useState(props.value);

  var onLocalChange = () => {};

  var readOnly = "editable" in props ? !props.editable : true;

  return (
    <li>
      <span>{props.label}:</span>
      <span>
        <input
          type="text"
          readOnly={readOnly}
          value={props.value}
          onChange={props.onChange}
          id={props.id}
          className={props.className || "normalValue"}
        />
      </span>
    </li>
  );
}
