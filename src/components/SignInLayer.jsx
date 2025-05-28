import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";

const SignInLayer = () => {
  return (
    <section className='auth mainpage bg-base d-flex flex-wrap'>
      <div className='auth-left  d-lg-block d-none'>
        <div className='d-flex d-none align-items-center flex-column h-100 justify-content-center'>
          <img src='assets/images/auth/auth-img.jpg' alt='' />
        </div>
      </div>
      <div className='auth-right  py-32 px-24 d-flex flex-column justify-content-center'>
        <div className='insidebox max-w-464-px mx-auto w-100'>
          <div>
            <Link to='/' className='mb-40 max-w-150-px'>
              <img src='assets/images/logo.png' alt='' />
            </Link>
            <h4 className='mb-12'> Welcome back! GRIP Business Forum </h4>
            {/* <p className='mb-32 text-secondary-light text-lg'>
              Welcome back! GRIP Business Forum
            </p> */}
          </div>
          <form action='#'>
            <div className='icon-field mb-16'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='mage:user' />
              </span>
              <input
                type='text'
                className='form-control h-56-px bg-neutral-50 radius-12'
                placeholder='Username'
              />
            </div>
            <div className='position-relative mb-20'>
              <div className='icon-field'>
                <span className='icon top-50 translate-middle-y'>
                  <Icon icon='solar:lock-password-outline' />
                </span>
                <input
                  type='password'
                  className='form-control h-56-px bg-neutral-50 radius-12'
                  id='your-password'
                  placeholder='Password'
                />
              </div>
              <span
                className='toggle-password ri-eye-line cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light'
                data-toggle='#your-password'
              />
            </div>
            <div className=''>
              <div className='d-flex justify-content-between gap-2'>
                <div className='form-check style-check d-flex align-items-center'>
                  <input
                    className='form-check-input border border-neutral-300'
                    type='checkbox'
                    defaultValue=''
                    id='remeber'
                  />
                  <label className='form-check-label' htmlFor='remeber'>
                    Remember me{" "}
                  </label>
                </div>
                <Link to='#' className='text-primary-600 fw-medium'>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              type='submit'
              className='btn btn-primary grip text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32'
            >
              {" "}
             <Link to='/dashboard' className=' fw-semibold'>
                  Sign In
                </Link>
            </button>

            <div className='mt-32 text-center text-sm'>
              <p className='mb-0'>
              Let’s grow together! Join the GRIP Business Forum  {" "}
                <Link to='/sign-up' className='text-primary-600 fw-semibold'>
              Register today!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInLayer;
