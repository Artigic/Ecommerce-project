import { useEffect, useState } from 'react';
import API from '../services/api';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get('/products');

      setProducts(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (product) => {
    let cart =
      JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );

    alert('Added to cart');
  };

  return (
    <div className="container">
      <h1 className="title">ROG STORE</h1>

      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        products.map((product) => (
          <div className="card" key={product._id}>
            
            {product.image && (
              <img
                src={product.image}
                alt={product.title}
                width="200"
                style={{
                  borderRadius: '10px',
                  marginBottom: '10px',
                }}
              />
            )}

            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <p>
              <strong>Price:</strong> ₹ {product.price}
            </p>

            <p>
              <strong>Stock:</strong> {product.stock}
            </p>

            <button
              className="btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;