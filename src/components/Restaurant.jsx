import Category from "./Category";

const Restaurant = ({ data }) => {
  return (
    <main>
      <div>
        <div className="container">
          <div className="banner">
            <h1>{data.restaurant.name}</h1>
            <span>{data.restaurant.description}</span>
          </div>
          <img src={data.restaurant.picture} />
        </div>
      </div>

      <Category data={data} />
    </main>
  );
};

export default Restaurant;
