import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <nav>
    <div>
      <Link to="/">
        Home
      </Link>
      <Link to="/tabs">
        Tabs
      </Link>
    </div>
  </nav>
);
