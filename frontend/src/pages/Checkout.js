function Checkout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const placeOrder = () => {
    alert('Order Placed Successfully');

    localStorage.removeItem('cart');

    window.location.href = '/';
  };

  return (
    <div className="container">
      <h1 className="title">Checkout</h1>

      {cart.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.title}</h3>

          <p>₹ {item.price}</p>
        </div>
      ))}

      <h2>Total: ₹ {total}</h2>

      <button className="btn" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;