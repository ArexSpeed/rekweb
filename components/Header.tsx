import { useState } from 'react';
import Link from 'next/link';
import { FacebookFilled, TwitterSquareFilled } from '@ant-design/icons';
import Navbar from './Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header className="header">
      <div className="header__logo">LOGO TEST</div>
      <div className="header__social">
        <Link href="/" passHref>
          <div className="header__social-icon twitter">
            <TwitterSquareFilled />
            <span>Twitter</span>
          </div>
        </Link>
        <Link href="/" passHref>
          <div className="header__social-icon fb">
            <FacebookFilled />
            <span>Facebook</span>
          </div>
        </Link>
      </div>
      <button className="header__hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`header__hamburger-icon top ${isOpen && 'active'}`}></div>
        <div className={`header__hamburger-icon middle ${isOpen && 'active'}`}></div>
        <div className={`header__hamburger-icon bottom ${isOpen && 'active'}`}></div>
      </button>
    </header>
    <Navbar open={isOpen} setOpen={setIsOpen} />
    </>
  );
};

export default Header;

