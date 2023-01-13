import React from "react";

function About({Bimage = "https://via.placeholder.com/215 " , aboutText}) {
  return (
    <aside>
      <img src={Bimage} alt= "blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
