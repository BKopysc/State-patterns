import React from "react";
import Field from "./Field";

export default class Station extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var p = this.props;
    var s = this.props.station;
    return (
      <div className="details">
        <form>
          <ul>
            <Field fieldRef={p.idFieldRef} label="Identyfikator" />
            <Field fieldRef={p.dateFieldRef} label="Data pomiaru" />
            <Field fieldRef={p.expectedFieldRef} label="Oczekiwana" />
            <Field
              label="Zmierzona"
              fieldRef={p.valueFieldRef}
              editable={true}
              onChange={(e) => {
                this.props.onChangedValue(this.props.station, e.target.value);
              }}
            />
            <Field
              fieldRef={p.varianceFieldRef}
              label="Różnica"
              editable={false}
            />
          </ul>
        </form>
      </div>
    );
  }
}
