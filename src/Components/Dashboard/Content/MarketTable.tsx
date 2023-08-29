import React from 'react';
import './MarketTable.scss';

const MarketTable: React.FC = () => {
    return (
        <div className="market__table">
            <table width="100%">
                <tbody>
                    <tr>
                        <td align="left">
                            <h5 className="heading__5 tag__title">BTCUSDT</h5>
                        </td>
                        <td align="left">
                            <h5 className="heading__5 gray">Bitcoin</h5>
                        </td>
                        <td align="right">
                            <div className="heading__5">$24536</div>
                        </td>
                        <td align="right">
                            <div className="paragraph__light green bg__green">+2.48%</div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <h5 className="heading__5 tag__title tag__title">AXSUSDT</h5>
                        </td>
                        <td align="left">
                            <h5 className="heading__5 gray">Axie Infinity</h5>
                        </td>
                        <td align="right">
                            <div className="heading__5">$24536</div>
                        </td>
                        <td align="right">
                            <div className="paragraph__light red bg__red">-2.45%</div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <h5 className="heading__5 tag__title">ETHUSDT</h5>
                        </td>
                        <td align="left">
                            <h5 className="heading__5 gray">Ethereum</h5>
                        </td>
                        <td align="right">
                            <div className="heading__5">$24536</div>
                        </td>
                        <td align="right">
                            <div className="paragraph__light red bg__red">-0.3%</div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <h5 className="heading__5 tag__title">SOLUSDT</h5>
                        </td>
                        <td align="left">
                            <h5 className="heading__5 gray">Solana</h5>
                        </td>
                        <td align="right">
                            <div className="heading__5">$24536</div>
                        </td>
                        <td align="right">
                            <div className="paragraph__light red bg__red"> +11.1%</div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <h5 className="heading__5 tag__title">BNBUSDT</h5>
                        </td>
                        <td align="left">
                            <h5 className="heading__5 gray">Binance </h5>
                        </td>
                        <td align="right">
                            <div className="heading__5">$24536</div>
                        </td>
                        <td align="right">
                            <div className="paragraph__light red bg__red"> +6.1%</div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <h5 className="heading__5 tag__title">ADAUSDT</h5>
                        </td>
                        <td align="left">
                            <h5 className="heading__5 gray">Cardano </h5>
                        </td>
                        <td align="right">
                            <div className="heading__5">$24536</div>
                        </td>
                        <td align="right">
                            <div className="paragraph__light red bg__red"> -1.4%</div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="view__all">
                <button className="view__all__button">View All</button>
            </div>
        </div>
    );
};

export default MarketTable;
