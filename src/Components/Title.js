import React from 'react'
import { Link } from 'react-router-dom';
import './Title.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Title = () => {
  return (
    <>
    <div className='header'>
        <h4 style={{fontFamily: "revert-layer"}}>InTUIT</h4>
        <h6 className="small-font">
          <Link style={{color:"black"}} to="/quickbooks">
            <i className="bi bi-badge-ad-fill"></i>quickbooks
          </Link>
        </h6>
        <h6 className="small-font">
          <Link style={{color:"black"}} to="/mailchimp">
            <i className="bi bi-cc-circle-fill"></i>mailchimp
          </Link>
        </h6>
      </div>
        <div className='header1'>
            <p>Save 50% for 12 months <br />
            - limited time offer. Get started today.</p>
        </div>
        </>
  )
}

export default Title;