// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import FlightStatus from './components/FlightStatus';
import NotificationPreferences from './components/NotificationPreferences';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Status and Notifications</h1>
      </header>
      <main>
        <FlightStatus />
        <NotificationPreferences />
      </main>
    </div>
  );
};

export default App;
