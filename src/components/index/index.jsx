import "./index.css";

const index = () => {
  return (
    <section className="banner">
      <h1>VOTRE BARBIER, PARTOUT</h1>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/arnaudleduc/">
            <img src="/images/linkedinLogo.png" alt="Logo Linkedin" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/LeBigTesti">
            <img src="/images/xLogo.png" alt="Logo X" />
          </a>
        </li>
        <li>
          <a href="https://github.com/arnaudleduc">
            <img src="/images/githubLogo.png" alt="Logo Github" />
          </a>
        </li>
        <li>
          <a href="https://www.artstation.com/zdk">
            <img src="/images/artstationLogo.png" alt="Logo Artstation" />
          </a>
        </li>
        <li>
          <a href="https://vimeo.com/zdkwebagency">
            <img src="/images/vimeoLogo.png" alt="Logo Vimeo" />
          </a>
        </li>
        <li>
          <a href="https://zdk-web-agency.vercel.app/">
            <img src="/images/websiteLogo.png" alt="Logo Website" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default index;
