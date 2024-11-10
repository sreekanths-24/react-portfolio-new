import React from 'react';

function NavItem({ href, label, closeMenu }) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center space-x-2"
        onClick={() => {
          if (closeMenu) closeMenu(); // Close the menu on click
        }}
      >
        <span>{label}</span>
      </a>
    </li>
  );
}

export default NavItem;
