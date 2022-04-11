import Link from 'next/link';

export default function Header () {
  return (
    <div className="header container">
      <div className="logo">
        <h2>Pineapple <br /> Island</h2>
      </div>
      <nav>
        <ul>
          <li><Link href="">About Us</Link></li>
          <li><Link href="">What we do</Link></li>
          <li><Link href="">Project</Link></li>
        </ul>
      </nav>
      <div className="header-get-in-touch-btn">
        <button>Get in Touch</button>
        {/* <Link href="">Get in Touch</Link> */}
      </div>
      <div className="hamburger">
        <svg
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
