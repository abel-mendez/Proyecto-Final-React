import React from "react";

const ButtonGroup = () => {
  return (
    <div
      class="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        checked
      />
      <label class="btn btn-outline-success" for="btnradio1">
        Up
      </label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
      />
      <label class="btn btn-outline-success" for="btnradio2">
        Down
      </label>
    </div>
  );
};

export default ButtonGroup;
