import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { TapTextHistory } from './App';
import '../style/editor.css';

interface Props {
    history: Array<TapTextHistory>;
}

export const ChartHistory: React.FC<Props> = (props) => {
    let chartRef: React.RefObject<HTMLCanvasElement> = React.createRef();

    useEffect(() => {
        const myChartRef = chartRef.current?.getContext("2d");
        const labels: string[] = props.history.map(el => el.date);
        const dataWordsPerMinutes: number[] = props.history.map(el => {
            let wordsPerMinute: number = (el.text.split(' ').length / (el.time / 60000));
            return wordsPerMinute;
        });

        new Chart(myChartRef as any, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Words per minutes",
                        data: dataWordsPerMinutes,
                    }
                ]
            },
            options: {
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    }
                },
                responsive: true,
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Chart.js Horizontal Bar Chart'
                }
            }
        });
    }, [chartRef, props.history]);

    return (
        <div className="graph">
            <canvas
                id='myChart'
                ref={chartRef}
            />
        </div>
    );
}