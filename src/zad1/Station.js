import React from "react";
import Field from "./Field";
import VarianceField from "./VarianceField";

export default class Station extends React.Component {
  constructor(props) {
    super(props);
  }

  //view
  render() {
    var s = this.props.station;
    return (
      <div className="details">
        <form>
          <ul>
            <Field label="Identyfikator" value={s.name} />
            <Field label="Data pomiaru" value={s.date} />
            <Field label="Oczekiwana" value={s.expected} />
            <Field
              label="Zmierzona"
              value={s.value}
              editable={true}
              onChange={(e) => {
                this.props.onChangedValue(this.props.station, e.target.value);
              }}
            />
            <VarianceField
              label="Różnica"
              expected={s.expected}
              actualValue={s.value}
            />
          </ul>
        </form>
      </div>
    );
  }
}
