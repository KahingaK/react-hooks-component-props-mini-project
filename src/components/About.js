import React from "react";

function About({image = "https://via.placeholder.com/215 " , text}) {
  return (
    <aside>
      <img src={image.Bimage} alt= "blog logo" />
      <p>{text.aboutText}</p>
    </aside>
  );
}

export default About;
