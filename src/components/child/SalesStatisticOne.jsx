import React, { useEffect, useState, useRef } from 'react';

import { Icon } from '@iconify/react/dist/iconify.js';
import ReactApexChart from 'react-apexcharts';
import useReactApexChart from '../../hook/useReactApexChart';
import { Link } from "react-router-dom";
import { Modal } from "bootstrap";
import { useNavigate } from 'react-router-dom';




const SalesStatisticOne = () => {


  const printRef = useRef();

 const handlePrint = () => {
  const content = document.getElementById('printable-area');
  const printWindow = window.open('', '', 'height=600,width=800');

  printWindow.document.write(`
    <html>
      <head>
        <title>Print Slips Summary</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" />
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .radius-8 { border-radius: 8px; }
          .p-20 { padding: 20px; }
          .bg-danger-100 { background-color: #ffe6e6; }
          .text-neutral-700 { color: #4a4a4a; }
          .text-xl { font-size: 1.5rem; }
          .text-center { text-align: center; }
          h6 { margin: 0; font-size: 16px; }
        </style>
      </head>
      <body>
        ${content.innerHTML}
        <script>
          window.onload = function () {
            window.focus();
            window.print();
            setTimeout(() => window.close(), 500); // Give print dialog time to open
          };
        </script>
      </body>
    </html>
  `);

  printWindow.document.close();
};


    const dummyMembers = [
        {
            name: "Deepika Senthil",
            business: "Ocean Softwares",
            mobile: "9876543210",
            chapter: "GRIP Aram",
            zone: "Chennai",
            category: "Web Developer",
        },
        {
            name: "Kesavan Dhanbani",
            business: "Smith Photography",
            mobile: "9876543210",
            chapter: "GRIP Madhuram",
            zone: "Chennai",
            category: "Photographer",
        },
        {
            name: "Arun Kumar",
            business: "Kumar Digital",
            mobile: "9999999999",
            chapter: "GRIP Kireedam",
            zone: "Chennai",
            category: "Digital Marketing",
        },
    ];



    const [selectedMember, setSelectedMember] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);



    const navigate = useNavigate();


    const handleViewClick = (member) => {
        setSelectedMember(member);
        setShowViewModal(true);
    };




    useEffect(() => {
        const modalEl = document.getElementById('searchResultModal');

        const handleModalHidden = () => {
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';

            // Remove any lingering backdrops
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) backdrop.remove();
        };

        modalEl?.addEventListener('hidden.bs.modal', handleModalHidden);

        return () => {
            modalEl?.removeEventListener('hidden.bs.modal', handleModalHidden);
        };
    }, []);




    const handleCrossChapterClick = () => {
        const modalEl = document.getElementById('exampleModalTwo');
        const modalInstance = Modal.getInstance(modalEl) || new Modal(modalEl);

        modalInstance.hide();

        // Allow Bootstrap's fade-out animation to complete
        setTimeout(() => {
            // Full cleanup
            document.body.classList.remove("modal-open");
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "";

            document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());

            // Navigate to the new route
            navigate("/cross-chapter");
        }, 300); // Match this to Bootstrap's fade duration (300ms default)
    };



    let { donutChartSeriesTwo, donutChartOptionsTwo } = useReactApexChart()
    let { lineDataLabelSeries, lineDataLabelOptions } = useReactApexChart()

    const [searchFields, setSearchFields] = useState({
        name: "",
        business: "",
        mobile: "",
        chapter: "",
        zone: "",
        category: "",
    });

    const [results, setResults] = useState([
        {
            name: "Deepika",
            business: "Doe Designs",
            mobile: "123-456-7890",
            email: "john@example.com",
            chapter: "GRIP Aram",
            zone: "Chennai",
            category: "Web Developer"
        },
        {
            name: "Jane Smith",
            business: "Smith Marketing",
            mobile: "987-654-3210",
            email: "jane@example.com",
            chapter: "GRIP Virutcham",
            zone: "Chennai",
            category: "Marketing"
        }
    ]);


    const handleInputChange = (e) => {
        setSearchFields({ ...searchFields, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        const filtered = dummyMembers.filter((member) => {
            return (
                (!searchFields.name || member.name.toLowerCase().includes(searchFields.name.toLowerCase())) &&
                (!searchFields.business || member.business.toLowerCase().includes(searchFields.business.toLowerCase())) &&
                (!searchFields.mobile || member.mobile.includes(searchFields.mobile)) &&
                (!searchFields.chapter || member.chapter === searchFields.chapter) &&
                (!searchFields.zone || member.zone === searchFields.zone) &&
                (!searchFields.category || member.category === searchFields.category)
            );
        });

        setResults(filtered);

        // Hide search modal, show result modal
        const searchModal = Modal.getInstance(document.getElementById("memberSearchModal"));
        searchModal.hide();

        const resultModal = new Modal(document.getElementById("searchResultModal"));
        resultModal.show();
    };






    return (
        <>
            <div className="card h-100 p-0 radius-12">
                <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
                    <div className="d-flex align-items-center flex-wrap gap-3">
                        <h6 class="fw-semibold mb-0">Hello, Vignesh</h6>



                    </div>

                    <div className="firstpartt d-flex align-items-center flex-wrap gap-2">
                        <form className="navbar-searchh position-relative" style={{ width: '200px', height: '50px' }}>
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

                        <button
                            onClick={handlePrint}
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
                            Print Your Slips
                        </button>

                        <Link
                            to=""
                            className="btn text-white bg-gradient-blue-warning text-sm btn-sm d-flex align-items-center justify-content-center gap-2 text-center" data-bs-toggle="modal"
                            data-bs-target="#memberSearchModal"
                            style={{
                                width: '200px',
                                height: '50px',
                                borderRadius: '8px',
                                padding: '12px',
                                whiteSpace: 'normal',
                                lineHeight: '1.2',
                            }}
                        >
                            Member Search
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


                    </div>

                </div>

            </div>



            <div className="col-12">
                <div className="card h-100 mb-3">
                    <div className="card-body">
                        <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between mb-20">
                            <h6 className="mb-2 fw-bold text-lg mb-0">Dashboard</h6>
                            <select className="form-select form-select-sm w-auto bg-base border-grip text-secondary-light" defaultValue="Today">
                                <option value="Today">This Week</option>
                                <option value="Weekly">This Month</option>
                                <option value="Monthly">Last Week</option>
                                <option value="Monthly">Last Month</option>
                                <option value="Monthly">This Term</option>
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



                            {/* Right side details */}
                            <div className="col-9" id="printable-area">

                                <div className='row g-3'>


                                    <div className='col-sm-3 col-xs-3'>
                                        <div className='radius-8 h-100 text-center p-20 bg-danger-100 cursor-pointer'>
                                            <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                <i className="ri-heart-fill" />

                                            </span>
                                            <span className='text-neutral-700 d-block'>Thank you Notes Received</span>
                                            <h6 className='mb-0 mt-4'>₹12,000,00</h6>
                                            <div className="d-flex align-items-center flex-wrap mt-12 gap-8">

                                                <Link
                                                    to="#"
                                                    className="btn rounded-pill bg-gradient-blue-warning text-white radius-8 px-12 py-6 flex-grow-1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tyreceiveReportModal"

                                                >
                                                    Review
                                                </Link>
                                            </div>


                                        </div>
                                    </div>


                                    <div className='col-sm-3 col-xs-3'>
                                        <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                            <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>
                                                <i className="ri-group-fill" />


                                            </span>
                                            <span className='text-neutral-700 d-block'>
                                                Referrals Received
                                            </span>
                                            <h6 className='mb-0 mt-4'>15</h6>
                                            <div className="d-flex align-items-center flex-wrap mt-12 gap-8">


                                                <Link
                                                    to="#"
                                                    className="btn rounded-pill bg-gradient-blue-warning text-white radius-8 px-12 py-6 flex-grow-1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#referralreceiveReportModal"

                                                >
                                                    Review
                                                </Link>

                                            </div>
                                        </div>

                                    </div>



                                    <div className='col-sm-3 col-xs-3'>
                                        <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                            <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                <i className="ri-chat-quote-fill" />

                                            </span>
                                            <span className='text-neutral-700 d-block'>
                                                Testimonial  Received
                                            </span>
                                            <h6 className='mb-0 mt-4'>23</h6>
                                            <div className="d-flex align-items-center flex-wrap mt-12 gap-8">

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



                                    <div className='col-sm-3 col-xs-3'>
                                        <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                            <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                <i className="ri-user-follow-line" />


                                            </span>
                                            <span className='text-neutral-700 d-block'>Visitor</span>
                                            <h6 className='mb-0 mt-4'>2</h6>
                                            <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                <Link
                                                    to="#"
                                                    className="btn rounded-pill border btn-primary-black text-white border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#visitorSubmitModal"

                                                >
                                                    Submit
                                                </Link>

                                                <Link
                                                    to="#"
                                                    className="btn rounded-pill bg-gradient-blue-warning text-white radius-8 px-12 py-6 flex-grow-1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#visitorReceiveModal"


                                                >
                                                    Review
                                                </Link>

                                            </div>
                                        </div>
                                    </div>



                                    <div className='col-sm-3 col-xs-3'>
                                        <div className='radius-8 h-100 text-center p-20 bg-danger-100 '>
                                            <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>



                                                <i className="ri-hand-heart-fill" />


                                            </span>
                                            <span className='text-neutral-700 d-block'>Thank you Notes Given</span>
                                            <h6 className='mb-0 mt-4'>₹12,000,00</h6>
                                            <div className="d-flex align-items-center flex-wrap mt-12 gap-8">
                                                <Link
                                                    to="#"
                                                    className="btn rounded-pill border btn-primary-black text-white border-neutral-500 radius-8 px-12 py-6 bg-hover-neutral-500 text-hover-white flex-grow-1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModalOne"
                                                >
                                                    Submit
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="btn rounded-pill bg-gradient-blue-warning text-white radius-8 px-12 py-6 flex-grow-1"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#tygivenReportModal"

                                                >
                                                    Review
                                                </Link>
                                            </div>


                                        </div>
                                    </div>



                                    <div className='col-sm-3 col-xs-3'>
                                        <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                            <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                <i className="ri-send-plane-fill" />



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






                                    <div className='col-sm-3 col-xs-3'>
                                        <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                            <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>

                                                <i className="ri-feedback-fill" />




                                            </span>
                                            <span className='text-neutral-700 d-block'>
                                                Testimonial  Given
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


                                    <div className='col-sm-3 col-xs-3'>
                                        <div className='radius-8 h-100 text-center p-20 bg-danger-100'>
                                            <span className='w-44-px h-44-px radius-8 d-inline-flex justify-content-center align-items-center text-xl mb-12  border border-danger-400 text-black'>


                                                <i className="ri-discuss-fill" />





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




                            <div className='col-3'>
                                <div className='card box-shadow radius-16 pb-3'>
                                    <div className='card-header'>
                                        <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
                                            <h6 className='mb-2 fw-bold text-lg mb-0'>Payment </h6>
                                            <Link
                                                to='#'
                                                className='text-grip hover-text-primary d-flex align-items-center gap-1'
                                            >
                                                View All
                                                <iconify-icon
                                                    icon='solar:alt-arrow-right-linear'
                                                    className='icon'
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='card-body'>
                                        <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
                                            <div className=''>
                                                <h6 className='text-md mb-0'>	Monthly meeting fee</h6>
                                                <span className='text-xs text-secondary-light fw-medium'>
                                                    18 June 2025
                                                </span>
                                            </div>
                                            <div className='text-center'>
                                                <h6 className='text-sm mb-1'>₹1000</h6>
                                                <span className='text-xs fw-medium text-success-600 bg-success-100  px-3'>
                                                    Pay Now
                                                </span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
                                            <div className=''>
                                                <h6 className='text-md mb-0'>Event Fee</h6>
                                                <span className='text-xs text-secondary-light fw-medium'>
                                                    22 June 2024
                                                </span>
                                            </div>
                                            <div className='text-center'>
                                                <h6 className='text-sm mb-1'>₹500</h6>
                                                <span className='text-xs fw-medium text-success-600 bg-success-100  px-3'>
                                                    Pay Now
                                                </span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
                                            <div className=''>
                                                <h6 className='text-md mb-0'>Membership Renewal</h6>
                                                <span className='text-xs text-secondary-light fw-medium'>
                                                    25 June 2024
                                                </span>
                                            </div>
                                            <div className='text-center'>
                                                <h6 className='text-sm mb-1'>₹2000</h6>
                                                <span className='text-xs fw-medium text-success-600 bg-success-100  px-3'>
                                                    Pay Now
                                                </span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between pb-10 mb-10 border-bottom border-neutral-200'>
                                            <div className=''>
                                                <h6 className='text-md mb-0'>	Special Contribution </h6>
                                                <span className='text-xs text-secondary-light fw-medium'>
                                                    28 June 2024
                                                </span>
                                            </div>
                                            <div className='text-center'>
                                                <h6 className='text-sm mb-1'>₹1500</h6>
                                                <span className='text-xs fw-medium text-success-600 bg-success-100  px-3'>
                                                    Pay Now
                                                </span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className=''>
                                                <h6 className='text-md mb-0'>Training</h6>
                                                <span className='text-xs text-secondary-light fw-medium'>
                                                    30 June 2024
                                                </span>
                                            </div>
                                            <div className='text-center'>
                                                <h6 className='text-sm mb-1'>₹300</h6>
                                                <span className='text-xs fw-medium text-success-600 bg-success-100  px-3'>
                                                    Pay Now
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> {/* row gy-4 */}
                    </div> {/* col-xxl-8 */}
                </div> {/* row gy-4 */}

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
                                    to="/add-user"
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
                            <h6 className="mb-2 fw-bold text-xl mb-0">Upcoming  Events</h6>
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
                                                <p>The Park Chennai, Nungambakkam, Chennai</p>

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
                                                <p>Hotel Hilton, Guindy, Chennai</p>

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
                                                <p>The ITC Grand Chola, Guindy, Chennai </p>

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
                                <div className="col-sm-6  fw-medium">Chapter: GRIP Aram</div>

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
                id="memberSearchModal"
                tabIndex={-1}
                aria-labelledby="memberSearchModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="memberSearchModal">
                                Member Search
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />


                        </div>



                        <div className="modal-body ">


                            <form action="#">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="mb-20">
                                            <label
                                                htmlFor="name"
                                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                                            >
                                                Name

                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control radius-8"
                                                placeholder="Enter Full Name"
                                                value={searchFields.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mb-20">
                                            <label
                                                htmlFor="email"
                                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                                            >
                                                Business Name
                                            </label>
                                            <input
                                                type="text"
                                                name="business"
                                                className="form-control radius-8"
                                                placeholder="Enter Business Name"
                                                value={searchFields.business}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mb-20">
                                            <label
                                                htmlFor="number"
                                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                                            >
                                                Mobile Number
                                            </label>
                                            <input
                                                type="text"
                                                name="mobile"
                                                className="form-control radius-8"
                                                placeholder="Enter Mobile Number"
                                                value={searchFields.mobile}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mb-20">
                                            <label
                                                htmlFor="depart"
                                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                                            >
                                                Chapter Name

                                            </label>
                                            <select
                                                name="chapter"
                                                className="form-select radius-8"
                                                value={searchFields.chapter}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Chapter</option>
                                                <option value="GRIP Aram">GRIP Aram</option>
                                                <option value="GRIP Virutcham">GRIP Virutcham</option>
                                                <option value="GRIP Madhuram">GRIP Madhuram</option>
                                                <option value="GRIP Kireedam">GRIP Kireedam</option>
                                                <option value="GRIP Amudham">GRIP Amudham</option>
                                            </select>


                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mb-20">
                                            <label
                                                htmlFor="desig"
                                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                                            >
                                                Zone

                                            </label>
                                            <select
                                                name="zone"
                                                className="form-select radius-8"
                                                value={searchFields.zone}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Zone</option>
                                                <option value="Chennai">Chennai</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="mb-20">
                                            <label
                                                htmlFor="Language"
                                                className="form-label fw-semibold text-primary-light text-sm mb-8"
                                            >
                                                Categroy
                                                <span className="text-danger-600">*</span>{" "}
                                            </label>
                                            <select
                                                name="category"
                                                className="form-select radius-8"
                                                value={searchFields.category}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Category</option>
                                                <option value="Web Developer">Web Developer</option>
                                                <option value="Photographer">Photographer</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Manufacturer">Manufacturer</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                                <div className="d-flex align-items-center mt-20 mb-20 justify-content-center gap-3">
                                    <button


                                        type="button"

                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-56 py-11 radius-8"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn bg-gradient-blue-warning  text-white px-56 py-12 radius-8" onClick={handleSearch}
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>






            {/* Result Modal */}
            <div className="modal fade" id="searchResultModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="memberSearchModal">
                                Search Results
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />


                        </div>
                        <div className="modal-body">

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span>
                                    Showing <strong>1–{results.length}</strong> of {results.length} results
                                </span>
                                <div className="d-flex align-items-center gap-2">
                                    <span>Sort By:</span>
                                    <select className="form-select form-select-sm" style={{ width: "auto" }}>
                                        <option value="relevance">Relevance</option>
                                        <option value="name">Name</option>
                                        <option value="chapter">Chapter</option>
                                    </select>
                                </div>
                            </div>
                            <div className="table-responsive p-20">
                                <table className="table align-middle ">

                                    <tbody>
                                        {results.map((member, idx) => (
                                            <tr key={idx}>
                                                {/* Column 1: Avatar */}
                                                <td>
                                                    <img
                                                        src="assets/images/avatar/avatar.jpg"
                                                        alt="avatar"
                                                        className="rounded-circle"
                                                        width="60"
                                                        height="60"
                                                    />

                                                </td>

                                                {/* Column 2: Name + Category */}
                                                <td>
                                                    <div className="fw-semibold">{member.name}</div>

                                                    {member.category}

                                                </td>

                                                {/* Column 3: Business Info */}
                                                <td>
                                                    <div>{member.business}</div>
                                                    <div className="text-muted small">{member.mobile}</div>
                                                    <div className="text-muted small">{member.email || 'admin@gmail.com'}</div>
                                                </td>

                                                {/* Column 4: Chapter Info + Button */}
                                                <td>
                                                    <div>{member.chapter}</div>
                                                    <div className="text-muted small mb-2">{member.zone}</div>

                                                </td>

                                                <td> <div className="align-middle"><button
                                                    className="btn btn-sm border-grip btn-grip btn-hover-grip text-black"
                                                    onClick={() => handleViewClick(member)}
                                                >
                                                    View
                                                </button></div></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </div>
                </div>
            </div>




            {/* View Member Modal */}
            {showViewModal && selectedMember && (
                <div
                    className="modal fade show"
                    style={{ display: 'block' }}
                    tabIndex={-1}
                    aria-modal="true"
                    role="dialog"
                >
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content radius-16 bg-base">
                            <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                                <h1 className="modal-title fs-5" id="memberSearchModal">
                                    Member Details
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowViewModal(false)}
                                    aria-label="Close"
                                />


                            </div>

                            <div className="modal-body">

                                <div className='row'>
                                    <div className='col-4'>
                                        <img
                                            src="assets/images/avatar/avatar.jpg"
                                            alt="avatar"
                                            className="rounded-circle"
                                            width="60"
                                            height="60"
                                        />
                                        <p><strong>Name:</strong> {selectedMember.name}</p>
                                        <p><strong>Category:</strong> {selectedMember.category}</p>
                                        <p><strong>Business:</strong> {selectedMember.business}</p>

                                    </div>

                                    <div className='col-4'>

                                        <p><strong>Mobile:</strong> {selectedMember.mobile}</p>
                                        <p><strong>Email:</strong> {selectedMember.email || 'admin@gmail.com'}</p>
                                        <p><strong>Chapter:</strong> {selectedMember.chapter}</p>
                                        <p><strong>Zone:</strong> {selectedMember.zone}</p>
                                    </div>


                                    <div className='col-4'>
                                        <div className='aboutttpara'>
                                            <h5>About us</h5>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowViewModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}








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
                                <div className="col-sm-6  fw-medium">Chapter: GRIP Aram | Date: 23/05/2025</div>

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
                className="modal fade"
                id="visitorSubmitModal"
                tabIndex={-1}
                aria-labelledby="visitorSubmitModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5" id="visitorSubmitModal">
                                Visitor follow up
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
                                <div className="col-sm-6  fw-medium">Chapter: GRIP Aram</div>

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
                class="modal fade"
                id="visitorReceiveModal"
                tabindex="-1"
                aria-labelledby="visitorReceiveModal"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl modal-dialog-centered" >
                    <div class="modal-content radius-16 bg-base">

                        <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 class="modal-title fs-5 text-danger" id="visitorReceiveModal">
                                Chapter : Visitor Report
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
                                            <small>Running User<br></br><strong>Vignesh Prathap</strong></small>
                                            <small>Run At<br></br><strong>23-May-2025 5:01 PM</strong></small>
                                            <small>Chapter<br></br><strong>Grip Aram</strong></small>
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
                                                <td>Vignesh Prathap</td>
                                                <td>Her office</td>
                                                <td>121 one important Explain its benefits. To Deepika</td>
                                                <td>Completed</td>
                                            </tr>

                                            <tr class='text-xs'>
                                                <td>14/02/25</td>
                                                <td>Nareshkumar K M</td>
                                                <td>Vignesh Prathap</td>
                                                <td>Ambattur site</td>
                                                <td>Residence Construction</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>21/02/25</td>
                                                <td>Nareshkumar K M</td>
                                                <td>Vignesh Prathap</td>
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
                                            <small>Running User<br></br><strong>Vignesh Prathap</strong></small>
                                            <small>Run At<br></br><strong>23-May-2025 5:01 PM</strong></small>
                                            <small>Chapter<br></br><strong>Grip Aram</strong></small>
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
                                                <td>Vignesh Prathap</td>
                                                <td>Her office</td>
                                                <td>121 one important Explain its benefits. To Deepika</td>
                                                <td>Completed</td>
                                            </tr>

                                            <tr class='text-xs'>
                                                <td>14/02/25</td>
                                                <td>Nareshkumar K M</td>
                                                <td>Vignesh Prathap</td>
                                                <td>Ambattur site</td>
                                                <td>Residence Construction</td>
                                                <td>Completed</td>
                                            </tr>
                                            <tr class='text-xs'>
                                                <td>21/02/25</td>
                                                <td>Nareshkumar K M</td>
                                                <td>Vignesh Prathap</td>
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
                                            <small>Chapter<br></br><strong>GRIP Aram</strong></small>
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
                                                <td>Vignesh Prathap</td>
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
                                                <td>Vignesh Prathap</td>
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
                                                <td>Vignesh Prathap</td>
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





            <div
                class="modal fade"

                id="referralreceiveReportModal"
                tabindex="-1"
                aria-labelledby="referralreceiveReportModal"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl modal-dialog-centered" style={{ maxWidth: "1450px" }}>
                    <div class="modal-content radius-16 bg-base">

                        <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 class="modal-title fs-5 text-danger" id="referralreceiveReportModal">
                                Chapter : Referrals Receive Report
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
                                            <small>Chapter<br></br><strong>GRIP Aram</strong></small>
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
                                                <td>Vignesh Prathap</td>
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
                                                <td>Vignesh Prathap</td>
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
                                                <td>Vignesh Prathap</td>
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





            <div
                class="modal fade"

                id="tygivenReportModal"
                tabindex="-1"
                aria-labelledby="tygivenReportModal"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl modal-dialog-centered" style={{ maxWidth: "1450px" }}>
                    <div class="modal-content radius-16 bg-base">

                        <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 class="modal-title fs-5 text-danger" id="tygivenReportModal">
                                Chapter : Thank you Given Report
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
                                            <small>Chapter<br></br><strong>GRIP Aram</strong></small>
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
                                                <td>Vignesh Prathap</td>
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
                                                <td>Vignesh Prathap</td>
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
                                                <td>Vignesh Prathap</td>
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






            <div
                class="modal fade"

                id="tyreceiveReportModal"
                tabindex="-1"
                aria-labelledby="tyreceiveReportModal"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl modal-dialog-centered" style={{ maxWidth: "1450px" }}>
                    <div class="modal-content radius-16 bg-base">

                        <div class="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 class="modal-title fs-5 text-danger" id="tyreceiveReportModal">
                                Chapter : Thank you Receive Report
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
                                            <small>Chapter<br></br><strong>GRIP Aram</strong></small>
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
                                                <td>Vignesh Prathap</td>
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
                                                <td>Vignesh Prathap</td>
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
                                                <td>Vignesh Prathap</td>
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