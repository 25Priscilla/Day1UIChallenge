import React, { useState } from 'react';
import './ContestSignUp.css';

const ContestSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    category: '',
    bio: '',
    termsAccepted: false,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.age || !formData.category) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!formData.termsAccepted) {
      setError('You must accept the terms and conditions.');
      return;
    }

    setError('');
    setSuccess(true);
    console.log('Contest Registration Data:', formData);

    // You can optionally save to localStorage or simulate API call
  };

  return (
    <div className="contest-signup-container">
      <form className="contest-signup-form" onSubmit={handleSubmit}>
        <h2>Contest Registration</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age*"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category*</option>
          <option value="Art">Art</option>
          <option value="Coding">Coding</option>
          <option value="Writing">Writing</option>
        </select>

        <textarea
          name="bio"
          placeholder="Short Bio (optional)"
          value={formData.bio}
          onChange={handleChange}
        />

        <label className="terms-label">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          I agree to the terms and conditions*
        </label>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">You have registered successfully!</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ContestSignUp;
