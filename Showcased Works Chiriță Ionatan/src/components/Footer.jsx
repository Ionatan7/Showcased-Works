import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Chiriță Ionatan ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
