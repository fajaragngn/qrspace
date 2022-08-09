import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import DarkMode from './Components/DarkMode';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <div className='font-mono md:container mx-auto mt-9' >
		  <App /> 
		  <Footer />
    </div>
	</React.StrictMode>
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();