import React from "react";
import "./style.css";

function Card(props) {
    return (
<div className="card">
        <div className="card-body">
            <div><img alt="profile picture" src={props.image}></img> {props.first} {props.last} {props.phone} {props.email} Age: {props.age}</div>
        </div>
        </div>
    );
}

export default Card;