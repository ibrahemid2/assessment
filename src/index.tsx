import React from 'react';
import { createRoot } from 'react-dom/client';

/**
 * This file can be ignored, please work in ./components/App.jsx
 */
// Include mock API.
import './mock';

// Include styles.
import './styles/index.css';

// Include application component.
import App from './components/App';
import { CategoryFilterProvider } from './contexts/CategoryFilterContext';


const rootElement = document.getElementById('root');
//id is given as app

const root = createRoot(rootElement!);
root.render(
    <CategoryFilterProvider>
    <App />
    </CategoryFilterProvider>
);