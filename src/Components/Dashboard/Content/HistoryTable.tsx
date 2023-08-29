import React from 'react';
import './HistoryTable.scss';
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';

const HistoryTable: React.FC = () => {
    return (
        <div className="history__table">
            <table width="100%">
                <tbody>
                    <tr>
                        <td align="left">
                            <div className="arrow down">
                                <HiArrowSmDown />
                            </div>
                        </td>
                        <td align="left">
                            <h5 className="heading__5 tag__title">BTCUSDT</h5>
                        </td>
                        <td align="right">
                            <h5 className="heading__5 green">+$23,738</h5>
                        </td>
                        <td width={200} align="right">
                            <div className="heading__5">11:34 AM</div>
                        </td>
                        <td align="right">
                            <div className="paragraph__tag orange bg__orange">
                                pending
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <div className="arrow rise">
                                <HiArrowSmUp />
                            </div>
                        </td>
                        <td align="left">
                            <h5 className="heading__5 tag__title tag__title">AXSUSDT</h5>
                        </td>
                        <td align="right">
                            <h5 className="heading__5 gray"> -$576</h5>
                        </td>
                        <td align="right">
                            <div className="heading__5">06:01 AM</div>
                        </td>
                        <td align="right">
                            <div className="paragraph__tag green bg__green"> done</div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <div className="arrow down">
                                <HiArrowSmUp />
                            </div>
                        </td>
                        <td align="left">
                            <h5 className="heading__5 tag__title tag__title">DOGEUSDT</h5>
                        </td>
                        <td align="right">
                            <h5 className="heading__5 gray"> -$576</h5>
                        </td>
                        <td align="right">
                            <div className="heading__5">06:01 AM</div>
                        </td>
                        <td align="right">
                            <div className="paragraph__tag green bg__green"> done</div>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <div className="arrow rise">
                                <HiArrowSmUp />
                            </div>
                        </td>
                        <td align="left">
                            <h5 className="heading__5 tag__title tag__title">FTMUSDT</h5>
                        </td>
                        <td align="right">
                            <h5 className="heading__5 gray"> -$576</h5>
                        </td>
                        <td align="right">
                            <div className="heading__5">06:01 AM</div>
                        </td>
                        <td align="right">
                            <div className="paragraph__tag green bg__green"> done</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HistoryTable;
