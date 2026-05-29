import { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  const removeFromCart = (index) => {
    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem(
      'cart',
      JSON.stringify(updatedCart)
    );
  };

  return (
    <div className="container">
      <h1 className="title">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <p>₹ {item.price}</p>

            <button
              className="btn"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;