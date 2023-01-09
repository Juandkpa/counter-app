import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
