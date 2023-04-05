import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Enzyme, { EnzymeAdapter } from "enzyme";


Enzyme.configure({ adapter: new EnzymeAdapter() });
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

