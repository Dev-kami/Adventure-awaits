import Button from "./Button";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="navBar">
      <Logo />
      <ul className="navLinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Services">Services</a>
        </li>
        <li>
          <a href="/Products">Products</a>
        </li>
      </ul>
      <Button text="Sign Up" />
    </nav>
  );
};

export default Navbar;
