import CartButton from "components/cart-button";

export default function Cart({ cart, products }) {
  return <CartButton products={products} cart={cart} />;
}
