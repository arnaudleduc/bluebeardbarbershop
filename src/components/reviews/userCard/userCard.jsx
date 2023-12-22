import "./user-card.css";

const userCard = () => {
  return (
    <>
      <div className="user-card">
        <div className="user-card-id">
          <img
            className="user-card-picture"
            src="/images/nicoPicture.png"
            alt="Photo de l'utilisateur"
          />
          <h3>Nicolas D.</h3>
        </div>
        <div className="user-card-notation">
          <div className="user-card-notation-stars">
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starEmptyIcon.png"
              alt="Etoile de notation vide"
            />
          </div>
          <p className="user-card-notation-date">Il y a 2 jours</p>
        </div>
        <p className="user-card-comment">
          Trouvés par hasard sur internet, les barbiers du Blue Beard sont, pour
          moi, les meilleurs barbiers ! Jamais on ne m&apos;avait coupé les
          cheveux comme ça...
        </p>
      </div>

      <div className="user-card">
        <div className="user-card-id">
          <img
            className="user-card-picture"
            src="/images/ilyesPicture.png"
            alt="Photo de l'utilisateur"
          />
          <h3>Ilyes A.</h3>
        </div>
        <div className="user-card-notation">
          <div className="user-card-notation-stars">
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
          </div>
          <p className="user-card-notation-date">Il y a une semaine</p>
        </div>
        <p className="user-card-comment">
          Que dire ? Déjà un accueil impeccable, petite boisson pour patienter.
          Marco, mon barbier, est un amour. On a pu discuter ensemble de ma
          nouvelle coupe, des soins pour améliorer le teint de ma barbe et il
          m&apos;a également offert quelques échantillons. En bref, foncez !!
        </p>
      </div>

      <div className="user-card">
        <div className="user-card-id">
          <img
            className="user-card-picture"
            src="/images/adrienPicture.png"
            alt="Photo de l'utilisateur"
          />
          <h3>Adrien M.</h3>
        </div>
        <div className="user-card-notation">
          <div className="user-card-notation-stars">
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
            <img
              src="/images/starFullIcon.png"
              alt="Etoile de notation pleine"
            />
          </div>
          <p className="user-card-notation-date">Il y a un mois</p>
        </div>
        <p className="user-card-comment">
          Pour moi l&apos;apparence est essentielle. Vous me coupez mal la
          barbe, c&apos;est terminé. Cela va faire 3 ans que je vais chez Blue
          Beard, et je ne changerai pour rien au monde !
        </p>
      </div>
    </>
  );
};

export default userCard;
