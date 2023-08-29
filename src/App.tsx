import React from 'react';
import './App.scss';
import Dashboard from './Pages/Dashboard/Dashboard';
import { DarkModeProvider } from './context/themeContext';

const App: React.FC = () => {
    return (
        <DarkModeProvider>
            <Dashboard />
        </DarkModeProvider>
    );
};

export default App;
