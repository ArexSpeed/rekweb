import * as React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: NextPage<Props> = ({ open, setOpen }) => {
  return (
    <nav className="navbar">
      <div className={`navbar__menu ${!open && "close"}`}>
        <ul className="navbar__menu-list">
          <Link href="/" passHref>
            <li className="navbar__menu-item" onClick={() => setOpen(!open)}>
              Kategoria 1
            </li>
          </Link>
          <Link href="/" passHref>
            <li className="navbar__menu-item" onClick={() => setOpen(!open)}>
              Kategoria 2
            </li>
          </Link>
          <Link href="/" passHref>
            <li className="navbar__menu-item" onClick={() => setOpen(!open)}>
              Kategoria 3
            </li>
          </Link>
          <Link href="/" passHref>
            <li className="navbar__menu-item" onClick={() => setOpen(!open)}>
              Kategoria 4
            </li>
          </Link>
          <Link href="/" passHref>
            <li className="navbar__menu-item" onClick={() => setOpen(!open)}>
              Kategoria 5
            </li>
          </Link>
        </ul>
      </div>
      <div className="navbar__logo">LOGO TEST</div>
    </nav>
  );
};

export default Navbar;
