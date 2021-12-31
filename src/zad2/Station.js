import React from "react";
import Field from "./Field";
import VarianceField from "./VarianceField";

export default class Station extends React.Component {
  constructor(props) {
    super(props);
    this.inputFieldRef = React.createRef();
    //this.idFieldRef = React.createRef();
    //this.dateFieldRef = React.createRef();
    //this.expectedFieldRef = React.createRef();
    this.valueFieldRef = React.createRef();
    this.varianceFieldRef = React.createRef();
  }

  // loadData = () => {
  //   var s = this.props.station;
  //   this.idFieldRef.current.value = s.date;
  //   //this.inputFieldRef.current
  // };

  // componentDidUpdate() {
  //   this.loadData();
  // }

  //inputRef = React.createRef();

  render() {
    var p = this.props;
    var s = this.props.station;
    return (
      <div className="details">
        <form>
          <ul>
            <Field
              fieldRef={p.idFieldRef}
              label="Identyfikator"
              value={s.name}
            />
            <Field
              fieldRef={p.dateFieldRef}
              label="Data pomiaru"
              value={s.date}
            />
            <Field
              fieldRef={p.expectedFieldRef}
              label="Oczekiwana"
              value={s.expected}
            />
            <Field
              label="Zmierzona"
              value={s.value}
              editable={true}
              onChange={(e) => {
                this.props.onChangedValue(this.props.station, e.target.value);
              }}
            />
            <Field
              label="Różnica"
              editable={false}
              value="404"
              //value={s.value - s.expected || "-"} /* Wartość domyślna: "-" */
            />
          </ul>
        </form>
      </div>
    );
  }
}
