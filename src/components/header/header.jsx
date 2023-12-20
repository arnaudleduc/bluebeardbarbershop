import "./header.css";

const header = () => {
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
          <button>PRODUITS</button>
          <button>CONSEILS</button>
          <button>CONTACT</button>
        </nav>
      </header>
    </>
  );
};

export default header;
