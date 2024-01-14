const Footer = () => {
  return (
    <footer>
      <div className="footerSection">
        <div className="footerRow1">
          <h3>
            Join the Adventure newsletter to receive our best vacation details
          </h3>
          <p>You can unsubscribe at any time.</p>
          <form>
            <div className="formGroup">
              <input type="text" placeholder="Your Email" />
              <button className="footerBtn">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="footerRow2">
          <div className="col">
            <h3>About Us</h3>
            <li>How it works</li>
            <li>Testimonials</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Terms of Services</li>
          </div>
          <div className="col">
            <h3>Contact Us</h3>
            <li>Contact</li>
            <li>Support</li>
            <li>Destinations</li>
            <li>Sponsorships</li>
          </div>
          <div className="col">
            <h3>Videos</h3>
            <li>Submit Video</li>
            <li>Ambassadors</li>
            <li>Agency</li>
            <li>Influencer</li>
          </div>
          <div className="col">
            <h3>Social Media</h3>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </div>
        </div>
        <div className="footerRow3">
          <div className="footerLogo">
            <a href="/">TRVL</a>
          </div>
          <div className="copyright">TRVL &copy; 2023</div>
          <div className="socialLinks"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
