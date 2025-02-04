import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import One from './Section/One/One';
import Two from './Section/Two/Two';
import Three from './Section/Three/Three';
import Four from './Section/Four/Four';
import Five from './Section/Five/Five';
import Section from './Components/Navbar/Section/Section';
import Home from './Components/Navbar/Home';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/two" element={<Two />} />
                <Route path="/three" element={<Three />} />
                <Route path="/four" element={<Four />} />
                <Route path="/five" element={<Five />} />
                <Route path="/contacts" element={<Section />} />
            </Routes>
        </Router>
    );
};

export default App;
