import Link from 'next/link';
import { FacebookFilled, TwitterSquareFilled } from '@ant-design/icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <div className="footer__logo-text">LOGO TEST</div>
          <div className="footer__logo-copy">&copy; 2021 test.com</div>
        </div>
        <div className="footer__menu">
          <ul className="footer__menu-list">
            <li className="footer__menu-item">Kategoria 1</li>
            <li className="footer__menu-item">Kategoria 2</li>
            <li className="footer__menu-item">Kategoria 3</li>
          </ul>
          <ul className="footer__menu-list">
            <li className="footer__menu-item">Kategoria 4</li>
            <li className="footer__menu-item">Kategoria 5</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-social">
          <Link href="/" passHref>
            <div className="footer__bottom-social-icon twitter">
              <TwitterSquareFilled />
              <span className="footer__bottom-social-name">Twitter</span>
            </div>
          </Link>
          <Link href="/" passHref>
            <div className="footer__bottom-social-icon fb">
              <FacebookFilled />
              <span className="footer__bottom-social-name">Facebook</span>
            </div>
          </Link>
        </div>
        <div className="footer__bottom-policy">
          <ul>
            <li>Polityka prywatności</li>
            <li>Regulamin</li>
            <li>Kontakt</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
