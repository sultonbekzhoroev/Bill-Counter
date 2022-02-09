import React, { Component } from "react";

export default class TipCalculator extends Component {
  constructor() {
    super();
    this.state = {
      billAmount: 0,
      service: 0,
      sumPeople: 0,
      tip: 0,
    };
  }
  onChangeBillAmount(e) {
    const formValid = isNaN(e.target.value) ? 0 : e.target.value;
    this.setState({ billAmount: formValid });
  }
  handleSelect(e) {
    this.setState({ service: e.target.value });
  }
  onChangeSumPeople(e) {
    this.setState({ sumPeople: e.target.value });
  }

  calculateTheTip(e) {
    e.preventDefault();
    let tip = (
      (this.state.billAmount * this.state.service) /
      this.state.sumPeople
    ).toFixed(2);
    this.setState({ tip });
  }
  render() {
    return (
      <>
        <form onSubmit={(e) => this.calculateTheTip(e)}>
          <div>
            <p>How much was your bill?</p>
            <input
              type="number"
              step="0.5"
              min="0"
              value={this.state.billAmount}
              onChange={(e) => this.onChangeBillAmount(e)}
            />
          </div>
          <div>
            <select
              value={this.state.service}
              onChange={(e) => this.handleSelect(e)}
            >
              <option default dispaled></option>
              <option value="0.3">30% Greate</option>
              <option value="0.2">20% good</option>
              <option value="0.15">15% ok</option>
              <option value="0.1">10% bad</option>
            </select>
          </div>
          <div>
            <p>How many people are sharing the bill?</p>
            <input
              type="number"
              step="1"
              min="1"
              value={this.state.sumPeople}
              onChange={(e) => this.onChangeSumPeople(e)}
            />
          </div>
          <button>Calculate</button>
        </form>
        <h1>The tip is {this.state.tip}</h1>
      </>
    );
  }
}
