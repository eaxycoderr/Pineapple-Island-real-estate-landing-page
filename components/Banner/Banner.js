import Link from 'next/link';

export default function Banner () {
  return (
    <div className="banner-section">
      <div className="banner container">
        <div className="banner-left">
          <h2>
            Pineapple Island:
            GenZ and Millenial
            Abode
          </h2>
          <p>
            a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
          </p>
        </div>
        <div className="banner-right">

          <div className="banner-right-contents">
            <h2>
              Pineapple Island:
              GenZ and Millenial
              Abode
            </h2>
            <p>
              a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
            </p>
            <div className="banner-get-in-touch-btn">
              <button>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
