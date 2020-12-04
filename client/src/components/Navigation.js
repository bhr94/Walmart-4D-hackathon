import logo from "../assets/logo/Walmart_logo.svg";

export default function Navigation() {
  return (
    <nav className="navigation-container">
      <div className = "content-container">
        <img src={logo} className="navigation-container__logo" />
        <h3 className="navigation-container__text">Order Confirmation</h3>
      </div>
    </nav>
  );
}
