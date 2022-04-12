import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import axios from 'axios';

import App from './App';

axios.get('http://localhost:3001/notes').then((response) => {
  const notes = response.data;
  console.log(notes);
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
