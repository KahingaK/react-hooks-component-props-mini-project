import React from "react";

function Header(blogName) {
  return (
    <div>
      Header
      <header>
        <h1>{blogName.name}</h1>
      </header>
    </div>
  );
}

export default Header;
