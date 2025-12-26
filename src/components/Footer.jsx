import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="text-light pt-5" style={{backgroundColor:"#354858"}}>
      <div className="container">

        {/* Top Footer */}
        <div className="row g-4">

          {/* Brand & About */}
          <div className="col-md-3">
            <h5 className="fw-bold">ReactLanding</h5>
            <p className="text-light small">
              A modern React landing page showcasing clean UI,
              responsive design, and real-world development practices.
            </p>
          </div>

          {/* Services */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Web Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  UI / UX Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Deployment
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="text-light small mb-1">
              <MdEmail /> contact@yourdomain.com
            </p>
            <p className="text-light small mb-1">
              <IoCall /> +91 98765 43210
            </p>
            <p className="text-light small">
              <FaLocationDot /> India
            </p>
          </div>

        </div>

        {/* Newsletter */}
        <div className="row mt-5">
          <div className="col-md-6 mx-auto">
            <h6 className="fw-bold text-center mb-3">
              Subscribe to our newsletter
            </h6>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary my-4" />

        {/* Bottom Footer */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pb-3">
          <p className="text-light small mb-2 mb-md-0">
            © {new Date().getFullYear()} ReactLanding. All rights reserved.
          </p>

          <div className="d-flex gap-3">
            <a href="#" className="text-muted fs-5"><FaLinkedin className='bg-light' /></a>
            <a href="#" className="text-muted fs-5"><FaSquareXTwitter className='bg-light'  /></a>
            <a href="#" className="text-muted fs-5"><FaSquareInstagram className='bg-light'  /></a>
            <a href="#" className="text-muted fs-5"><FaFacebook className='bg-light'  /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer