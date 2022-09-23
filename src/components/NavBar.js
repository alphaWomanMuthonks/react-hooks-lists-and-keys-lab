import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];

  return (<nav>
    
    <a href key="#home"> home </a>
    <a href ="#about"> about </a>
    <a href ="projects"> projects </a>
    
  </nav>
  
  );
  
}

export default NavBar;
