import React from 'react';
import './Card.scss';
import { useDarkModeContext } from '../../../context/themeContext';

interface ICard {
    actions?: React.ReactNode;
    title?: string | React.ReactNode;
    children?: React.ReactNode;
    className?: string;
}

const Card: React.FC<ICard> = ({ actions, title, children, className = '' }) => {
    const { isDarkMode } = useDarkModeContext();

    const styles: React.CSSProperties = {
        color: isDarkMode ? '#fff' : '#000',
        backgroundColor: isDarkMode ? '#1c1c25' : '#fff',
    };

    return (
        <div style={styles} className={`card  ${className}`}>
            <div className="flex aic jcsb header">
                <div className="title">{title}</div>

                <div className="actions">{actions}</div>
            </div>

            {children}
        </div>
    );
};

export default Card;
