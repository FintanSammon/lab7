// Importing necessary React modules and styles
import React from 'react'; // Main React library
import ReactDOM from 'react-dom/client'; // ReactDOM for rendering into the DOM
import './index.css'; // Custom CSS for styling the application
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Utility for measuring performance

// Creating a root container where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside the root container
root.render(
  <React.StrictMode>
    {/* StrictMode is a tool for highlighting potential problems in an application */}
    <App />
  </React.StrictMode>
);

// This section is for performance monitoring
// reportWebVitals() is a function that can be used to log performance metrics
// Here, it's called without arguments, so it does nothing by default
// To enable logging, pass a function like console.log, or set up a custom logging function
// For more advanced usage, metrics can be sent to an analytics endpoint
// More information available at: https://bit.ly/CRA-vitals
reportWebVitals();
