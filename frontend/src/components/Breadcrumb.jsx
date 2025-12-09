import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  return (
    <nav className="mb-3 text-[11px] text-gray-500">
      <Link to="/" className="hover:text-primary">
        Início
      </Link>
      {items.map((item, idx) => (
        <span key={idx}>
          {' '}
          /{' '}
          {item.to ? (
            <Link to={item.to} className="hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb;
