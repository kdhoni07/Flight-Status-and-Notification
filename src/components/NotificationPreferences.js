import React, { useState } from 'react';
import axios from 'axios';

const NotificationPreferences = () => {
  const [email, setEmail] = useState('');
  const [sms, setSms] = useState('');
  const [app, setApp] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/api/notification-preferences', {
        email,
        sms,
        app,
      });
      alert('Preferences saved successfully!');
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  };
  

  return (
    <div>
      <h1>Notification Preferences</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>SMS:</label>
          <input
            type="text"
            value={sms}
            onChange={(e) => setSms(e.target.value)}
          />
        </div>
        <div>
          <label>App Notifications:</label>
          <input
            type="text"
            value={app}
            onChange={(e) => setApp(e.target.value)}
          />
        </div>
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};

export default NotificationPreferences;
