import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  RouterProvider,
} from "react-router-dom";
import Routes from './Router/Routes';
import WebTheme from './utils/webTheme';
import AuthProvider from './Provider/AuthProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WebTheme>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={Routes} />
          </QueryClientProvider>
        </AuthProvider>
      </LocalizationProvider>
    </WebTheme>
  </React.StrictMode>,
)
