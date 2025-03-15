import { useState } from 'react';
import './App.css';
import notificationsData from './notifications'; 

function App() {
  const [notifications, setNotifications] = useState(notificationsData); 

  
  const handleClearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>Notifications</h1>
      <p>Total Notifications: {notifications.length}</p> {}
      {}
      <div>
        {notifications.map(notification => (
          <div key={notification.id} className="notification">
            <p><strong>{notification.name}</strong>: {notification.message}</p>
            <button onClick={() => handleClearNotification(notification.id)}>Clear</button>
          </div>
        ))}
      </div>
      <button onClick={clearAllNotifications}>Clear All Notifications</button> {}
    </div>
  );
}

export default App;
