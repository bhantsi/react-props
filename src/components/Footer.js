import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        Copyright &copy; {currentYear} 
        <a href="https://github.com/bhantsi">
          <span> Bala Hantsi</span>
        </a>
      </p>
    </footer>
  );
}
