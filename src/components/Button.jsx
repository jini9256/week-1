import React, { useState } from "react";

function Button({ ClickMode, value }) {
  return (
    <button className="btn-style" onClick="ClickMode">
      {value}
    </button>
  );
}

export default Button;
