import React from 'react'
import "./style.css";
const Section = () => {
  return (
    <section className="section-box">
      <div className="section-content">
        <h1>
          Building Modern Application using <span>React</span> 
        </h1>

        <p>
          This is a Responsive and Component based UI design using react. It is a landing page for my internship program.
        </p>
        <div className="section-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
      <div className="section-image">
        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          alt="section Illustration"
        />
      </div>
    </section>
  )
}

export default Section