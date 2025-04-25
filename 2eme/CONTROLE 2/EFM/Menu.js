import React from "react";
import { NavLink } from "react-router-dom";

function Menu(){
  return (
    <div>
      <NavLink to='/q3'>Q3</NavLink>
      <NavLink to='/q4'>Q4</NavLink>
    </div>
  );
}

export default Menu;
