import { Box } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Topbar from './components/topbar/Topbar';
import Landing from './pages/landing/Landing';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Box>
            <Topbar />
            <RouterProvider router={router} />
        </Box>
    </React.StrictMode>
);
