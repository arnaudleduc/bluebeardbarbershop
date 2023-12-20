import UserCard from "./userCard/userCard";

import "./advices.css";

const advices = () => {
  return (
    <section className="advices">
      <h2>Vos avis</h2>
      <div className="advices-cards">
        <UserCard />
      </div>
    </section>
  );
};

export default advices;
