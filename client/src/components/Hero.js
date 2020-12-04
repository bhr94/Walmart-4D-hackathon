import arrow from "../assets/icons/arrow.svg";
export default function Hero() {
  return (
    <header className="header">
      <div className="header-navigate">
        <h3 className="header-navigate__text">Go home</h3>
        <img className="header-navigate__img" src={arrow} />
      </div>
      <article className="header__article">
        <h1 className="header__article-title">Thank you for your order</h1>
        <p className="header__article-text">
          Confirmation Emal has been sent to:sam@gmail.com
        </p>
      </article>
    </header>
  );
}
