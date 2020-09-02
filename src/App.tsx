import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout';
import { Routes } from './routes';

declare var Ext:any;

// Enable responsiveConfig app-wide. You can remove this if you don't plan to build a responsive UI.
Ext.require('Ext.plugin.Responsive');

/**
 * The main application view
 */
export default function App() {

    return (
        <Router>
            <Routes/>
        </Router>
    )
    
}
