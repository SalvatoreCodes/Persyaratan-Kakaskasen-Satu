import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

function Container(props) {
  return (
    <div className="container">
      <div className="content--header">
        <h3>{data[props.id].title}</h3>
        <div></div>
      </div>
      {data[props.id].buttons.map((datas) => datas.map((x) => console.log(x)))}
    </div>
  );
}

export default Container;
