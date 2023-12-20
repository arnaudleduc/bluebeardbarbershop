import "./contact.css";

const contact = () => {
  return (
    <section className="contact">
      <h1>CONTACTEZ-NOUS</h1>
      <input
        type="email"
        id="email"
        pattern=".+@example\.com"
        required
        placeholder="tonEmail@email.com"
      />
      <textarea
        type="textarea"
        rows={5}
        cols={33}
        required
        placeholder="Comment peut-on vous aider ?"
      />
      <button>ENVOYER</button>
    </section>
  );
};

export default contact;
