import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Calendar from '../components/Calendar';

export default function Feed(props) {
    const { totalIncome, totalBills } = props;
    const chartRef = useRef();
    const [chartData, setChartData] = useState({});

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
            const myChart = new Chart(chartRef.current, {
                type: 'bar',
                data: chartData,
            });
        }
    }, [chartData, chartRef]);


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <i className="fa-solid fa-laptop fa-2x"></i>
                                <h5 className="card-title">Calendar</h5>
                                <Calendar />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Budget</h5>
                                <canvas ref={chartRef}></canvas>
                                <p className="card-text">Quick overview of your overall monthly income and deductions!</p>
                                <a href="/budget" className="btn btn-primary">Update</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <i className="fa-solid fa-chart-column fa-2x"></i>
                                <h5 className="card-title">Groups</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card text-center">
                            <div className="card-body">
                                <i className="fa-regular fa-calendar-days fa-2x"></i>
                                <h5 className="card-title">Challenges</h5>
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