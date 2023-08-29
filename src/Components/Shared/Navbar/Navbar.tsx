import React from 'react';
import './Navbar.scss';
import { BiSearch, BiBell } from 'react-icons/bi';
import { BsLayoutSidebarInset } from 'react-icons/bs';
import { IoMdMore } from 'react-icons/io';
import { useDarkModeContext } from '../../../context/themeContext';

const Navbar: React.FC = () => {
    const { isDarkMode, toggleDarkMode, toggleSidebar } = useDarkModeContext();

    const styles: React.CSSProperties = {
        color: isDarkMode ? '#fff' : '#000',
        backgroundColor: isDarkMode ? '#1C1C25' : '#fff',
    };

    const profileStyle: React.CSSProperties = {
        backgroundColor: isDarkMode ? '#131313' : '#f2f8ff',
        // color: isDarkMode ? '#fff' : '#000',
    };

    return (
        <div style={styles} className="navbar">
            <div
                onClick={() => toggleSidebar()}
                style={{ fontSize: 20, cursor: 'pointer' }}
                className="side__toggle"
            >
                <BsLayoutSidebarInset />
            </div>

            <div className="search">
                <input type="text" placeholder="Search..." />

                <div className="icon">
                    <BiSearch />
                </div>
            </div>

            <div className="profile__info">
                <div className="theme__mode" onClick={() => toggleDarkMode()}>
                    <div className="check-box">
                        <input type="checkbox" checked={isDarkMode} />
                    </div>
                </div>
                <div className="icons">
                    <BiBell />
                </div>

                <div style={profileStyle} className="profile__wrapper">
                    <div className="profile">
                        <div className="avatar">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/147/147131.png"
                                alt=""
                            />
                        </div>

                        <div className="info">
                            <div className="name">Andy Warhol</div>

                            <div className="paragraph__light">andywarhold@email.com</div>
                        </div>
                    </div>

                    <div className="more__over">
                        <IoMdMore />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
