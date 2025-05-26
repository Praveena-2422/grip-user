import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import ReactApexChart from 'react-apexcharts';
import useReactApexChart from '../../hook/useReactApexChart';
import { Link } from "react-router-dom";
import { Modal } from 'react-bootstrap';




const SalesStatisticOne = () => {




    let { donutChartSeriesTwo, donutChartOptionsTwo } = useReactApexChart()
    let { lineDataLabelSeries, lineDataLabelOptions } = useReactApexChart()

    let { createChart } = useReactApexChart()



    return (
        <>




            <div className="col-xxl-12 col-xl-12">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                            <h6 className="mb-2 fw-bold text-lg mb-0">Referrals Given</h6>
                            <select className="form-select form-select-sm w-30 bg-base border text-secondary-light" defaultValue="Today">
                                <option value="Today">Last 6 Months</option>
                                <option value="Weekly">Last 12 Months</option>
                                <option value="Monthly">Lifetime</option>
                            </select>
                        </div>

                        <div className="row gy-4">
                            {/* Left side with chart */}
                            {/* <div className="col-lg-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <div className="d-flex flex-wrap align-items-center gap-2 mt-8">
                                            <h6 className="mb-0">$27,200</h6>
                                            <span className="text-sm fw-semibold rounded-pill bg-success-focus text-success-main border br-success px-8 py-4 line-height-1 d-flex align-items-center gap-1">
                                                10% <Icon icon="bxs:up-arrow" className="text-xs" />
                                            </span>
                                            <span className="text-xs fw-medium">+ $1500 Per Day</span>
                                        </div>
                                        <ReactApexChart options={chartOptions} series={chartSeries} type="area" height={464} />
                                    </div>
                                </div>
                            </div> */}

                            <div className="col-md-4">
                                <div className="card h-100 p-0">

                                    <div className="card-body p-24">
                                        <ReactApexChart id="lineDataLabel" options={lineDataLabelOptions} series={lineDataLabelSeries} type="line"
                                            height={450} />
                                    </div>
                                </div>
                            </div>

                            {/* Right side details */}
                            <div className="col-xxl-8">
                                <div className="row gy-4">
                                    {/* Left Card */}
                                    <div className="col-lg-4">
                                        <div className="cardd">
                                            <div className="carbody p20">
                                                <div className="row g-3">
                                                    <div className="col-md-12">
                                                        <div className="card p-3 shadow-2 radius-8 h-100 gradient-deep-two-1 border border-white">
                                                            <div className="card-body p-10">
                                                                <div className="align-items-center justify-content-between gap-1 mb-3">
                                                                    <div className=" align-items-center">
                                                                        <span className="mb-10 w-48-px h-48-px bg-cyan-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                            <img
                                                                                src="assets/images/home-eleven/icons/home-eleven-icon1.svg"
                                                                                alt=""
                                                                            />
                                                                        </span>
                                                                        <div>
                                                                            <span className="fw-medium text-secondary-light text-md">
                                                                                Revenue Received To My Business
                                                                            </span>
                                                                            <h6 className="fw-semibold mt-2">₹50,000</h6>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <p className="text-sm mb-0 d-flex align-items-center flex-wrap gap-12 mt-12 text-secondary-light">
                                                                    <span className="bg-success-focus px-6 py-2 rounded-2 fw-medium text-success-main text-sm d-flex align-items-center gap-1">
                                                                        <i className="ri-arrow-right-up-line" /> 95%
                                                                    </span>{" "}
                                                                    Last month $24,000.00
                                                                </p> */}

                                                                <div className="d-flex align-items-center flex-wrap mt-10 gap-8">
                                                                    <Link
                                                                        to="#"
                                                                        className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                                    >
                                                                        Submit
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                                    >
                                                                        Review
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="trail-bg h-100 text-center d-flex flex-column justify-content-between align-items-center p-16 radius-8">
                                                            <h6 className="text-black text-xl mb-3 mt-3">Reports</h6>
                                                            <div className='mb-3'>

                                                                <Link
                                                                    to="#"
                                                                    className="btn py-8 mb-3 rounded-pill w-100 bg-gradient-blue-warning text-sm"
                                                                >
                                                                    Print Your Weekly Slips
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn py-8 mb-3 rounded-pill w-100 bg-gradient-blue-warning text-sm"
                                                                >
                                                                    Received Referrals Report
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn py-8 rounded-pill w-100 bg-gradient-blue-warning text-sm"
                                                                >
                                                                    My Personal Participation Report
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> {/* row g-3 */}
                                            </div> {/* card-body */}
                                        </div> {/* card */}
                                    </div> {/* col-lg-4 */}

                                    {/* Right Stats */}
                                    <div className='col-md-8'>
                                        <div className='row g-3'>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-purple-light'>
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-lilac-200 border border-lilac-400 text-lilac-600'>
                                                        <i className='ri-price-tag-3-fill' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>
                                                        Referrals Received
                                                    </span>
                                                    <h6 className='mb-0 mt-4'>15</h6>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            Submit
                                                        </Link>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-success-100'>
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-success-200 border border-success-400 text-success-600'>
                                                        <i className='ri-shopping-cart-2-fill' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>
                                                        Referrals Given
                                                    </span>
                                                    <h6 className='mb-0 mt-4'>23</h6>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"

                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModalTwo"
                                                        >
                                                            Submit
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Review
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-info-focus cursor-pointer' data-bs-toggle="modal"
                                                    data-bs-target="#exampleModalOne">
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-info-200 border border-info-400 text-info-600'>
                                                        <i className='ri-group-3-fill' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>TYFCB Given</span>
                                                    <h6 className='mb-0 mt-4'>₹12,000,00</h6>

                                                </div>
                                            </div>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-danger-200 border border-danger-400 text-danger-600'>
                                                        <i className='ri-refund-2-line' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>Visitor</span>
                                                    <h6 className='mb-0 mt-4'>2</h6>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            Submit
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-danger-200 border border-danger-400 text-danger-600'>
                                                        <i className='ri-refund-2-line' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>CEUs</span>
                                                    <h6 className='mb-0 mt-4'>20</h6>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                        >
                                                            Submit
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Review
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12 bg-danger-200 border border-danger-400 text-danger-600'>
                                                        <i className='ri-refund-2-line' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>One-to-Ones</span>
                                                    <h6 className='mb-0 mt-4'>30</h6>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill border text-neutral-500 border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            Submit
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill btn-primary-600 radius-8 px-12 py-6 flex-grow-1 cursor-pointer"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#oneToOneReportModal"

                                                        >
                                                            Review
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* row gy-4 */}
                            </div> {/* col-xxl-8 */}
                        </div> {/* row gy-4 */}
                    </div> {/* card-body */}
                </div> {/* card */}
            </div> {/* col-xxl-12 col-xl-12 */}






            <div className="col-xxl-5 col-xl-5">
                <div className="card h-100 radius-8 border-0 overflow-hidden">
                    <div className="card-body p-24">
                        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between " >
                            <div>
                                <h6 className="mb-2 fw-bold text-xl">Profile Optimisation</h6>
                                <p>Complete your profile to optimize your network</p>
                            </div>

                            <div className="">
                                <Link
                                    to="#"
                                    className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                                >
                                    Update
                                    <Icon
                                        icon="solar:alt-arrow-right-linear"
                                        className="icon"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between mt-3">

                            <div>
                                <ReactApexChart options={donutChartOptionsTwo} series={donutChartSeriesTwo} type="donut" width={200} height={300} id="donutChart"
                                    className="flex-grow-1 apexcharts-tooltip-z-none title-style circle-none" />
                            </div>

                            <ul className="flex-shrink-0">
                                <li className="d-flex align-items-center gap-2 mb-28">
                                    <span className="w-12-px h-12-px rounded-circle bg-success-main" />
                                    <span className="text-secondary-light text-sm fw-medium">
                                        Complete your My Bio by Filling Tops Profile
                                    </span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xxl-7 col-xl-7">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                            <h6 className="mb-2 fw-bold text-xl mb-0">Upcoming Meeting and Events</h6>
                            <Link
                                to="#"
                                className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                            >
                                View All
                                <Icon
                                    icon="solar:alt-arrow-right-linear"
                                    className="icon"
                                />
                            </Link>
                        </div>
                        <div className="row gy-4">
                            <div className="col-lg-4">
                                <div className="h-100 border p-16 pe-0 radius-8">
                                    <div className="max-h-266-px overflow-y-auto scroll-sm pe-16">
                                        <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                            <div >
                                                <h6 className="mb-2  text-lg">Chapter Meeting</h6>
                                                <span>In-Person</span>

                                                <p>May 29, 2025 (7.05am)</p>
                                                <p>E Hotel, Gate 1, Pattulos, Chennai - 2, Chennai</p>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="h-100 border p-16 pe-0 radius-8">
                                    <div className="max-h-266-px overflow-y-auto scroll-sm pe-16">
                                        <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                            <div >
                                                <h6 className="mb-2  text-lg">Chapter Meeting</h6>
                                                <span>In-Person</span>

                                                <p>May 29, 2025 (7.05am)</p>
                                                <p>E Hotel, Gate 1, Pattulos, Chennai - 2, Chennai</p>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="h-100 border p-16 pe-0 radius-8">
                                    <div className="max-h-266-px overflow-y-auto scroll-sm pe-16">
                                        <div className="d-flex align-items-center justify-content-between gap-3 mb-12 pb-2">
                                            <div >
                                                <h6 className="mb-2  text-lg">Chapter Meeting</h6>
                                                <span>In-Person</span>

                                                <p>May 29, 2025 (7.05am)</p>
                                                <p>E Hotel, Gate 1, Pattulos, Chennai - 2, Chennai</p>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                One-to-One follow up
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />


                        </div>



                        <div className="modal-body ">

                            <div className="row mb-3">
                                <div className="col-sm-6  fw-medium">Chapter: Millionaries</div>

                                <div className="col-sm-6 text-end  fw-medium"><span className="text-danger">*</span> Required fields</div>

                            </div>

                            <form action="#" className="mx-auto pb-3" style={{ maxWidth: "700px" }}>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 col-sm-2">
                                        Met With<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"

                                            value="David Murugeasan"
                                        />
                                    </div>
                                </div>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 col-sm-2">

                                    </label>
                                    <div className="col-sm-5">
                                        <select className="form-select">
                                            <option>David Murugeasan</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-1 text-center">OR</div>
                                    <div className="col-sm-4">
                                        <button type="button" className="btn btn-primary grip w-100">
                                            Search Cross Chapter
                                        </button>
                                    </div>
                                </div>

                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 col-sm-2">
                                        Invited By<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-10">
                                        <select className="form-select">
                                            <option >Vignesh</option>
                                            <option>Elankathir</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 col-sm-2">
                                        Location<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Location"
                                        />
                                    </div>
                                </div>

                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 col-sm-2">
                                        Topics of Conversation<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-10">
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            placeholder="Enter topics..."
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 col-sm-2">
                                        Date<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="date"
                                            className="form-control"
                                            defaultValue="2025-05-23"
                                        />
                                    </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                                    <button
                                        type="submit"
                                        className="btn btn-primary grip px-40 py-11 radius-8"
                                    >
                                        Submit And New
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary grip px-40 py-11 radius-8"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-grip px-40 py-11 radius-8"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="modal fade"
                id="exampleModalOne"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Thank you for closed business
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />


                        </div>



                        <div className="modal-body ">

                            <div className="row mb-3">
                                <div className="col-sm-6  fw-medium">Chapter: Millionaries | Date: 23/05/2025</div>

                                <div className="col-sm-6 text-end  fw-medium"><span className="text-danger">*</span> Required fields</div>

                            </div>

                            <form action="#" className="mx-auto pb-3" style={{ maxWidth: "1000px" }}>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label text-end mb-0 col-sm-3">
                                        Met With<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">

                                        Please select from dropdown or search cross chapter

                                    </div>
                                </div>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 col-sm-3">

                                    </label>
                                    <div className="col-sm-4">
                                        <select className="form-select">
                                            <option>Select a member from your chapter</option>
                                            <option>Vishwa</option>
                                            <option>Suresh</option>
                                            <option>Nitheesh</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-1 text-center">OR</div>
                                    <div className="col-sm-4">
                                        <button type="button" className="btn btn-primary grip w-100">
                                            Search Cross Chapter
                                        </button>
                                    </div>
                                </div>

                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        For a referral in the amount of <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"

                                        />
                                        <span className='pr-5'>Always use local currancy</span>
                                    </div>
                                </div>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        Business Type<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <div className="d-flex align-items-center flex-wrap gap-28">
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Personal"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Personal"
                                                >

                                                    New
                                                </label>
                                            </div>
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Holiday"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Holiday"
                                                >

                                                    Repeat
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        Referral Type<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <div className="d-flex align-items-center flex-wrap gap-28">
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Personal"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Personal"
                                                >

                                                    Tier 1 (inside)
                                                </label>
                                            </div>
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Holiday"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Holiday"
                                                >

                                                    Tier 2 (outside)
                                                </label>
                                            </div>

                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Holiday"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Holiday"
                                                >

                                                    Tier 3+
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label text-end mb-0 col-sm-3">
                                        Comments<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <textarea
                                            className="form-control"
                                            rows="3"

                                        ></textarea>
                                    </div>
                                </div>


                                <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                                    <button
                                        type="submit"
                                        className="btn btn-primary grip px-40 py-11 radius-8"
                                    >
                                        Submit And New
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary grip px-40 py-11 radius-8"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-grip px-40 py-11 radius-8"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




            <div
                className="modal fade"
                id="exampleModalTwo"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"

            >
                <div className="modal-dialog modal-xl modal-dialog-centered" >
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Referral Slip (Be Sure To Announce This At The meeting)
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />


                        </div>



                        <div className="modal-body ">

                            <div className="row mb-3">
                                <div className="col-sm-6  fw-medium">Date: 23/05/2025 | From: Vignesh Prathap</div>

                                <div className="col-sm-6 text-end  fw-medium">
                                    <span className="text-danger">*</span> Required fields


                                </div>

                            </div>

                            <form action="#" className="mx-auto pb-3" style={{ maxWidth: "700px" }}>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label text-end mb-0 col-sm-3">
                                        To<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">

                                        Please select from dropdown below or search cross chapter

                                    </div>
                                </div>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 col-sm-3">

                                    </label>
                                    <div className="col-sm-4">
                                        <select className="form-select">
                                            <option>Select a member from your chapter</option>
                                            <option>Vishwa</option>
                                            <option>Suresh</option>
                                            <option>Nitheesh</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-1 text-center">OR</div>
                                    <div className="col-sm-4">
                                        <button type="button" className="btn btn-primary grip w-100">
                                            Search Cross Chapter
                                        </button>
                                    </div>
                                </div>

                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        Referral <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"

                                        />

                                    </div>
                                </div>





                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        Referral Type<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <div className="d-flex align-items-center flex-wrap gap-28">
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Personal"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Personal"
                                                >

                                                    Tier 1 (inside)
                                                </label>
                                            </div>
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Holiday"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Holiday"
                                                >

                                                    Tier 2 (outside)
                                                </label>
                                            </div>

                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Holiday"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Holiday"
                                                >

                                                    Tier 3+
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        Business Type<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <div className="d-flex align-items-center flex-wrap gap-28">
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="label"
                                                    id="Personal"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Personal"
                                                >

                                                    Given your Card
                                                </label>
                                            </div>
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="label"
                                                    id="Holiday"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Holiday"
                                                >

                                                    Told them you would all
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label text-end mb-0 col-sm-3">
                                        Address
                                    </label>
                                    <div className="col-sm-9">
                                        <textarea
                                            className="form-control"
                                            rows="3"

                                        ></textarea>
                                    </div>
                                </div>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label text-end mb-0 col-sm-3">
                                        Telephone<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"

                                        />
                                    </div>
                                </div>



                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        Email
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"

                                        />
                                    </div>
                                </div>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label text-end mb-0 col-sm-3">
                                        Comments
                                    </label>
                                    <div className="col-sm-9">
                                        <textarea
                                            className="form-control"
                                            rows="3"

                                        ></textarea>
                                    </div>
                                </div>



                                <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                                    <button
                                        type="submit"
                                        className="btn btn-primary grip px-40 py-11 radius-8"
                                    >
                                        Submit And New
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary grip px-40 py-11 radius-8"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-grip px-40 py-11 radius-8"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div
                className="modal fade"
                id="exampleModalThree"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"

            >
                <div className="modal-dialog modal-xl modal-dialog-centered" >
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Referral Slip (Be Sure To Announce This At The meeting)
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />


                        </div>



                        <div className="modal-body ">

                            <div className="row mb-3">
                                <div className="col-sm-6  fw-medium">Date: 23/05/2025 | From: Vignesh Prathap</div>

                                <div className="col-sm-6 text-end  fw-medium">
                                    <span className="text-danger">*</span> Required fields


                                </div>

                            </div>

                            <form action="#" className="mx-auto pb-3" style={{ maxWidth: "700px" }}>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label text-end mb-0 col-sm-3">
                                        To<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">

                                        Please select from dropdown below or search cross chapter

                                    </div>
                                </div>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 col-sm-3">

                                    </label>
                                    <div className="col-sm-4">
                                        <select className="form-select">
                                            <option>Select a member from your chapter</option>
                                            <option>Vishwa</option>
                                            <option>Suresh</option>
                                            <option>Nitheesh</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-1 text-center">OR</div>
                                    <div className="col-sm-4">
                                        <button type="button" className="btn btn-primary grip w-100">
                                            Search Cross Chapter
                                        </button>
                                    </div>
                                </div>

                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        Referral <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"

                                        />

                                    </div>
                                </div>





                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        Referral Type<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <div className="d-flex align-items-center flex-wrap gap-28">
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Personal"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Personal"
                                                >

                                                    Tier 1 (inside)
                                                </label>
                                            </div>
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Holiday"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Holiday"
                                                >

                                                    Tier 2 (outside)
                                                </label>
                                            </div>

                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="label"
                                                    id="Holiday"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Holiday"
                                                >

                                                    Tier 3+
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        Business Type<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <div className="d-flex align-items-center flex-wrap gap-28">
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="label"
                                                    id="Personal"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Personal"
                                                >

                                                    Given your Card
                                                </label>
                                            </div>
                                            <div className="form-check checked-danger d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="label"
                                                    id="Holiday"
                                                />
                                                <label
                                                    className="form-check-label line-height-1 fw-medium text-secondary-light text-sm d-flex align-items-center gap-1"
                                                    htmlFor="Holiday"
                                                >

                                                    Told them you would all
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label text-end mb-0 col-sm-3">
                                        Address
                                    </label>
                                    <div className="col-sm-9">
                                        <textarea
                                            className="form-control"
                                            rows="3"

                                        ></textarea>
                                    </div>
                                </div>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label text-end mb-0 col-sm-3">
                                        Telephone<span className="text-danger">*</span>
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"

                                        />
                                    </div>
                                </div>



                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label mb-0 text-end col-sm-3">
                                        Email
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"

                                        />
                                    </div>
                                </div>


                                <div className="row mb-24 gy-3 align-items-center">
                                    <label className="form-label text-end mb-0 col-sm-3">
                                        Comments
                                    </label>
                                    <div className="col-sm-9">
                                        <textarea
                                            className="form-control"
                                            rows="3"

                                        ></textarea>
                                    </div>
                                </div>



                                <div className="d-flex align-items-center justify-content-center gap-3 mt-24">
                                    <button
                                        type="submit"
                                        className="btn btn-primary grip px-40 py-11 radius-8"
                                    >
                                        Submit And New
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary grip px-40 py-11 radius-8"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-grip px-40 py-11 radius-8"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div
                class="modal fade"
                id="oneToOneReportModal"
                tabindex="-1"
                aria-labelledby="oneToOneReportModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content radius-16 bg-base">

                        <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 class="modal-title fs-5 text-danger" id="oneToOneReportModalLabel">
                                Chapter : One to One Report
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                        <div class="modal-body">

                            <div class="d-flex align-items-end gap-3 mb-4">
                                <div>
                                    <label class="form-label">Start Date <span class="text-danger">*</span></label>
                                    <input type="date" class="form-control" value="2025-05-01" />
                                </div>
                                <div>
                                    <label class="form-label">End Date <span class="text-danger">*</span></label>
                                    <input type="date" class="form-control" value="2025-05-31" />
                                </div>
                                <button class="btn btn-danger">Go</button>
                            </div>


                            <div class="bg-light p-3 rounded mb-3 d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>Chapter : One to One Report</strong><br />
                                    <small>Running User: John Doe</small><br />
                                    <small>Run At: 26/05/2025, 11:00 AM</small><br />
                                    <small>Chapter: <strong>Chennai North</strong></small>
                                </div>
                                <div class="d-flex gap-2">
                                    <button class="btn btn-danger btn-sm">Edit / Delete Slips</button>
                                    <button class="btn btn-danger btn-sm">Export without Headers</button>
                                    <button class="btn btn-danger btn-sm">Export</button>
                                    <button class="btn btn-danger btn-sm">Print</button>
                                </div>
                            </div>


                            <div class="border rounded p-2 mb-3 bg-white">
                                <strong>Parameters</strong>
                                <div class="row mt-2">
                                    <div class="col"><strong>Start Date:</strong> 01/05/2025</div>
                                    <div class="col"><strong>End Date:</strong> 31/05/2025</div>
                                </div>
                            </div>


                            <div class="alert alert-warning small mb-4">
                                Slips associated with PALMS reports that have not been submitted can be edited.
                                If the slip you want to edit has a status of completed, please contact your Vice President to have them unlock the report for you...
                            </div>


                            <div class="table-responsive">
                                <table class="table table-bordered table-striped">
                                    <thead class="table-danger">
                                        <tr>
                                            <th>Date</th>
                                            <th>Met with</th>
                                            <th>Initiated by</th>
                                            <th>Location</th>
                                            <th>Topics</th>
                                            <th>PALMS Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>03/05/2025</td>
                                            <td>Arjun Rao</td>
                                            <td>John Doe</td>
                                            <td>Zoom Call</td>
                                            <td>Business Collaboration</td>
                                            <td>Submitted</td>
                                        </tr>
                                        <tr>
                                            <td>10/05/2025</td>
                                            <td>Priya Sharma</td>
                                            <td>John Doe</td>
                                            <td>Café Coffee Day</td>
                                            <td>Service Exchange</td>
                                            <td>Pending</td>
                                        </tr>
                                        <tr>
                                            <td>18/05/2025</td>
                                            <td>Rahul Singh</td>
                                            <td>John Doe</td>
                                            <td>BNI Meeting</td>
                                            <td>Referral Discussion</td>
                                            <td>Submitted</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div class="modal-footer border-top-0">
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
};

export default SalesStatisticOne;