import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Header.css';

const headerMenuItems = [
  [{ pathname: '/about/bar' }, 'to about params'],
  [{ pathname: '/about', search: '?foo=bar' }, 'to about query'],
];

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-inner">
        <div className="Header-logo">
          <Link
            to="/"
          >
            <img
              alt="Logo"
              className="Header-logo-img"
              src={logo}
            />
          </Link>
        </div>
        <div className="Header-nav">
          <ul className="Header-nav-list">
            {headerMenuItems.map((item, index) => (
              <li
                className="Header-nav-item"
                key={index}
              >
                <Link
                  to={item[0]}
                  className="Header-nav-link"
                >
                  {item[1]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Header.displayName = 'Header';
