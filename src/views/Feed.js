import React, { useEffect, useState } from 'react';
// import Budget from './Budget';

export default function Feed() {
    // const { income, bills, leftOver } = Budget();

    return (
        <div className="bottom-section">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card border-0">
                        <div className="mt-5"><i className="fa-solid fa-laptop fa-2xl"></i></div>
                        <div className="card-body">
                            <h5 className="card-title text-center">Calendar</h5>
                            <p className="card-text text-center"></p>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <a className="btn btn-outline-light btn-lg text-dark border border-dark"
                                    href="how_it_works.html" role="button">Learn More&nbsp;&nbsp;&nbsp;<i
                                        className="fa-solid fa-greater-than"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-0">
                        <div className="mt-5"><i className="fa-regular fa-square-check fa-2xl"></i></div>
                        <div className="card-body">
                            <h5 className="card-title">Budget</h5>
                            {/* <p className="card-text"> */}
                                {/* Total Income: {income}
                            <br />
                                Total Bills: {bills}
                            <br />
                                Left Over: {leftOver}</p> */}
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <a className="btn btn-outline-light btn text-dark border border-dark"
                                    href="/budget" role="button">Update</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-0">
                        <div className="mt-5"><i className="fa-solid fa-chart-column fa-2xl"></i></div>
                        <div className="card-body">
                            <h5 className="card-title">Groups</h5>
                            <p className="card-text"></p>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <a className="btn btn-outline-light btn-lg text-dark border border-dark"
                                    href="how_it_works.html" role="button">Learn More&nbsp;&nbsp;&nbsp;<i
                                        className="fa-solid fa-greater-than"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card border-0">
                        <div className="mt-5"><i className="fa-regular fa-calendar-days fa-2xl"></i></div>
                        <div className="card-body">
                            <h5 className="card-title">Challenges</h5>
                            <p className="card-text"></p>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <a className="btn btn-outline-light btn-lg text-dark border border-dark"
                                    href="how_it_works.html" role="button">Learn More&nbsp;&nbsp;&nbsp;<i
                                        className="fa-solid fa-greater-than"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}