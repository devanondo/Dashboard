import React from 'react';
import './Convert.scss';

import { BsCaretDownFill } from 'react-icons/bs';
import { useDarkModeContext } from '../../../context/themeContext';

const Convert: React.FC = () => {
    const { isDarkMode } = useDarkModeContext();

    const actionsStyles: React.CSSProperties = {
        backgroundColor: isDarkMode ? '#131313' : '#F8F8F9',
        // color: isDarkMode ? '#fff' : '#000',
    };

    return (
        <div className="convert">
            <div style={actionsStyles} className="convert__item">
                <div className="qty">100</div>

                <div className="dropdown">
                    USDT <BsCaretDownFill />
                </div>
            </div>
            <div style={actionsStyles} className="convert__item">
                <div className="qty">0.00043</div>

                <div className="dropdown orange">
                    BTC <BsCaretDownFill />
                </div>
            </div>

            <button>Convert Now</button>

            <p className="paragraph">
                The ultimate price and output is determined by the amount of tokens in the
                pool at the time of your swap.
            </p>
        </div>
    );
};

export default Convert;
