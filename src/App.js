import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EventDetail from './components/EventDetail';
import UserRegistration from './components/UserRegistration';
import Booking from './components/Booking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/book/:id" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
