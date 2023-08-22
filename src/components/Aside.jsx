import { useEffect, useState } from "react";

const Aside = ({ cart, setCart, setTotal, total, sousTotal, setSousTotal }) => {
  const handleClick = ({ title, action }) => {
    const productToChange = cart.find((product) => product.title === title);
    switch (action) {
      case "minus":
        productToChange.quantity = productToChange.quantity - 1;
        setSousTotal(sousTotal - Number(productToChange.price));
        break;
      case "plus":
        productToChange.quantity = productToChange.quantity + 1;
        setSousTotal(sousTotal + Number(productToChange.price));
        break;
      case "submit":
        if (cart.length === 0) {
          alert("Votre panier est vide, vous ne pouvez pas commander.");
        } else {
          alert("Panier validé");
          setCart([]);
          setSousTotal(0);
        }
        break;
      default:
        break;
    }

    if (productToChange.quantity === 0) {
      const tab = [...cart];
      const index = tab.indexOf(productToChange);
      tab.splice(index, 1);
      setCart(tab);
    }
  };

  return (
    <div className="cart">
      <div
        className="hideCart"
        onClick={() => {
          document.querySelector("aside").classList.remove("show");
          document.querySelector(".hideCart").classList.remove("show");
          document.querySelector(".showCart").classList.remove("hide");
        }}
      >
        <i className="icon-chevron-down" />
      </div>
      <aside>
        <button
          onClick={() => {
            handleClick({ action: "submit" });
          }}
        >
          Valider mon panier
        </button>
        <ul>
          {cart.map(({ title, quantity, price }) => {
            return (
              <li key={title}>
                <div className="handleStock">
                  <button
                    onClick={() => {
                      handleClick({ title, action: "minus" });
                    }}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => {
                      handleClick({ title, action: "plus" });
                    }}
                  >
                    +
                  </button>
                </div>
                <span className="title">{title}</span>
                <span>
                  {(Math.round(price * quantity * 100) / 100).toFixed(2)} €
                </span>
              </li>
            );
          })}
        </ul>
        <div>
          <span>Sous-total</span>
          <span>{(Math.round(sousTotal * 100) / 100).toFixed(2)} €</span>
        </div>
        <div>
          <span>Frais de livraison</span>
          <span>2.50 €</span>
        </div>
        <div>
          <span>Total</span>
          <span>{(Math.round(total * 100) / 100).toFixed(2)} €</span>
        </div>
      </aside>
      <button
        className="showCart"
        onClick={() => {
          document.querySelector("aside").classList.add("show");
          document.querySelector(".hideCart").classList.add("show");
          document.querySelector(".showCart").classList.add("hide");
        }}
      >
        Voir le panier
      </button>
    </div>
  );
};

export default Aside;
