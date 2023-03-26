import React from "react";

const Footer = () => {

  //Get current yeara
  const year = new Date().getFullYear();
  
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
