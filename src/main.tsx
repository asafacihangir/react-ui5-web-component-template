import '@ui5/webcomponents-react/dist/Assets.js';
import {ThemeProvider} from '@ui5/webcomponents-react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>,
        </ThemeProvider>
    </StrictMode>
);
