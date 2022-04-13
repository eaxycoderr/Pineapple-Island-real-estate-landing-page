import React, {useState, useEffect} from 'react';
import Link from 'next/link';

export default function Header () {
  const [openNav, setOpenNav] = useState (false);
  const openMobileMenu = () => setOpenNav (!openNav);
  const closeMobileMenu = () => setOpenNav (false);

  return (
    <div className="header container">
      <div className="logo">
        <h2>Pineapple <br /> Island</h2>
      </div>
      <nav>
        <ul className={openNav ? 'nav-options active' : 'nav-options'}>
          <div className="logo-mobile">
            <h2>Pineapple <br /> Island</h2>
            <svg onClick={closeMobileMenu} version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="30px" height="30px" viewBox="0 0 900.000000 900.000000"
              preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
              fill="#ffffff" stroke="none">
              <path d="M487 8986 c-3 -8 -25 -17 -49 -21 -24 -4 -74 -22 -113 -41 -147 -69
              -262 -203 -310 -361 -18 -59 -19 -259 -2 -323 16 -58 59 -142 99 -194 18 -23
              821 -830 1785 -1795 964 -965 1753 -1761 1753 -1770 0 -9 -792 -808 -1761
              -1776 -968 -968 -1770 -1773 -1782 -1790 -40 -55 -72 -117 -90 -175 -16 -52
              -20 -278 -7 -325 54 -187 186 -327 383 -404 38 -15 309 -14 361 1 22 7 59 23
              81 35 22 13 51 28 65 33 13 6 824 811 1801 1788 978 977 1781 1778 1786 1779
              5 2 810 -797 1789 -1775 978 -978 1791 -1785 1806 -1793 141 -74 163 -79 329
              -79 157 0 192 8 289 63 118 66 244 229 264 339 4 24 13 38 21 38 12 0 15 22
              15 120 0 107 -2 122 -20 140 -11 11 -20 28 -20 39 0 34 -44 119 -96 186 -18
              22 -820 828 -1783 1790 -1200 1199 -1750 1756 -1749 1768 2 10 791 807 1754
              1770 962 964 1764 1770 1781 1792 43 56 89 146 97 189 4 22 13 36 21 36 12 0
              15 23 15 130 0 93 -3 129 -12 128 -6 -2 -17 16 -24 39 -24 81 -88 187 -149
              248 -65 66 -195 137 -273 150 -24 4 -46 13 -49 21 -8 20 -169 20 -176 0 -3 -8
              -23 -18 -44 -21 -52 -9 -107 -32 -177 -76 -42 -26 -565 -543 -1825 -1803 -971
              -971 -1772 -1766 -1780 -1766 -8 0 -809 794 -1780 1765 -971 970 -1778 1773
              -1792 1784 -47 36 -163 88 -211 95 -32 5 -48 12 -48 22 0 20 -165 21 -173 0z"/>
              </g>
              </svg>
          </div>
          <li><Link href="">About Us</Link></li>
          <li><Link href="">What we do</Link></li>
          <li><Link href="">Project</Link></li>
          <div className="header-get-in-touch-btn-mobile">
            <button>Get in Touch</button>
          </div>
        </ul>
      </nav>
      <div className="header-get-in-touch-btn">
        <button>Get in Touch</button>
      </div>
      <div className="hamburger">
        <svg onClick={openMobileMenu}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 7.5H0V6H24V7.5ZM24 19.5H0V18H24V19.5ZM24 13.488H0V12H24V13.488Z"
            fill="#0E204E"
          />
        </svg>

      </div>
    </div>
  );
}
