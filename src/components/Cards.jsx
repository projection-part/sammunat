import React from 'react';
import { FaCode } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiEasyeda } from "react-icons/si";
import { FaDev } from "react-icons/fa6";
import { SiVorondesign } from "react-icons/si";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { GrVmMaintenance } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Cards = () => {
  return (
    <>
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          Why Choose This Project?
        </h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <div className="fs-1 mb-3"><FaCode /></div>
              <h5 className="fw-bold">Fast Development</h5>
              <p className="text-muted">
                Build and iterate quickly using modern React tools and
                best practices.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <div className="fs-1 mb-3"><MdPhoneIphone /></div>
              <h5 className="fw-bold">Responsive Design</h5>
              <p className="text-muted">
                Fully responsive layouts that work across all devices.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <div className="fs-1 mb-3"><SiEasyeda /></div>
              <h5 className="fw-bold">Easy Deployment</h5>
              <p className="text-muted">
                Deploy your React application instantly using Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="py-5">
          <div className="container">
            <div className="row align-items-center">
              
              {/* Left Content */}
              <div className="col-md-5">
                <h2 className="fw-bold mb-3">Our Services</h2>
                <p className="text-muted mb-4">
                  We provide end-to-end solutions to build,
                  deploy, and scale modern React applications efficiently.
                </p>
                <button className="btn btn-primary">
                  Explore Services
                </button>
              </div>
    
              {/* Right Cards */}
              <div className="col-md-7">
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="card h-100 shadow-sm border-0 p-4">
                      <div className="fs-2 mb-3"><FaDev /></div>
                      <h5 className="fw-bold">Web Development</h5>
                      <p className="text-muted">
                        Modern, scalable, and high-performance React SPA
                        applications.
                      </p>
                    </div>
                  </div>
    
                  <div className="col-sm-6">
                    <div className="card h-100 shadow-sm border-0 p-4">
                      <div className="fs-2 mb-3"><SiVorondesign /></div>
                      <h5 className="fw-bold">UI / UX Design</h5>
                      <p className="text-muted">
                        Clean and intuitive user interfaces using
                        Bootstrap, Tailwind css, Material UI and modern design principles.
                      </p>
                    </div>
                  </div>
    
                  <div className="col-sm-6">
                    <div className="card h-100 shadow-sm border-0 p-4">
                      <div className="fs-2 mb-3"><AiOutlineDeploymentUnit /></div>
                      <h5 className="fw-bold">Deployment</h5>
                      <p className="text-muted">
                        Fast and secure deployment using Vercel and other platforms as well.
                      </p>
                    </div>
                  </div>
    
                  <div className="col-sm-6">
                    <div className="card h-100 shadow-sm border-0 p-4">
                      <div className="fs-2 mb-3"><GrVmMaintenance /></div>
                      <h5 className="fw-bold">Maintenance</h5>
                      <p className="text-muted">
                        Ongoing support, updattion, and performance
                        optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
          </div>
        </div>
        <div className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center">
    
              {/* Left CTA */}
              <div className="col-md-5">
                <h2 className="fw-bold mb-3">
                  Let’s Build Something Great
                </h2>
                <p className="text-muted mb-4">
                  Have an idea or want to collaborate?  
                  Fill out the form and we’ll get back to you shortly.
                </p>
    
                <div>
                  <p className="mb-2">
                    <MdEmail className='fs-4' /> <strong>Email:</strong> contactme@gmail.com
                  </p>
                  <p>
                    <IoCall className='fs-4' /> <strong>Phone:</strong> +91 98765 43210
                  </p>
                </div>
              </div>
    
              {/* Right Form */}
              <div className="col-md-7">
                <div className="card shadow-sm border-0 p-4">
                  <h5 className="fw-bold mb-3">Contact Us</h5>
    
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
    
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
    
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
    
                      <div className="col-12">
                        <textarea
                          rows="4"
                          className="form-control"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
    
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary w-100"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
    
                </div>
              </div>
    
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="container">
            
            <h2 className="text-center fw-bold mb-5">
              Testimonials
            </h2>
    
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0 p-4 text-center">
                  <img
                    src="https://i.pravatar.cc/100?img=1"
                    alt="User"
                    className="rounded-circle mx-auto mb-3"
                    width="80"
                    height="80"
                  />
                  <p className="text-muted">
                    This project showcases clean design and solid
                    React fundamentals. Great Project.
                  </p>
                  <h6 className="fw-bold mt-3 mb-0">Rahul Sharma</h6>
                  <small className="text-muted">
                    Frontend Developer
                  </small>
                </div>
              </div>
    
              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0 p-4 text-center">
                  <img
                    src="https://i.pravatar.cc/100?img=2"
                    alt="User"
                    className="rounded-circle mx-auto mb-3"
                    width="80"
                    height="80"
                  />
                  <p className="text-muted">
                    The UI is clean, responsive, and easy to navigate.
                    Exactly what companies expect from Developer.
                  </p>
                  <h6 className="fw-bold mt-3 mb-0">Anjali Verma</h6>
                  <small className="text-muted">
                    UI/UX Designer
                  </small>
                </div>
              </div>
    
              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0 p-4 text-center">
                  <img
                    src="https://i.pravatar.cc/100?img=3"
                    alt="User"
                    className="rounded-circle mx-auto mb-3"
                    width="80"
                    height="80"
                  />
                  <p className="text-muted">
                    Well-structured React components and good use of
                    Bootstrap and Tailwind css. Deployment on Vercel is smooth.
                  </p>
                  <h6 className="fw-bold mt-3 mb-0">Amit Patel</h6>
                  <small className="text-muted">
                    Software Engineer
                  </small>
                </div>
              </div>
            </div>
    
          </div>
        </div>
    </>
  )
}

export default Cards