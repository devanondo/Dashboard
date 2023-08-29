import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { FC } from 'react';
import { useDarkModeContext } from '../../../context/themeContext';

interface IChartCard {
    color?: string;
    data?: number[];
}

const PieChart: FC<IChartCard> = ({ data = [200, 55, 18, 20] }) => {
    const { isDarkMode } = useDarkModeContext();

    const options: ApexOptions = {
        colors: ['#2F80ED', '#B1D3FF', '#00C4DF', '#155AB6'],
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    labels: {
                        show: false,
                    },
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        labels: ['BTC', 'ETC', 'ADA', 'Others'],
        legend: {
            position: 'bottom', // Set the position of legends at the bottom
            markers: {
                width: 10,
                height: 10,
                radius: 3, // You can adjust these values to customize the marker style
            },
        },
        stroke: {
            width: 0, // Set to 0 to minimize the gap
        },
        // tooltip: {
        //     theme: isDarkMode ? 'dark' : 'light',
        // },

        theme: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    };

    return (
        <div style={{ maxWidth: '100%' }}>
            <ReactApexChart options={options} series={data} type="donut" height={250} />
            <style>
                {`.apexcharts-legend-series {
                    background-color: rgba(0, 96, 255, 0.10);
                    padding: 5px;
                    border-radius: 5px;
                    color: #2F80ED;
                }`}
            </style>
        </div>
    );
};

export default PieChart;
