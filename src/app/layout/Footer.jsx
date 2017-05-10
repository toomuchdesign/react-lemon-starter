import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-nav">
        <ul className="Footer-menu">
          <li className="Footer-item">Foo</li>
          <li className="Footer-item">Bar</li>
        </ul>
      </div>
    </div>
  );
}

Footer.displayName = 'Footer';
