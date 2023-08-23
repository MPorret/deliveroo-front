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
  );
};

export default Restaurant;
