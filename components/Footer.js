export default function Footer () {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-content container">
          <div className="left">
            <h2>Banana Island</h2>
            <p>
              a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
            </p>
          </div>
          <div className="right">
            <h2>Follow up</h2>
            <p>
              Keep up with our newsletter to get
              updates about projects and offers
            </p>
            <div className="right-form-subscribe">
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mobile">
        <div className="inner-footer-mobile">
          <h2>Pineapple Island</h2>
          <p>
            Copyright
            2021
            Glowdsgn
            All Rights Reserved
          </p>
        </div>

      </div>
    </div>
  );
}
