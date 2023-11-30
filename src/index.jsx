import React from 'react';
import { createRoot } from 'react-dom/client';


// import style
import './styles/style.css';
import JurnalApp from './components/JurnalApp';

const root = createRoot(document.getElementById('root'));
root.render(<JurnalApp/>);