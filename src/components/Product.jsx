const Product = ({ data, setCart, cart, setTotal, sousTotal }) => {
  const { title, description, price, picture, popular } = data;

  const handleClick = ({ cart, title, price, quantity }) => {
    const isPresent = cart.find((product) => {
      return product.title === title;
    });
    if (isPresent) {
      return null;
    } else {
      const tab = [...cart];
      tab.push({ title, quantity: 1, price });
      setCart(tab);
    }
  };

  return (
    <article
      onClick={() => {
        handleClick({ cart, title, price });
      }}
    >
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {price && <span>{price} €</span>}
        {popular && (
          <span className="popular">
            <i className="icon-STAR_FILL" />
            Populaire
          </span>
        )}
      </div>
      {picture && <img src={picture} />}
    </article>
  );
};

export default Product;
