import React, { useState } from "react";
import "./styles.css";
import { DataSet } from "./Model/data.js";
import Station from "./Station";

export class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
    this.idFieldRef = React.createRef();
    this.dateFieldRef = React.createRef();
    this.expectedFieldRef = React.createRef();
    this.valueFieldRef = React.createRef();
    this.varianceFieldRef = React.createRef();
  }

  selected = (e) => {
    var selected = undefined;
    var k = e.target.value;
    for (var idx in DataSet.stations) {
      var s = DataSet.stations[idx];
      if (s.id === parseInt(k)) {
        selected = s;
        break;
      }
    }
    this.setState({
      selected: selected
    });

    //metoda forceupdate
    this.forceUpdate(() => {
      let s = this.state.selected;
      this.idFieldRef.current.value = s.name;
      this.dateFieldRef.current.value = s.date;
      this.expectedFieldRef.current.value = s.expected;
      this.valueFieldRef.current.value = s.value;
      this.varianceFieldRef.current.value = this.calculateVariance(
        s.expected,
        s.value
      );
    });
  };

  onChangedValue = (station, v) => {
    if (this.state.selected && this.state.selected.id === station.id) {
      this.setState((state) => {
        if (!v || isNaN(v)) {
          state.selected.value = 0;
        } else {
          state.selected.value = parseInt(v);
        }
        return state;
      });
    }

    this.forceUpdate(() => {
      let expected = this.expectedFieldRef.current.value;
      let value = this.valueFieldRef.current.value;
      this.varianceFieldRef.current.value = this.calculateVariance(
        expected,
        value
      );
    });
  };

  //zmiana koloru i obliczenie różnicy
  calculateVariance(expected, value) {
    let variance = value - expected;
    if (variance < 0) {
      this.varianceFieldRef.current.className = "criticalValue";
    } else if (variance >= 0) {
      this.varianceFieldRef.current.className = "normalValue";
    }
    return variance;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Pokaz kontroli stanu</h1>
          <div className="row">
            <div className="col-4">
              <select
                className="stations"
                name="stations"
                onChange={this.selected}
                multiple
              >
                {DataSet.stations.map((s) => {
                  return (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-4">
              {this.state.selected ? (
                <Station
                  station={this.state.selected}
                  onChangedValue={this.onChangedValue}
                  idFieldRef={this.idFieldRef}
                  dateFieldRef={this.dateFieldRef}
                  expectedFieldRef={this.expectedFieldRef}
                  valueFieldRef={this.valueFieldRef}
                  varianceFieldRef={this.varianceFieldRef}
                />
              ) : (
                <div>Wybierz stację...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
