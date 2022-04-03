import React from 'react';
import './ActivityReport.css'

const ActivityReport = () => {

    return (

        <body>
            {/* <!-- ใส่ background พื้นหลังทั้งหน้าจอ ที่ tag body --> */}
            <div className="wrapper">
                {/* <!-- TOP NAV START --> */}
                {/* <!-- ใส่สี background nav ที่ คลาสนี้ --> */}
                <div className="topnav">
                    <nav className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-12 d-flex d-md-none top-btn-create">
                                {/* <!-- Left Button --> */}
                                <a href="#" id="nav-btn-logout" className="nav-btn-logout d-flex">
                                    <i className="fa fa-power-off"></i>
                                </a>
                                {/* <!-- Right Button --> */}
                                <a href="ActivityCreate.html" id="nav-btn-plus" className="nav-btn-plus d-flex">
                                    <i className="fa fa-plus"></i>
                                </a>
                            </div>
                            {/* <!-- Bottom Nav Icon --> */}
                            <div className="col-12 d-block d-md-none">
                                <ul className="menu-icon-bottom d-flex">
                                    <li className="menu-icon active">
                                        <a href="ActivityReport.html">
                                            <i className="fa fa-home"></i>
                                        </a>
                                    </li>
                                    <li className="menu-icon">
                                        <a href="#">
                                            <i className="fa fa-cart-flatbed"></i>
                                        </a>
                                    </li>
                                    <li className="menu-icon">
                                        <a href="#">
                                            <i className="fa fa-lemon"></i>
                                        </a>
                                    </li>
                                    <li className="menu-icon">
                                        <a href="#">
                                            <i className="fa fa-user"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Top Nav Menu --> */}
                            <div className="col-12 col-md-5 d-flex align-items-center">
                                <img src="src/img/gtf-logo.png" alt="Logo Goal to fit" className="logo-title d-none d-md-block" />
                                <h2 className="nav-title primary-text-color">Activity reports</h2>
                            </div>
                            <div className="col-md-7 d-none d-md-block">
                                <ul className="nav-item d-none d-md-flex">
                                    <li className="nav-list">
                                        <a href="ActivityReport.html" className="d-flex">
                                            <i className="fa fa-home mr-1"></i>
                                            <p>Home</p>
                                        </a>
                                    </li>
                                    <li className="nav-list">
                                        <a href="#" className="d-flex">
                                            <i className="fa fa-cart-flatbed mr-1"></i>
                                            <p>Shop</p>
                                        </a>
                                    </li>
                                    <li className="nav-list">
                                        <a href="#" className="d-flex">
                                            <i className="fa fa-lemon mr-1"></i>
                                            <p>Meal</p>
                                        </a>
                                    </li>
                                    <li className="nav-list">
                                        <a href="#" className="d-flex">
                                            <i className="fa fa-user mr-1"></i>
                                            <p>Profile</p>
                                        </a>
                                    </li>
                                    <li className="nav-list ml-md-4 ml-lg-5">
                                        <a href="#" className="d-flex primary-red">
                                            <i className="fa fa-power-off mr-1"></i>
                                            <p>Logout</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Top Nav Menu --> */}
                        </div>
                    </nav>
                </div>
                {/* <!-- TOP NAV END --> */}
                <hr className="d-none d-md-block mt-0 mb-0" />
                {/* <!-- -------------------------------------------------------------------------- -->

                        <!-- MAIN CONTENT SECTION START --> */}
                <section className="main-section">
                    <div className="container">
                        <div className="row">
                            {/* <!------------------------------- START COLUMN HERE ------------------------------->

                                    <!-- LEFT COLUMN START --> */}
                            <div className="col-12 col-md-12 col-lg-7 order-0 order-md-0 order-lg-0 my-2" id="date-day">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="weight-300 font-subhead font-sm-subhead">19/02/22</div>
                                    <div className="weight-300 font-subhead font-sm-subhead">Days 92</div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-7 order-1 order-md-4 order-lg-4" id="profile">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row body-top">
                                            <div className="col-8 d-flex justify-content-start align-items-center">
                                                <div className="profile-image mr-3">
                                                    <img src="src/img/gtf-logo.png" alt="profile image" />
                                                </div>
                                                <div className="profile-name font-head weight-900 primary-text-color text-left">John Doe</div>
                                            </div>
                                            <div className="create-btn col-4 d-none d-md-flex px-0">
                                                <div className="col-auto d-flex justify-content-end align-items-center">
                                                    <a href="ActivityCreate.html" className="d-flex justify-content-center primary-red align-items-center">
                                                        {/* <!-- Right Button --> */}
                                                        <i className="fa fa-plus"></i>
                                                        {/* <!-- Right Button --> */}
                                                        <p className="weight-300 primary-text-color ml-2" htmlFor="nav-btn-plus">Create activity</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-12 profile-goal">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="font-detail font-sm-detail text-left">&nbsp;</div>
                                                        <div className="font-detail font-sm-detail text-left">Achievement</div>
                                                        <div className="font-detail font-sm-detail text-left">Weigth</div>
                                                        <div className="font-detail font-sm-detail text-left">BMI</div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="font-detail font-sm-detail text-center">Start</div>
                                                        <div className="font-detail font-sm-detail text-center fair">30</div>
                                                        <div className="font-detail font-sm-detail text-center try">120</div>
                                                        <div className="font-detail font-sm-detail text-center try">30</div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="font-detail font-sm-detail text-center">Goal</div>
                                                        <div className="font-detail font-sm-detail text-center">62</div>
                                                        <div className="font-detail font-sm-detail text-center">90</div>
                                                        <div className="font-detail font-sm-detail text-center">20</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-5 order-5 order-md-4 order-lg-6" id="activity-list">
                                <div className="activity-title bolder-font font-subhead mt-3">Activity lists</div>
                                {/* <!-- Activities list --> */}
                                <div className="activity-container fixed-card">
                                    <div className="row activity-item">
                                        <div className="col-12">
                                            <div className="row justify-content-around w-100 mx-auto">
                                                <div className="col-3 activity-icon">
                                                    <img className="mx-auto" src="src/img/cyclist.png" alt="cyclist activity" />
                                                </div>
                                                <div className="col-9 justify-content-between">
                                                    <div className="row">
                                                        <div className="col-4 text-left">
                                                            <strong className="col-12 d-block p-0 text-center">Cyclist</strong>
                                                            <small className="col-12 d-block p-0 text-center">19/02/22</small>
                                                        </div>
                                                        <div className="col-8 activity-result welldone">
                                                            <strong className="col-12 d-block p-0 text-center">209 / 190 km</strong>
                                                            <small className="col-12 d-block p-0 text-center">4:20:19 hrs</small>
                                                        </div>
                                                        {/* <!-- Change to modal or other way to shown up detail in future --> */}
                                                        <details className="col-12 mx-auto d-block font-detail">
                                                            <summary className="weight-300">details</summary>
                                                            <p className="ml-2">Lorem ipsum dolor sit amet.</p>
                                                        </details>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row activity-item">
                                        <div className="col-12">
                                            <div className="row justify-content-around w-100 mx-auto">
                                                <div className="col-3 activity-icon">
                                                    <img className="mx-auto" src="src/img/running.png" alt="running activity" />
                                                </div>
                                                <div className="col-9 justify-content-between">
                                                    <div className="row">
                                                        <div className="col-4 text-left">
                                                            <strong className="col-12 d-block p-0 text-center">Running</strong>
                                                            <small className="col-12 d-block p-0 text-center">19/02/22</small>
                                                        </div>
                                                        <div className="col-8 activity-result try">
                                                            <strong className="col-12 d-block p-0 text-center">2 / 10 km</strong>
                                                            <small className="col-12 d-block p-0 text-center">1:05:19 hrs</small>
                                                        </div>
                                                        {/* <!-- Change to modal or other way to shown up detail in future --> */}
                                                        <details className="col-12 mx-auto d-block font-detail">
                                                            <summary className="weight-300">details</summary>
                                                            <p className="ml-2">Lorem ipsum dolor sit amet.</p>
                                                        </details>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row activity-item">
                                        <div className="col-12">
                                            <div className="row justify-content-around w-100 mx-auto">
                                                <div className="col-3 activity-icon">
                                                    <img className="mx-auto" src="src/img/swimming.png" alt="swimming activity" />
                                                </div>
                                                <div className="col-9 justify-content-between">
                                                    <div className="row">
                                                        <div className="col-4 text-left">
                                                            <strong className="col-12 d-block p-0 text-center">Swimming</strong>
                                                            <small className="col-12 d-block p-0 text-center">19/02/22</small>
                                                        </div>
                                                        <div className="col-8 activity-result fair">
                                                            <strong className="col-12 d-block p-0 text-center">5 : 100</strong>
                                                            <small className="col-12 d-block p-0 text-center">0:45:43 hrs</small>
                                                        </div>
                                                        {/* <!-- Change to modal or other way to shown up detail in future --> */}
                                                        <details className="col-12 mx-auto d-block font-detail">
                                                            <summary className="weight-300">details</summary>
                                                            <p className="ml-2">Lorem ipsum dolor sit amet.</p>
                                                        </details>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row activity-item">
                                        <div className="col-12">
                                            <div className="row justify-content-around w-100 mx-auto">
                                                <div className="col-3 activity-icon">
                                                    <img className="mx-auto" src="src/img/cyclist.png" alt="cyclist activity" />
                                                </div>
                                                <div className="col-9 justify-content-between">
                                                    <div className="row">
                                                        <div className="col-4 text-left">
                                                            <strong className="col-12 d-block p-0 text-center">Cyclist</strong>
                                                            <small className="col-12 d-block p-0 text-center">19/02/22</small>
                                                        </div>
                                                        <div className="col-8 activity-result welldone">
                                                            <strong className="col-12 d-block p-0 text-center">209 / 190 km</strong>
                                                            <small className="col-12 d-block p-0 text-center">4:20:19 hrs</small>
                                                        </div>
                                                        {/* <!-- Change to modal or other way to shown up detail in future --> */}
                                                        <details className="col-12 mx-auto d-block font-detail">
                                                            <summary className="weight-300">details</summary>
                                                            <p className="ml-2">Lorem ipsum dolor sit amet.</p>
                                                        </details>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row activity-item">
                                        <div className="col-12">
                                            <div className="row justify-content-around w-100 mx-auto">
                                                <div className="col-3 activity-icon">
                                                    <img className="mx-auto" src="src/img/running.png" alt="running activity" />
                                                </div>
                                                <div className="col-9 justify-content-between">
                                                    <div className="row">
                                                        <div className="col-4 text-left">
                                                            <strong className="col-12 d-block p-0 text-center">Running</strong>
                                                            <small className="col-12 d-block p-0 text-center">19/02/22</small>
                                                        </div>
                                                        <div className="col-8 activity-result try">
                                                            <strong className="col-12 d-block p-0 text-center">2 / 10 km</strong>
                                                            <small className="col-12 d-block p-0 text-center">1:05:19 hrs</small>
                                                        </div>
                                                        {/* <!-- Change to modal or other way to shown up detail in future --> */}
                                                        <details className="col-12 mx-auto d-block font-detail">
                                                            <summary className="weight-300">details</summary>
                                                            <p className="ml-2">Lorem ipsum dolor sit amet.</p>
                                                        </details>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row activity-item">
                                        <div className="col-12">
                                            <div className="row justify-content-around w-100 mx-auto">
                                                <div className="col-3 activity-icon">
                                                    <img className="mx-auto" src="src/img/swimming.png" alt="swimming activity" />
                                                </div>
                                                <div className="col-9 justify-content-between">
                                                    <div className="row">
                                                        <div className="col-4 text-left">
                                                            <strong className="col-12 d-block p-0 text-center">Swimming</strong>
                                                            <small className="col-12 d-block p-0 text-center">19/02/22</small>
                                                        </div>
                                                        <div className="col-8 activity-result fair">
                                                            <strong className="col-12 d-block p-0 text-center">5 : 100</strong>
                                                            <small className="col-12 d-block p-0 text-center">0:45:43 hrs</small>
                                                        </div>
                                                        {/* <!-- Change to modal or other way to shown up detail in future --> */}
                                                        <details className="col-12 mx-auto d-block font-detail">
                                                            <summary className="weight-300">details</summary>
                                                            <p className="ml-2">Lorem ipsum dolor sit amet.</p>
                                                        </details>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row activity-item">
                                        <div className="col-12">
                                            <div className="row justify-content-around w-100 mx-auto">
                                                <div className="col-3 activity-icon">
                                                    <img className="mx-auto" src="src/img/cyclist.png" alt="cyclist activity" />
                                                </div>
                                                <div className="col-9 justify-content-between">
                                                    <div className="row">
                                                        <div className="col-4 text-left">
                                                            <strong className="col-12 d-block p-0 text-center">Cyclist</strong>
                                                            <small className="col-12 d-block p-0 text-center">19/02/22</small>
                                                        </div>
                                                        <div className="col-8 activity-result welldone">
                                                            <strong className="col-12 d-block p-0 text-center">209 / 190 km</strong>
                                                            <small className="col-12 d-block p-0 text-center">4:20:19 hrs</small>
                                                        </div>
                                                        {/* <!-- Change to modal or other way to shown up detail in future --> */}
                                                        <details className="col-12 mx-auto d-block font-detail">
                                                            <summary className="weight-300">details</summary>
                                                            <p className="ml-2">Lorem ipsum dolor sit amet.</p>
                                                        </details>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row activity-item">
                                        <div className="col-12">
                                            <div className="row justify-content-around w-100 mx-auto">
                                                <div className="col-3 activity-icon">
                                                    <img className="mx-auto" src="src/img/running.png" alt="running activity" />
                                                </div>
                                                <div className="col-9 justify-content-between">
                                                    <div className="row">
                                                        <div className="col-4 text-left">
                                                            <strong className="col-12 d-block p-0 text-center">Running</strong>
                                                            <small className="col-12 d-block p-0 text-center">19/02/22</small>
                                                        </div>
                                                        <div className="col-8 activity-result try">
                                                            <strong className="col-12 d-block p-0 text-center">2 / 10 km</strong>
                                                            <small className="col-12 d-block p-0 text-center">1:05:19 hrs</small>
                                                        </div>
                                                        {/* <!-- Change to modal or other way to shown up detail in future --> */}
                                                        <details className="col-12 mx-auto d-block font-detail">
                                                            <summary className="weight-300">details</summary>
                                                            <p className="ml-2">Lorem ipsum dolor sit amet.</p>
                                                        </details>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row activity-item">
                                        <div className="col-12">
                                            <div className="row justify-content-around w-100 mx-auto">
                                                <div className="col-3 activity-icon">
                                                    <img className="mx-auto" src="src/img/swimming.png" alt="swimming activity" />
                                                </div>
                                                <div className="col-9 justify-content-between">
                                                    <div className="row">
                                                        <div className="col-4 text-left">
                                                            <strong className="col-12 d-block p-0 text-center">Swimming</strong>
                                                            <small className="col-12 d-block p-0 text-center">19/02/22</small>
                                                        </div>
                                                        <div className="col-8 activity-result fair">
                                                            <strong className="col-12 d-block p-0 text-center">5 : 100</strong>
                                                            <small className="col-12 d-block p-0 text-center">0:45:43 hrs</small>
                                                        </div>
                                                        {/* <!-- Change to modal or other way to shown up detail in future --> */}
                                                        <details className="col-12 mx-auto d-block font-detail">
                                                            <summary className="weight-300">details</summary>
                                                            <p className="ml-2">Lorem ipsum dolor sit amet.</p>
                                                        </details>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Activities list --> */}
                            </div>
                            {/* <!-- LEFT COLUMN END -->

                                    <!-- RIGHT COLUMN START --> */}
                            <div className="col-12 col-md-4 col-lg-7 order-3 order-md-5 order-lg-5 d-none d-md-block mt-3" id="donut">
                                <div className="card">
                                    <div className="card-body d-md-flex d-lg-flex justify-content-center align-items-center text-center">
                                        {/* <!-- Donut chart --> */}
                                        <svg className="m-1 circle-chart-day"
                                            viewBox="0 0 33.83098862 33.83098862"
                                            width="160"
                                            height="160"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle className="circle-chart-day-background"
                                                stroke="#efefef"
                                                strokeWidth="2"
                                                fill="none"
                                                cx="16.91549431"
                                                cy="16.91549431"
                                                r="15.91549431" />
                                            <circle className="circle-chart-day-circle circle-chart-day-circle-negative"
                                                stroke="#00acc1"
                                                strokeWidth="2"
                                                strokeDasharray="60,100"
                                                strokeLinecap="round"
                                                fill="none"
                                                cx="16.91549431"
                                                cy="16.91549431"
                                                r="15.91549431" />
                                            <g className="circle-chart-day-info">
                                                <text className="circle-chart-day-percent"
                                                    x="16.91549431"
                                                    y="15.5"
                                                    alignmentBaseline="central"
                                                    textAnchor="middle"
                                                    fontSize="8">
                                                    -60%
                                                </text>
                                                <text className="circle-chart-day-subline"
                                                    x="16.91549431"
                                                    y="20.5"
                                                    alignmentBaseline="central"
                                                    textAnchor="middle"
                                                    fontSize="2.5">
                                                    Today
                                                </text>
                                            </g>
                                        </svg>
                                        <svg className="m-1 circle-chart-week"
                                            viewBox="0 0 33.83098862 33.83098862"
                                            width="160"
                                            height="160"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle className="circle-chart-week-background"
                                                stroke="#efefef"
                                                strokeWidth="2"
                                                fill="none"
                                                cx="16.91549431"
                                                cy="16.91549431"
                                                r="15.91549431" />
                                            <circle className="circle-chart-week-circle"
                                                stroke="#00acc1"
                                                strokeWidth="2"
                                                strokeDasharray="30,100"
                                                strokeLinecap="round"
                                                fill="none"
                                                cx="16.91549431"
                                                cy="16.91549431"
                                                r="15.91549431" />
                                            <g className="circle-chart-week-info">
                                                <text className="circle-chart-week-percent"
                                                    x="16.91549431"
                                                    y="15.5"
                                                    alignmentBaseline="central"
                                                    textAnchor="middle"
                                                    fontSize="8">
                                                    30%
                                                </text>
                                                <text className="circle-chart-week-subline"
                                                    x="16.91549431"
                                                    y="20.5"
                                                    alignmentBaseline="central"
                                                    textAnchor="middle"
                                                    fontSize="2.5">
                                                    Last week
                                                </text>
                                            </g>
                                        </svg>
                                        <svg className="m-1 circle-chart-year"
                                            viewBox="0 0 33.83098862 33.83098862"
                                            width="160"
                                            height="160"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle className="circle-chart-year-background"
                                                stroke="#efefef"
                                                strokeWidth="2"
                                                fill="none"
                                                cx="16.91549431"
                                                cy="16.91549431"
                                                r="15.91549431" />
                                            <circle className="circle-chart-year-circle"
                                                stroke="#00acc1"
                                                strokeWidth="2"
                                                strokeDasharray="10,100"
                                                strokeLinecap="round"
                                                fill="none"
                                                cx="16.91549431"
                                                cy="16.91549431"
                                                r="15.91549431" />
                                            <g className="circle-chart-year-info">
                                                <text className="circle-chart-year-percent"
                                                    x="16.91549431"
                                                    y="15.5"
                                                    alignmentBaseline="central"
                                                    textAnchor="middle"
                                                    fontSize="8">
                                                    10%
                                                </text>
                                                <text className="circle-chart-year-subline"
                                                    x="16.91549431"
                                                    y="20.5"
                                                    alignmentBaseline="central"
                                                    textAnchor="middle"
                                                    fontSize="2.5">
                                                    This year
                                                </text>
                                            </g>
                                        </svg>
                                        {/* <!-- Donut chart --> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12 order-last px-0" id="ads">
                                <div className="ads-fit">
                                    <img src="src/img/Masters-Sprint.jpg" alt="master athlete sprint" className="ads-img" />
                                    <h3 className="ads-head weight-900 p-2 text-right">GO<br />TO BE<br />MASTER</h3>
                                </div>
                            </div>
                            {/* <!-- RIGHT COLUMN END --> */}


                            {/* <!------------------------------- END COLUMN HERE -------------------------------> */}
                        </div>
                    </div>
                </section>
                {/* <!-- MAIN CONTENT SECTION END --> */}
                <div className="push"></div>
            </div>
        </body>

    );
}

export default ActivityReport;