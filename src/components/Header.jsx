import React, { useState } from "react";

function Header({ title }) {
  return (
    <div className="container">
      <h1>{title}</h1>
    </div>
  );
}
export default Header;
