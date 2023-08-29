import React from 'react';
import './SummeryCards.scss';
import SummeryCard from '../SummeryCard/SummeryCard';
import { BiSolidWallet, BiBitcoin } from 'react-icons/bi';
import { FaEthereum } from 'react-icons/fa';
import { TbCurrencySolana } from 'react-icons/tb';

const SummeryCards: React.FC = () => {
    return (
        <div className="summery__cards">
            <div className="parent">
                <div className="div1">
                    <SummeryCard
                        eyeIcon={true}
                        iconColor="#3380FF"
                        icon={<BiSolidWallet />}
                    />
                </div>
                <div className="div1">
                    <SummeryCard
                        title="BTCUSDT"
                        subTitle="Bitcoin"
                        value={23738}
                        iconColor="#FFB849"
                        icon={<BiBitcoin />}
                        foTitle1="PNL Daily"
                        foTitle2={-16.78}
                        foTitle3={14.67}
                        chart={true}
                    />
                </div>
                <div className="div1">
                    <SummeryCard
                        title="ETHUSDT"
                        subTitle="Ethereum"
                        value={23738}
                        iconColor="#9181DB"
                        icon={<FaEthereum />}
                        foTitle1="PNL Daily"
                        foTitle2={189.91}
                        foTitle3={24.67}
                        chart={true}
                    />
                </div>
                <div className="div1">
                    <SummeryCard
                        title="SOLUSDT"
                        subTitle="Solana"
                        value={23738}
                        iconColor="#F0A0A0"
                        icon={<TbCurrencySolana />}
                        foTitle1="PNL Daily"
                        foTitle2={189.91}
                        foTitle3={24.67}
                        chart={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default SummeryCards;
