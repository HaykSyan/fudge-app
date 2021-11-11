import React, { lazy, memo, useEffect } from "react";
import Circle from 'react-circle';
import { connect } from "react-redux";

const ShadowBox = lazy(() => import('../../components/ShadowBox'));
const BorderedBox = lazy(() => import('../../components/BorderedBox'));
const ChartComponent = lazy(() => import('../../components/ChartComponent'));
const IndustryNews = lazy(() => import('./industry-news'));
const TopComments = lazy(() => import('../../components/dashboard/TopComments'));
const Users = lazy(() => import('../../components/dashboard/Users'));

const Dashboard = () => {

    return (
        <>
            <div className="row">
                <div className="col-xl-6">
                    <p className="_title"><strong>Quick Start</strong></p>
                    <div className="d-flex">
                        <ShadowBox>
                            <div className="padding-31">
                                <h3>£563,350</h3>
                                <p>Your net worth as of today</p>    
                            </div>    
                        </ShadowBox>
                        <ShadowBox>
                            <div className="padding-31">
                                <h4>£12,430</h4>
                                <p>Monthy Cashflow</p>
                            </div>
                        </ShadowBox>
                        <ShadowBox>
                            <div className="padding-31">
                                <h4>£161,430</h4>
                                <p>Overall Liabilities</p>
                            </div>
                        </ShadowBox>
                    </div>
                </div>
                <div className="col-xl-6">
                    <p className="_title d-flex flex-row justify-content-between align-items-center position-relative">
                        <strong>My Financial Health</strong>
                        <span className="_view_f_h">View Financial Health</span>
                    </p>
                    <ShadowBox>
                        <div className="padding-y-15 padding-x-45 padding-t-45 text-center">
                            <div className="range_gradient">
                                <span className="_percentage">88%</span>
                                <span className="_point"></span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <strong className="_poor">POOR</strong>
                                <strong className="_average">AVERAGE</strong>
                                <strong className="_good">GOOD!</strong>
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div className="padding-y-10-22 padding-x-45 text-center">
                            <small>Your financial health status is <strong className="_green_underline">GOOD</strong>. However there’s still room for improvement. <a href="#">See how you can improve</a></small>
                        </div>
                    </ShadowBox>
                </div>
            </div>
            <div className="row  mt-5">
                <div className="col-xl-6">
                    <ChartComponent />
                </div>
                <div className="col-xl-6">
                    <p className="_title d-flex flex-row justify-content-between align-items-center position-relative">
                        <strong>My Goals</strong>
                        <span className="_view_f_h">View all Goals</span>
                    </p>
                    <div className="d-flex">
                        <ShadowBox className="flex-same">
                            <p className="text-center _title">
                                Retirement
                            </p>
                            <p className="text-center">
                                <Circle
                                    progress={65}
                                    animate={true}
                                    size="180"
                                    lineWidth="2"
                                    progressColor="#74B35A"
                                    bgColor="#E0E0E0    "
                                    textColor="#000"
                                />
                            </p>
                            <hr />
                            <div className="_circle_chart_num d-flex justify-content-between">
                                <span>£ 563,350</span>
                                <span>£ 2,000,000</span>
                            </div>
                        </ShadowBox>
                        <ShadowBox className="flex-same">
                            <p className="text-center _title">
                                Vacation Home
                            </p>
                            <p className="text-center">
                                <Circle
                                    progress={78}
                                    animate={true}
                                    size="180"
                                    lineWidth="2"
                                    progressColor="#74B35A"
                                    bgColor="#E0E0E0    "
                                    textColor="#000"
                                />
                            </p>
                            <hr />
                            <div className="_circle_chart_num d-flex justify-content-between">
                                <span>£ 101,342</span>
                                <span>£ 150,000</span>
                            </div>
                        </ShadowBox>
                        <ShadowBox className="flex-same">
                            <p className="text-center _title">
                                Travel
                            </p>
                            <p className="text-center">
                                <Circle
                                    progress={46}
                                    animate={true}
                                    size="180"
                                    lineWidth="2"
                                    progressColor="#74B35A"
                                    bgColor="#E0E0E0    "
                                    textColor="#000"
                                />
                            </p>
                            <hr />
                            <div className="_circle_chart_num d-flex justify-content-between">
                                <span>£ 46,350</span>
                                <span>£ 100,000</span>
                            </div>
                        </ShadowBox>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-xl-6">
                    <BorderedBox>
                        <p className="_title"><strong>Industry News</strong></p>
                        <IndustryNews />
                    </BorderedBox>
                </div>
                <div className="col-xl-3">
                    <BorderedBox>
                        <p className="_title"><strong>Top Comments</strong></p>
                        <TopComments />
                    </BorderedBox>
                </div>
                <div className="col-xl-3">
                    <BorderedBox>
                        <p className="_title"><strong>Users</strong></p>
                        <Users />
                    </BorderedBox>
                </div>
            </div>
        </>
    )
}


export default memo(Dashboard);
