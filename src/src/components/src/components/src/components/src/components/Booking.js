import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Booking = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/events/${id}/book`, { quantity })
      .then(response => alert('Booking successful'))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Book Tickets</h1>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleChange} min="1" />
      </label>
      <button type="submit">Book</button>
    </form>
  );
};

export default Booking;
