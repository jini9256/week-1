import React, { useState } from "react";

function Button({ addInput, value }) {
  return (
    <button className="btn-style" onClick="addInput">
      {value}
    </button>
  );
}

export default Button;
