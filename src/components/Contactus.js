import React from 'react';
import address from './Component 5.png';
import call from './Component 6.png';
import mail from './Component 4.png';
import form from './Form.png';
import Google from './FindUsonGoogleMap.png';
import Location from './Rectangle45.png';
import footer from './footer.png';

const Contactus = () => {
  return (
    <div className="container my-5">
      {/* Contact Us Header */}
      <div className="row my-5 align-items-center">
        {/* Content Section - Left */}
        <div className="col-md-6 order-md-1">
          <div className="text-center contactus">
            <h1 className="display-5 fw-bold">Contact Us</h1>
            <p className="text-muted">
              Get in touch with Jash Corporation to explore how we can support your goals with precision-engineered solutions.
            </p>
          </div>

          {/* Address and Questions Sections */}
          <div className="row g-4 align-items-center mt-4">
            {/* Address Section - Left */}
            <div className="col-md-6 d-flex justify-content-start">
              <div className="d-flex align-items-start" style={{ maxWidth: "400px" }}>
                <img src={address} alt="Visit Us" className="me-3" style={{ width: "50px" }} />
                <div>
                  <h5 className="fw-bold">Visit Us</h5>
                  <p className="mb-1">Sumer Nagar, Building</p>
                  <p className="mb-1">NO.1, S.V.Road, Borivali West</p>
                  <p>Mumbai 400092</p>
                </div>
              </div>
            </div>

            {/* Questions Section - Right */}
            <div className="col-md-6 d-flex justify-content-start">
              <div className="d-flex flex-column" style={{ maxWidth: "400px" }}>
                <div className="d-flex align-items-start mb-3">
                  <img src={call} alt="Call Us" className="me-3" style={{ width: "50px" }} />
                  <div>
                    <h5 className="fw-bold">Have Any Questions?</h5>
                    <p>+91 98201 27073</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <img src={mail} alt="Mail Us" className="me-3" style={{ width: "50px" }} />
                  <div>
                    <h5 className="fw-bold">Mail Us</h5>
                    <p>jashcorporation@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section - Right */}
        <div className="col-md-6 order-md-2 text-center">
          <img src={form} alt="Contact Form" className="img-fluid rounded" style={{ maxWidth: "100%" }} />
        </div>
      </div>

      {/* Google Map and Location */}
      <div className="container">
        <div className="row g-4">
          {/* Google Map Image */}
          <div className="col-12 text-center">
            <img
              src={Google}
              alt="Google Map"
              className="img-fluid rounded"
              style={{ maxWidth: "400px", marginBottom: "25px", marginLeft: "auto", marginRight: "auto" }}
            />
          </div>

          {/* Location Image */}
          <div className="col-12">
            <img
              src={Location}
              alt="Location"
              className="img-fluid rounded"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-5">
        <img src={footer} alt="Footer" className="img-fluid" />
      </div>
    </div>
  );
};

export default Contactus;
