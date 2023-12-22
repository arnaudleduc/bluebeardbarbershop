import productsList from "./productsList.js";
import "./products.css";

const Products = () => {
  return (
    <>
      <div className="products">
        {productsList.map((product, index) => {
          return (
            <div className="products-card" key={`product-${index + 1}`}>
              <div className="products-card-img-container">
                <img
                  className="products-card-img"
                  src={product.image}
                  alt={product.title}
                />
                {product.madeInFrance || product.vegan ? (
                  <div className="products-card-img-more">
                    {product.madeInFrance && (
                      <img
                        className="products-card-img-more-fr"
                        src="/images/madeInFrance.png"
                        alt="Produit fait en France"
                      />
                    )}
                    {product.vegan && (
                      <img
                        className="products-card-img-more-vegan"
                        src="/images/veganIcon.png"
                        alt="Produit vegan"
                      />
                    )}
                  </div>
                ) : null}
              </div>
              <h2 className="products-card-title">{product.title}</h2>
              <div className="products-card-notation">
                <div className="products-card-notation-container">
                  <p>{`${product.note} / 5`}</p>
                  <img
                    className="products-card-notation-star"
                    src="/images/starFullIcon.png"
                    alt="Icône d'étoile"
                  />
                </div>
                <p className="products-card-notation-reviews">{`${product.avis} avis`}</p>
              </div>
              <p className="products-card-price">
                {`${product.price}€`}
                <span> TTC</span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
