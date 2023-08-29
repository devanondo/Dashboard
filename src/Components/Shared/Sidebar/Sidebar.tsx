import React from 'react';
import { Images } from '../../../utils/data';
import './Sidebar.scss';

import { AiTwotoneSetting } from 'react-icons/ai';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { FiHelpCircle, FiLogOut } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { MdDashboard } from 'react-icons/md';
import { TbArrowsLeftRight } from 'react-icons/tb';
import { useDarkModeContext } from '../../../context/themeContext';

const Sidebar: React.FC = () => {
    const { isDarkMode } = useDarkModeContext();

    return (
        <div className="sidebar">
            <div className="logo">
                <img src={isDarkMode ? Images.LogoTextwhite : Images.LogoText} alt="" />
            </div>

            <ul>
                <li className="active">
                    <MdDashboard /> Dashboard
                </li>
                <li className="">
                    <BiSolidBarChartAlt2 /> Market
                </li>
                <li className="">
                    <TbArrowsLeftRight /> Transactions
                </li>
                <li className="">
                    <GoPerson /> Profile
                </li>
                <li className="">
                    <AiTwotoneSetting /> Setting
                </li>
            </ul>

            <div className="divider"></div>
            <ul>
                <li className="">
                    <FiHelpCircle /> Help
                </li>
                <li className="">
                    <FiLogOut /> Log Out
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
