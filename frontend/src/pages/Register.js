import { useState } from 'react';
import API from '../services/api';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post('/auth/register', formData);

      alert('Registration Successful');

    } catch (error) {
      alert('Registration Failed');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 className="title">Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />

          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button className="btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;