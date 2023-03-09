import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Calendar from '../components/Calendar';
import AnimeQuote from '../components/AnimeQuote';


export default function Feed(props) {
    const { totalIncome, totalBills, paychecks, bills, animeQuote } = props;
    const chartRef = useRef();
    const [chartData, setChartData] = useState({});
    let myChart = useRef();

    useEffect(() => {
        setChartData({
            labels: ['Income', 'Bills'],
            datasets: [
                {
                    label: 'Total Income vs Total Bills',
                    data: [totalIncome, totalBills],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        });
    }, [totalIncome, totalBills]);

    useEffect(() => {
        if (chartRef.current && chartData.datasets) {
            if (myChart.current) {
                myChart.current.destroy();
            }
            myChart.current = new Chart(chartRef.current, {
                type: 'bar',
                data: chartData,
            });
        }
    }, [chartData, chartRef]);


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center pt-3 pb-3">
                        <div className="text-center">
                            <i className="fa-solid fa-laptop fa-2x"></i>
                            <Calendar paychecks={paychecks} bills={bills}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-center col-md-12">
                            <div className="card-body">
                                <h5 className="card-title">Budget</h5>
                                <canvas ref={chartRef}></canvas>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Total Income: {totalIncome}</li>
                                    <li className="list-group-item">Total Bills: {totalBills}</li>
                                </ul>
                                <a href="/budget" className="btn btn-primary">Update</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <i className="fa-solid fa-chart-column fa-2x"></i>
                                <h5 className="card-title">Quote of the Day</h5>
                                <AnimeQuote /> {/* Render the AnimeQuote component */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <i className="fa-regular fa-calendar-days fa-2x"></i>
                                <h5 className="card-title">Joke of the Day</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}