import React from "react";

function Card(props) {
  return (
    <div class="card">
      <div class="card-details">
        <p class="text-title">{props.title}</p>
        <p class="text-body">{props.body}</p>
      </div>
      <button class="card-button">{props.button}</button>
    </div>
  );
}

export default Card;
