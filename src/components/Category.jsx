import Product from "./Product";

const Category = ({ data }) => {
  return (
    <div className="restaurant">
      {data.categories.map((category) => {
        const { name, meals } = category;

        return (
          meals.length > 0 && (
            <section key={name}>
              <h2>{name}</h2>

              {meals.map((product) => {
                return <Product data={product} />;
              })}
            </section>
          )
        );
      })}
    </div>
  );
};

export default Category;
