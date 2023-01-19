import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-1">
            <span className={this.getClassesNames()}>
              {this.formateCount()}
            </span>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={this.props.onIncrement}
            >
              +
            </button>
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={this.props.onDecrement}
              disabled={this.props.value === 0 ? true : false}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={this.props.onDelete}
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    );
  }
  getClassesNames() {
    const { value } = this.props;
    return value === 0
      ? "badge bg-warning m-2 text-dark"
      : "badge bg-primary m-2";
  }
  formateCount() {
    const { value } = this.props;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;

<div class="container">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>;
