import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import axios from 'axios';

axios.get('/api/cards')
.then(({data}) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App initialCardList={data}/>
    </React.StrictMode>,
  );
  });