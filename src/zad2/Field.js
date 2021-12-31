import React from "react";

export default function Field(props) {
  var readOnly = "editable" in props ? !props.editable : true;

  return (
    <li>
      <span>{props.label}:</span>
      <span>
        <input
          type="text"
          ref={props.fieldRef}
          readOnly={readOnly}
          onChange={props.onChange}
          id={props.id}
          className={props.className || "normalValue"}
        />
      </span>
    </li>
  );
}
