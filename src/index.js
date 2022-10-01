import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import './componenst/Profile/Profile.css';
import './componenst/Statistics/Statistics.css';
import './componenst/FriendList/FriendList.css';
import './componenst/TransactionHistory/TransactionHistory.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
