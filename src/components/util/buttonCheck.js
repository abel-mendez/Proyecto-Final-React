import React from "react";

const ButtonCheck = ({ id, name }) => {
  return (
    <>
      <input type="radio" className="btn-check" name="btnradio" id={id} />
      <label className="btn btn-outline-success" htmlFor={id}>
        {name}
      </label>
    </>
  );
};

export default ButtonCheck;
