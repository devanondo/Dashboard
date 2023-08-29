import React, { useState } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import Convert from '../../Components/Dashboard/Content/Convert';
import HistoryTable from '../../Components/Dashboard/Content/HistoryTable';
import MarketTable from '../../Components/Dashboard/Content/MarketTable';
import SummeryCards from '../../Components/Dashboard/Content/SummeryCards';
import Card from '../../Components/Shared/Card/Card';
import CnadleChart from '../../Components/Shared/Charts/CnadleChart';
import PieChart from '../../Components/Shared/Charts/PieChart';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import Sidebar from '../../Components/Shared/Sidebar/Sidebar';
import './Dashboard.scss';
import { useDarkModeContext } from '../../context/themeContext';

const Dashboard: React.FC = () => {
    const [marketTableData, setMarketTableData] = useState<string>('All');
    const [candleCart, setCandleCarrt] = useState<string>('1H');

    const { isDarkMode, openSidebar, toggleSidebar } = useDarkModeContext();

    const styles: React.CSSProperties = {
        color: isDarkMode ? '#fff' : '#000',
    };
    const contentStyles: React.CSSProperties = {
        backgroundColor: isDarkMode ? '#12131A' : '#f0f8ff',
    };
    const actionsStyles: React.CSSProperties = {
        backgroundColor: isDarkMode ? '#131313' : '#F8F8F9',
    };

    const sidebarStyles: React.CSSProperties = {
        backgroundColor: isDarkMode ? '#1C1C25' : '#F8F8F9',
    };

    return (
        <div style={styles} className="dashboard__layout">
            <div
                style={{ ...styles, ...sidebarStyles }}
                className={`sidebar__container ${openSidebar && 'show__sidebar'}`}
            >
                <Sidebar />
            </div>

            <div style={contentStyles} className="content__container">
                <Navbar />

                <div className="content__wrapper">
                    <SummeryCards />

                    <div className="bar__chart__market__table">
                        <Card
                            title={
                                <div style={actionsStyles} className="candle__chart">
                                    <div className="info">
                                        <div className="title">BTCUSDT</div>

                                        <div className="paragraph__light">Bitcoin</div>
                                    </div>

                                    <div className="amount__info">
                                        <div className="am__info">
                                            <div className="title">$23,456</div>
                                            <div className="paragraph__light green bg__green">
                                                +23.6$
                                            </div>
                                        </div>

                                        <BsCaretDownFill />
                                    </div>
                                </div>
                            }
                            actions={
                                <div className="action">
                                    {['1H', '2H', '3H', '4H', '5H'].map((act, i) => (
                                        <div
                                            style={actionsStyles}
                                            onClick={() => setCandleCarrt(act)}
                                            className={`heading__6 ${
                                                candleCart === act && 'active'
                                            }`}
                                            key={i + act}
                                        >
                                            {act}
                                        </div>
                                    ))}
                                </div>
                            }
                        >
                            <CnadleChart />
                        </Card>
                        <Card
                            title="Market"
                            actions={
                                <div className="action">
                                    {['All', 'Metaverse', 'Game', 'Defi', 'NFT'].map(
                                        (act, i) => (
                                            <div
                                                style={actionsStyles}
                                                onClick={() => setMarketTableData(act)}
                                                className={`heading__6 ${
                                                    marketTableData === act && 'active'
                                                }`}
                                                key={i + act}
                                            >
                                                {act}
                                            </div>
                                        ),
                                    )}
                                </div>
                            }
                        >
                            <MarketTable />
                        </Card>
                    </div>

                    <div className="assets__footer">
                        <Card
                            className="div1"
                            title="Assets"
                            actions={
                                <button className="more__over__button">
                                    <FiMoreHorizontal />
                                </button>
                            }
                        >
                            <PieChart />
                        </Card>
                        <Card
                            className="div2"
                            title="Convert"
                            actions={
                                <button className="more__over__button">
                                    <FiMoreHorizontal />
                                </button>
                            }
                        >
                            <Convert />
                        </Card>
                        <Card
                            className="div3"
                            title="History"
                            actions={
                                <button className="view__all__button">View All</button>
                            }
                        >
                            <HistoryTable />
                        </Card>
                    </div>
                </div>
            </div>

            {openSidebar && (
                <div onClick={() => toggleSidebar()} className="overlay"></div>
            )}
        </div>
    );
};

export default Dashboard;
