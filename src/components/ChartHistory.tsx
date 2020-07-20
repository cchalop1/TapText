import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { TapTextHistory } from './App';
import '../style/editor.css';

interface Props {
    history: Array<TapTextHistory>;
    initText: string;
}

export const ChartHistory: React.FC<Props> = (props) => {
    let chartRef: React.RefObject<HTMLCanvasElement> = React.createRef();

    useEffect(() => {
        const myChartRef = chartRef.current?.getContext("2d");
        const labels: Array<string> = props.history.map(el => el.date);
        const dataWordsPerMinutes: Array<number> = props.history.map(el => {
            let wordsperminute: number = (el.text.split(' ').length / (el.time / 60000));
            return wordsperminute;
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
            }
        });
    }, [chartRef, props.history]);



    return (
        <div className="graph">
            <h2>{(() => {
                const dataWordsPerMinutes: Array<number> = props.history.map(el => {
                    let wordsperminute: number = (el.text.split(' ').length / (el.time / 60000));
                    return wordsperminute;
                });
                let all: number = 0;
                for (let i = 0; i < dataWordsPerMinutes.length; i++) {
                    all += dataWordsPerMinutes[i];
                }
                const estimateTime: number = props.initText.split(' ').length / (Math.round(all / dataWordsPerMinutes.length) / 60);
                return `Averge words per minutes ${Math.round(all / dataWordsPerMinutes.length)} estimate time for this text ${Math.round(estimateTime * 100) / 100}s`;
            })()}</h2>
            <canvas
                id='myChart'
                ref={chartRef}
            />
        </div>
    );
}