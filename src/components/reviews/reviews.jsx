import UserCard from "./userCard/userCard";

import "./reviews.css";

const Reviews = () => {
  return (
    <section className="advices">
      <h2>Vos avis</h2>
      <div className="advices-cards">
        <UserCard />
      </div>
    </section>
  );
};

export default Reviews;
