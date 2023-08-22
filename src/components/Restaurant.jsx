import Category from "./Category";
import Aside from "./Aside";
import { useEffect, useState } from "react";

const Restaurant = ({ data }) => {
  const [cart, setCart] = useState([]);
  const [sousTotal, setSousTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    cart.map(({ price, quantity }) => {
      setSousTotal(0);
      setSousTotal(sousTotal + quantity * price);
    });
  }, [cart]);

  useEffect(() => {
    setTotal(sousTotal + 2.5);
  }, [sousTotal]);

  return (
    <div className="content">
      <div>
        <div className="container">
          <div className="banner">
            <h1>{data.restaurant.name}</h1>
            <span>{data.restaurant.description}</span>
          </div>
          <img src={data.restaurant.picture} />
        </div>
      </div>
      <main className="container">
        <Category
          data={data}
          setCart={setCart}
          cart={cart}
          setTotal={setTotal}
          sousTotal={sousTotal}
        />
        <Aside
          cart={cart}
          setCart={setCart}
          setTotal={setTotal}
          total={total}
          sousTotal={sousTotal}
          setSousTotal={setSousTotal}
        />
      </main>
    </div>
  );
};

export default Restaurant;
