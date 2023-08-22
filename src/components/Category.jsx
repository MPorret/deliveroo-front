import Product from "./Product";

const Category = ({ data, setCart, cart, setTotal, sousTotal }) => {
  return (
    <div className="restaurant">
      {data.categories.map((category) => {
        const { name, meals } = category;

        return (
          meals.length > 0 && (
            <section key={name}>
              <h2>{name}</h2>

              {meals.map((product, index) => {
                return (
                  <Product
                    data={product}
                    setCart={setCart}
                    cart={cart}
                    key={index}
                    setTotal={setTotal}
                    sousTotal={sousTotal}
                  />
                );
              })}
            </section>
          )
        );
      })}
    </div>
  );
};

export default Category;
