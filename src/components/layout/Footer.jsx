import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-5 bg-gray-700 text-primary-content footer-center">
      rjun {footerYear}
    </footer>
  );
}

export default Footer;
