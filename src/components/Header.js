import React, { useState } from 'react';
import './Header.css'; // Import CSS for styling

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className='container container1'>
                <div className="nav-logo">
                    <img src='https://blueslag.com/wp-content/uploads/2021/05/1.png' alt="Logo" />
                </div>
                <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item"><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li className="nav-item"><a href="#about" onClick={closeMenu}>About</a></li>
                    <li className="nav-item"><a href="#work" onClick={closeMenu}>How we work</a></li>
                    <li className="nav-item"><a href="#whyus" onClick={closeMenu}>Why us</a></li>
                    <li className="nav-item"><a href="#result" onClick={closeMenu}>Results</a></li>
                    <li className="nav-item"><a href="#faq" onClick={closeMenu}>FAQ</a></li>
                </ul>
                <div className="call-btn-container">
                    <button className="call-btn">Schedule Call</button>
                    <div className="burger" onClick={toggleMenu}>
                        <div className={isOpen ? "line line1 active" : "line line1"}></div>
                        <div className={isOpen ? "line line2 active" : "line line2"}></div>
                        <div className={isOpen ? "line line3 active" : "line line3"}></div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
