import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import DarkMode from './Components/DarkMode';
import Header from './Components/Header';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <div className=' subpixel-aliased tracking-wide text-2xl md:container md:mx-auto mt-9' >
      	<Header />
		<App /> 
		<Footer />
    </div>
	</React.StrictMode>
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();