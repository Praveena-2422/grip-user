import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import ReactApexChart from 'react-apexcharts';
import useReactApexChart from '../../hook/useReactApexChart';
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";
import { useNavigate } from 'react-router-dom';




const SalesStatisticOne = () => {

    const navigate = useNavigate();

    const handleCrossChapterClick = () => {
        const modalEl = document.getElementById('exampleModalTwo');
        const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl);
        modalInstance.hide(); // hides the modal
        document.body.classList.remove("modal-open"); // cleanup class
        document.querySelector('.modal-backdrop')?.remove(); // remove backdrop

        setTimeout(() => {
            navigate("/cross-chapter");
        }, 300); // Delay to allow modal hide animation
    };


    let { donutChartSeriesTwo, donutChartOptionsTwo } = useReactApexChart()
    let { lineDataLabelSeries, lineDataLabelOptions } = useReactApexChart()





    return (
        <>
            <div className="card h-100 p-0 radius-12">
                <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
                    <div className="d-flex align-items-center flex-wrap gap-3">
                        <h6 class="fw-semibold mb-0">Hello, Vignesh</h6>



                    </div>

                    <div className="d-flex align-items-center flex-wrap gap-2">
                        <form className="navbar-search position-relative" style={{ width: '200px', height: '50px' }}>
                            <input
                                type="text"
                                name="search"
                                className="form-control bg-white border-grip rounded-2 text-sm px-3 pe-5 h-100 w-100"
                                placeholder="Search..."
                                style={{
                                    lineHeight: '1.2',
                                }}
                            />
                            <Icon
                                icon="ion:search-outline"
                                className="position-absolute text-grip"
                                style={{
                                    right: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontSize: '20px',
                                }}
                            />
                        </form>

                        <Link
                            to=""
                            className="btn text-white bg-gradient-blue-warning text-sm btn-sm d-flex align-items-center justify-content-center gap-2 text-center"
                            style={{
                                width: '200px',
                                height: '50px',
                                borderRadius: '8px',
                                padding: '12px',
                                whiteSpace: 'normal', // allows wrapping
                                lineHeight: '1.2',
                            }}
                        >
                            Millionaries
                        </Link>

                        <Link
                            to=""
                            className="btn text-white bg-gradient-blue-warning text-sm btn-sm d-flex align-items-center justify-content-center gap-2 text-center"
                            style={{
                                width: '200px',
                                height: '50px',
                                borderRadius: '8px',
                                padding: '12px',
                                whiteSpace: 'normal',
                                lineHeight: '1.2',
                            }}
                        >
                            Renewal Due Date:<br />
                            01/05/2026
                        </Link>

                        <Link
                            to=""
                            className="btn text-white bg-gradient-blue-warning text-sm btn-sm d-flex align-items-center justify-content-center gap-2 text-center"
                            style={{
                                width: '200px',
                                height: '50px',
                                borderRadius: '8px',
                                padding: '12px',
                                whiteSpace: 'normal',
                                lineHeight: '1.2',
                            }}
                        >
                            Regional Website
                        </Link>
                    </div>

                </div>

            </div>



            <div className="col-xxl-12 col-xl-12">
                <div className="card h-100">
                    <div className="card-body">
                        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                            <h6 className="mb-2 fw-bold text-lg mb-0">Referrals Given</h6>
                            <select className="form-select form-select-sm w-auto bg-base border-grip text-secondary-light" defaultValue="Today">
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
                                <div className="card bg-danger-100 h-100 p-0">

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
                                                        <div className="card p-3 shadow-2 radius-8 h-100 bg-gradient-blue-warning border border-white">
                                                            <div className="card-body p-10">
                                                                <div className="align-items-center justify-content-between gap-1 mb-3">
                                                                    <div className=" align-items-center">
                                                                        <span className="mb-10 w-48-px h-48-px btn-primary-black flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                                            <img
                                                                                src="assets/images/home-eleven/icons/home-eleven-icon1.svg"
                                                                                alt=""
                                                                            />
                                                                        </span>
                                                                        <div>
                                                                            <span className="fw-medium text-white text-md">
                                                                                Revenue Received To My Business
                                                                            </span>
                                                                            <h6 className="fw-semibold mt-2 text-white">₹50,000</h6>
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
                                                                        className="btn rounded-pill  border text-white border-white radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                                    >
                                                                        Submit
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="btn rounded-pill btn-primary-black text-white radius-8 px-12 py-6 flex-grow-1"
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
                                                                    className="btn py-10 mb-3 text-white rounded-pill w-100 bg-gradient-blue-warning text-sm"
                                                                >
                                                                    Print Your Weekly Slips
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn py-10 mb-3 text-white rounded-pill w-100 bg-gradient-blue-warning text-sm"
                                                                >
                                                                    Received Referrals Report
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn py-10 text-white rounded-pill w-100 bg-gradient-blue-warning text-sm"
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
                                                <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                        <i className='ri-price-tag-3-fill' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>
                                                        Referrals Received
                                                    </span>
                                                    <h6 className='mb-0 mt-4'>15</h6>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill border btn-primary-black text-white border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"

                                                        >
                                                            Submit
                                                        </Link>

                                                    </div>
                                                </div>

                                            </div>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                        <i className='ri-shopping-cart-2-fill' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>
                                                        Referrals Given
                                                    </span>
                                                    <h6 className='mb-0 mt-4'>23</h6>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill border btn-primary-black text-white border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"

                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModalTwo"
                                                        >
                                                            Submit
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill bg-gradient-blue-warning text-white radius-8 px-12 py-6 flex-grow-1"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#referralgivenReportModal"

                                                        >
                                                            Review
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-danger-100 cursor-pointer' data-bs-toggle="modal"
                                                    data-bs-target="#exampleModalOne">
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                        <i className='ri-group-3-fill' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>TYFCB Given</span>
                                                    <h6 className='mb-0 mt-4'>₹12,000,00</h6>

                                                </div>
                                            </div>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                        <i className='ri-refund-2-line' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>Visitor</span>
                                                    <h6 className='mb-0 mt-4'>2</h6>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill border btn-primary-black text-white border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"


                                                        >
                                                            Submit
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                        <i className='ri-refund-2-line' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>CEUs</span>
                                                    <h6 className='mb-0 mt-4'>20</h6>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill border btn-primary-black text-white border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"

                                                        >
                                                            Submit
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill bg-gradient-blue-warning text-white radius-8 px-12 py-6 flex-grow-1"
                                                        >
                                                            Review
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-4 col-xs-4'>
                                                <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                                    <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                        <i className='ri-refund-2-line' />
                                                    </span>
                                                    <span className='text-neutral-700 d-block'>One-to-Ones</span>
                                                    <h6 className='mb-0 mt-4'>30</h6>
                                                    <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill border btn-primary-black text-white border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"

                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                        >
                                                            Submit
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="btn rounded-pill bg-gradient-blue-warning text-white radius-8 px-12 py-6 flex-grow-1 cursor-pointer"
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
                                    className="text-grip hover-text-primary d-flex align-items-center gap-1"
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
                                    <span className="w-12-px h-12-px rounded-circle bg-success-grip" />
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
                                className="text-grip hover-text-primary d-flex align-items-center gap-1"
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
                                <div className="h-100 border bg-danger-100 p-16 pe-0 radius-8">
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
                                <div className="h-100 border bg-danger-100 p-16 pe-0 radius-8">
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
                                <div className="h-100 border bg-danger-100 p-16 pe-0 radius-8">
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
                                        <button type="button" className="btn btn-primary grip w-100" >
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
                                        <button type="button" className="btn btn-primary grip w-100" onClick={handleCrossChapterClick}>
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

                                        <button type="button" className="btn btn-primary grip w-100" >
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
                <div class="modal-dialog modal-xl modal-dialog-centered" >
                    <div class="modal-content radius-16 bg-base">

                        <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 class="modal-title fs-5 text-danger" id="oneToOneReportModalLabel">
                                Chapter : One to One Report
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                        <div class="modal-body">

                            <div class="d-flex align-items-end gap-3 mb-3">
                                <div>
                                    <label class="form-label">Start Date <span class="text-danger">*</span></label>
                                    <input type="date" class="form-control" value="2025-05-01" />
                                </div>
                                <div>
                                    <label class="form-label">End Date <span class="text-danger">*</span></label>
                                    <input type="date" class="form-control" value="2025-05-31" />
                                </div>
                                <button class="btn btn-primary grip">Go</button>
                            </div>


                            <div className='reportdetailss overflow-x-auto'>

                                <div class="bg-danger-100 p-3 rounded d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <div><strong>Chapter : One to One Report</strong></div>
                                        <div class="d-flex gap-5 mt-2">
                                            <small>Running User<br></br><strong>Vignesh.Veerasamy</strong></small>
                                            <small>Run At<br></br><strong>23-May-2025 5:01 PM</strong></small>
                                            <small>Chapter<br></br><strong>Millionaires</strong></small>
                                        </div>
                                    </div>

                                    <div class="d-flex gap-2">
                                        <button class="btn btn-primary grip text-xs btn-sm">Edit / Delete Slips</button>
                                        <button class="btn btn-primary grip text-xs btn-sm">Export without Headers</button>
                                        <button class="btn btn-primary grip text-xs btn-sm">Export</button>
                                        <button class="btn btn-primary grip text-xs btn-sm">Print</button>
                                    </div>
                                </div>




                                <div class=" rounded p-3 mb-3 bg-danger-100">
                                    <div className='text-sm'> <strong>Parameters</strong></div>
                                    <div class="row mt-2 border-bottom">
                                        <div class="col"><small><strong>Start Date</strong></small></div>
                                        <div class="col"> <small><strong>23/11/2024</strong></small></div>
                                    </div>
                                    <div class="row  border-bottom">
                                        <div class="col"><small><strong>End Date</strong></small></div>
                                        <div class="col"><small><strong>31/05/2025</strong></small></div>
                                    </div>
                                </div>


                                <div class="alert alert-warning text-center text-black fw-bold small mb-3">
                                    Slips associated with PALMS reports that have not been submitted can be edited.
                                    If the slip you want to edit has a status of completed, please contact your Vice President to have them unlock the report for you...
                                </div>


                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped">
                                        <thead class="table-danger grip">
                                            <tr class='text-xs'>
                                                <th>Date</th>
                                                <th>Met with</th>
                                                <th>Initiated by</th>
                                                <th>Location</th>
                                                <th>Topics</th>
                                                <th>PALMS Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class='text-xs'>
                                                <td>27/11/24</td>
                                                <td>Saravana kumaran ASV</td>
                                                <td>Saravana kumaran ASV</td>
                                                <td>My office</td>
                                                <td>Future plans</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>30/01/25</td>
                                                <td>Nareshkumar K M</td>
                                                <td>Nareshkumar K M</td>
                                                <td>In office</td>
                                                <td>Regarding project planning</td>
                                                <td>Completed</td>
                                            </tr>

                                            <tr class='text-xs'>
                                                <td>14/02/25</td>
                                                <td>Deepika Sabapathi</td>
                                                <td>Vignesh .Veerasamy</td>
                                                <td>Her office</td>
                                                <td>121 one important Explain its benefits. To Deepika</td>
                                                <td>Completed</td>
                                            </tr>

                                            <tr class='text-xs'>
                                                <td>14/02/25</td>
                                                <td>Nareshkumar K M</td>
                                                <td>Vignesh .Veerasamy</td>
                                                <td>Ambattur site</td>
                                                <td>Residence Construction</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>21/02/25</td>
                                                <td>Nareshkumar K M</td>
                                                <td>Vignesh .Veerasamy</td>
                                                <td>Fourspaces office</td>
                                                <td>Ongoing work related</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>04/03/25</td>
                                                <td>Rajendra Babu S</td>
                                                <td>Rajendra Babu S</td>
                                                <td>At his Office</td>
                                                <td>Completely Discussed about both our Business and understood. Passed Referrals.</td>
                                                <td>Completed</td>
                                            </tr>

                                            <tr class='text-xs'>
                                                <td>11/03/25</td>
                                                <td>Deepika Sabapathi</td>
                                                <td>Deepika Sabapathi</td>
                                                <td>In site</td>
                                                <td>Discuss Regarding site repairs</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>11/03/25</td>
                                                <td>Nareshkumar K M</td>
                                                <td>Nareshkumar K M</td>
                                                <td>Site meet</td>
                                                <td>Site development</td>
                                                <td>Completed</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>


                        <div class="modal-footer border-top-0">
                            <button type="button" class="btn text-grip btn-outline-grip" data-bs-dismiss="modal">
                                Close
                            </button>
                        </div>


                    </div>
                </div>
            </div>





            <div
                class="modal fade"

                id="referralgivenReportModal"
                tabindex="-1"
                aria-labelledby="referralgivenReportModal"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl modal-dialog-centered" style={{ maxWidth: "1450px" }}>
                    <div class="modal-content radius-16 bg-base">

                        <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 class="modal-title fs-5 text-danger" id="referralgivenReportModal">
                                Chapter : Referrals Given Report
                            </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>


                        <div class="modal-body">

                            <div class="d-flex align-items-end gap-3 mb-3">
                                <div>
                                    <label class="form-label">Start Date <span class="text-danger">*</span></label>
                                    <input type="date" class="form-control" value="2025-05-01" />
                                </div>
                                <div>
                                    <label class="form-label">End Date <span class="text-danger">*</span></label>
                                    <input type="date" class="form-control" value="2025-05-31" />
                                </div>
                                <button class="btn btn-primary grip">Go</button>
                            </div>


                            <div className='reportdetailss overflow-x-auto'>

                                <div class="bg-danger-100 p-3 rounded d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <div><strong>Chapter : Referrals Given Report</strong></div>
                                        <div class="d-flex gap-5 mt-2">
                                            <small>Running User<br></br><strong>Vignesh.Veerasamy</strong></small>
                                            <small>Run At<br></br><strong>23-May-2025 5:01 PM</strong></small>
                                            <small>Chapter<br></br><strong>Millionaires</strong></small>
                                        </div>
                                    </div>

                                    <div class="d-flex gap-2">
                                        <button class="btn btn-primary grip text-xs btn-sm">Edit / Delete Slips</button>
                                        <button class="btn btn-primary grip text-xs btn-sm">Export without Headers</button>
                                        <button class="btn btn-primary grip text-xs btn-sm">Export</button>
                                        <button class="btn btn-primary grip text-xs btn-sm">Print</button>
                                    </div>
                                </div>




                                <div class=" rounded p-3 mb-3 bg-danger-100">
                                    <div className='text-sm'> <strong>Parameters</strong></div>
                                    <div class="row mt-2 border-bottom">
                                        <div class="col"><small><strong>Start Date</strong></small></div>
                                        <div class="col"> <small><strong>23/11/2024</strong></small></div>
                                    </div>
                                    <div class="row  border-bottom">
                                        <div class="col"><small><strong>End Date</strong></small></div>
                                        <div class="col"><small><strong>31/05/2025</strong></small></div>
                                    </div>
                                </div>


                                <div class="alert alert-warning text-center text-black fw-bold text-xs mb-3">
                                    Slips associated with PALMS reports that have not been submitted can be edited.
                                    If the slip you want to edit has a status of completed, please contact your Vice President to have them unlock the report for you...
                                </div>

                                <div class="table-responsive">
                                    <table class="table table-bordered table-striped">
                                        <thead class="table-danger grip">
                                            <tr class='text-xs'>
                                                <th>Date</th>
                                                <th>To</th>
                                                <th>Referral</th>
                                                <th>Inside/Outside</th>
                                                <th>Status</th>
                                                <th>Phone Number</th>
                                                <th>Email</th>
                                                <th>Comments</th>
                                                <th>Referral Temp</th>
                                                <th>Tracking Sheet Status</th>
                                                <th>PALMS Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class='text-xs'>
                                                <td>24/04/25</td>
                                                <td>Ferryn Davidson P</td>
                                                <td>Vanalavanya</td>
                                                <td>Tier 2 (outside)</td>
                                                <td>Card Given Call Required</td>
                                                <td>8300121620</td>
                                                <td></td>
                                                <td>Interior materials</td>
                                                <td>5</td>
                                                <td>Got The Business</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>30/04/25</td>
                                                <td>S Ganesh Kumar</td>
                                                <td>Vignesh .Veerasamy</td>
                                                <td>Tier 1 (inside)</td>
                                                <td>Card Given Call Required</td>
                                                <td>+918300101620</td>
                                                <td>v2fcons@gmail.com</td>
                                                <td>Car insurance</td>
                                                <td>5</td>
                                                <td>Confidential</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>01/05/25</td>
                                                <td>Udaya Kumar Murali</td>
                                                <td>Mr. Murugan</td>
                                                <td>Tier 2 (outside)</td>
                                                <td>Card Given Call Required</td>
                                                <td>+919840827654</td>
                                                <td></td>
                                                <td>Invest sip lumpsum amount</td>
                                                <td>5</td>
                                                <td>Not Contacted Yet</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>07/05/25</td>
                                                <td>Ferryn Davidson P</td>
                                                <td>Vanalavanya</td>
                                                <td>Tier 2 (outside)</td>
                                                <td>Card Given Call Required</td>
                                                <td>8300121620</td>
                                                <td></td>
                                                <td>Mica…</td>
                                                <td>5</td>
                                                <td>Got The Business</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>07/05/25</td>
                                                <td>Dhivya Anandhan</td>
                                                <td>Vanalavanya</td>
                                                <td>Tier 2 (outside)</td>
                                                <td>Card Given Call Required</td>
                                                <td>8300121620</td>
                                                <td></td>
                                                <td>For company labour travel booking</td>
                                                <td>5</td>
                                                <td>Got The Business</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>14/05/25</td>
                                                <td>Raj Kumar</td>
                                                <td>Vignesh .Veerasamy</td>
                                                <td>Tier 1 (inside)</td>
                                                <td>Card Given Call Required</td>
                                                <td>+918300101620</td>
                                                <td>v2fcons@gmail.com</td>
                                                <td>Self business</td>
                                                <td>5</td>
                                                <td>Not Contacted Yet</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>22/05/25</td>
                                                <td>Guru A.</td>
                                                <td>Vignesh .Veerasamy</td>
                                                <td>Tier 1 (inside)</td>
                                                <td>Card Given Call Required</td>
                                                <td>+918300101620</td>
                                                <td>v2fcons@gmail.com</td>
                                                <td>Poru materials</td>
                                                <td>5</td>
                                                <td>Not Contacted Yet</td>
                                                <td>Draft</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>


                        <div class="modal-footer border-top-0">
                            <button type="button" class="btn text-grip btn-outline-grip" data-bs-dismiss="modal">
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