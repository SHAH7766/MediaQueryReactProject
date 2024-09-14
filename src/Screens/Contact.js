import Aos from "aos";
import React from "react";
const Contact = () => {
  Aos.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <h1 className="contact">Contact Us</h1>
          </div>
          <div className=" col-lg-6 col-sm-12 col-md-6">
            <center>
            <iframe className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.4154894478156!2d74.27486277470226!3d31.649850640735163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191e9b599e8a15%3A0xca23736379b841f1!2sImamia%20Colony%20Rd%2C%20Imamia%20Colony%20Ferozewala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1726319384066!5m2!1sen!2s"
              referrerPolicy="no-referrer-when-downgrade"
            />
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
