const Product = ({ data }) => {
  const { id, title, description, price, picture, popular } = data;
  return (
    <article key={id}>
      <div className="content">
        <h3>{title}</h3>
        <p>
          {description
            ? description.length > 120
              ? `${description.slice(0, 119)}...`
              : description
            : null}
        </p>
        {price && <span>{price} €</span>}
        {popular && <span className="popular">Populaire</span>}
      </div>
      {picture && <img src={picture} />}
    </article>
  );
};

export default Product;
