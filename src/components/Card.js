import React from "react";

function Card(props) {
  const { name, email, id } = props;

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}200×200`}
        // style={{ width: 200, height: 200 }}
        alt="robots"
      />
      <h2>{name}</h2>

      <p>{email}</p>
    </div>
  );
}

export default Card;
