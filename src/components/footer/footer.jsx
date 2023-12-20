import "./footer.css";

const footer = () => {
  return (
    <footer className="footer">
      <img
        className="logo"
        src="/images/bbbsLogo.png"
        alt="Blue Beard Barber Shop"
      />
      <ul>
        <li>
          <a href="">Contactez-nous</a>
        </li>
        <li>
          <a href="">Nos produits</a>
        </li>
        <li>
          <a href="">Nos conseils</a>
        </li>
      </ul>
      <p>
        Copyright &copy;{" "}
        <a href="https://zdk-web-agency.vercel.app">ZDK Web Agency</a>
      </p>
    </footer>
  );
};

export default footer;
