import React, { ReactNode } from 'react';
import './SummeryCard.scss';

import { AiOutlineEye } from 'react-icons/ai';
import LineChart from '../../Shared/Charts/LineChart';
import CountUp from 'react-countup';
import Card from '../../Shared/Card/Card';

interface ISummeryCard {
    title?: string;
    subTitle?: string;
    eyeIcon?: boolean;
    value?: number;
    foTitle1?: string;
    foTitle2?: number;
    foTitle3?: number;
    icon: ReactNode;
    iconColor: string;
    chart?: boolean | number[];
}

function hexToRgb(hex: string) {
    // Remove '#' if present
    hex = hex.replace('#', '');

    // Parse the hex code into red, green, and blue components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgb(${r}, ${g}, ${b}, 0.2)`;
}

const SummeryCard: React.FC<ISummeryCard> = ({
    title,
    subTitle,
    eyeIcon,
    value,
    foTitle1,
    foTitle2 = 14554.574,
    foTitle3,
    icon,
    iconColor,
    chart,
}) => {
    const iconStyle: React.CSSProperties = {
        color: iconColor,
        background: hexToRgb(iconColor),
    };

    return (
        <Card>
            <div className="summery__card">
                <div className="header">
                    <div style={iconStyle} className="icon">
                        {icon}
                    </div>

                    <div>
                        <div className="sub__title">{title || 'Estimated Balance'}</div>

                        <div className="paragraph__light">{subTitle}</div>
                    </div>
                    {eyeIcon && (
                        <div className="eye__icon">
                            <AiOutlineEye />
                        </div>
                    )}
                </div>

                <div className="middle">
                    <div className={`heading__3 ${chart && 'small'}`}>
                        $
                        <CountUp
                            end={value || 123987}
                            duration={5}
                            start={value ? value - 100 : 123987 - 100}
                        />
                    </div>
                    {chart && (
                        <div className="chart">
                            <LineChart color={iconColor} />
                        </div>
                    )}
                </div>

                <div className="footer flex jcsb aic">
                    <div className="paragraph__light">{foTitle1 || 'Monthly Profit'}</div>

                    {foTitle2 > 0 ? (
                        <div className=" paragraph__light green">
                            +$ {foTitle2 || 2560.78}
                        </div>
                    ) : (
                        <div className="paragraph__light red">
                            {' '}
                            -$ {Math.abs(foTitle2) || 1460.78}
                        </div>
                    )}

                    <div className="paragraph__light green bg__green">
                        +{foTitle3 || '14.67'}%
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SummeryCard;
