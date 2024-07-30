import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlightStatus = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/flight-status'); // url or endpoints of api
        setFlights(response.data);
      } catch (error) {
        console.error('Error fetching flight status:', error);
      }
    };

    fetchFlights();
    const interval = setInterval(fetchFlights, 60000); // Refresh every 60 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Flight Status</h1>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            <strong>{flight.airline}</strong>: {flight.status} (Gate: {flight.gate})
          </li>
        ))}
      </ul>
    </div>
  );
};
const response = await axios.get('http://127.0.0.1:5000/api/flight-status');

export default FlightStatus;
