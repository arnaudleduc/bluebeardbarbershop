import "./localisation.css";

const localisation = () => {
  return (
    <section className="localisation">
      <div className="localisation-text">
        <div>
          <h2>Trouvez votre barbier</h2>
          <p className="localisation-text-subtitle">
            Nous sommes <span>(presque)</span> partout
          </p>
        </div>
        <div className="localisation-text-input-label">
          <p htmlFor="address">Saisissez votre ville</p>
          <div className="localisation-text-input">
            <input type="search" id="address" placeholder="Paris" />
            <button>Rechercher</button>
          </div>
        </div>
      </div>
      <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824573245!2d2.264634906379706!3d48.85893843461572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1703078230740!5m2!1sfr!2sfr"></iframe></div>
    </section>
  );
};

export default localisation;
