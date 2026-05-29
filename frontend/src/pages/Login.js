import { useState } from 'react';
import API from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);

      alert('Login Successful');

    } catch (error) {
      alert('Login Failed');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 className="title">Login</h1>

        <form onSubmit={handleLogin}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;