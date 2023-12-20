import useNavBarStore from "../../stores/useNavBar";

import "./header.css";

const Header = () => {
  const { pageToProducts, pageToAdvices, pageToContact, pageToIndex } =
    useNavBarStore();

  return (
    <>
      <div className="promotion">
        <p>-10% pour toute première commande avec le code &ldquo;ZDK&quot;</p>
      </div>
      <header className="header">
        <img
          className="logo"
          src="/images/bbbsLogo.png"
          alt="Blue Beard Barber Shop"
        />
        <nav>
          <button onClick={pageToIndex}>ACCUEIL</button>
          <button onClick={pageToProducts}>PRODUITS</button>
          <button onClick={pageToAdvices}>CONSEILS</button>
          <button onClick={pageToContact}>CONTACT</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
