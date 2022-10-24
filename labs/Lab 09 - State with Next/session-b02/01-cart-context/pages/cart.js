import CartButton from "components/cart-button";

export default function Cart({ cart, products }) {
  return (
    <>
      <CartButton cart={cart} products={products} />
      {Object.entries(cart).map(([key, value]) => (
        <div>
          {key}: {value}
        </div>
      ))}
    </>
  );
}
