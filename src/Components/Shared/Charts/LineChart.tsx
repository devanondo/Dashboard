import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { FC } from 'react';
import { useDarkModeContext } from '../../../context/themeContext';

interface IChartCard {
    color?: string;
    data?: number[];
}

const LineChart: FC<IChartCard> = ({
    color = '#04C518',
    data = [31, 140, 28, 251, 109, 100, 30, 251, 109, 100, 300],
}) => {
    const { isDarkMode } = useDarkModeContext();

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'line',
            offsetX: 0,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },

        stroke: {
            show: true,
            curve: 'smooth',
            colors: [color],
            width: 2,
            dashArray: 0,
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
            padding: {
                top: -50,
                right: 0,
                bottom: -20,
                left: 0,
            },
        },
        // tooltip: {
        //     theme: isDarkMode ? 'dark' : 'light',
        // },
        theme: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    };

    const series = [
        {
            name: '',
            data: data,
        },
    ];

    return (
        <div style={{ maxWidth: '100%' }}>
            <ReactApexChart options={options} series={series} type="line" height={90} />
        </div>
    );
};

export default LineChart;
