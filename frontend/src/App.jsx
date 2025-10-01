import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AppContent from "./Componets/AppContent"
import AddUserPage from './Componets/AddUser';
import Desc from './Componets/Desc';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppContent />} />
                <Route path="/add" element={<AddUserPage />} />
                <Route path='/desc' element={<Desc />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;