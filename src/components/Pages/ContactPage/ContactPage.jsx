import React from "react";
import "./ContactPage.css";
import "../../App.css";
import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <section className="contact">
      <div className="page-title">
        <h5 className="page-name">contact</h5>
        <h5>
          <Link to="/">home</Link> / <span>contact</span>
        </h5>
      </div>

      <div className="contacts_links">
        <div>
          <div className="contact_icon">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="contact_info">
            <h6 className="title">phone:</h6>
            <p>(719) 445-2808; (719) 445-2809</p>
          </div>
        </div>

        <div>
          <div className="contact_icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="contact_info">
            <h6 className="title">address:</h6>
            <p>4578 Marmora Road, Glasgow</p>
          </div>
        </div>

        <div>
          <div className="contact_icon">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="contact_info">
            <h6 className="title">email:</h6>
            <p>info@demolink.org</p>
          </div>
        </div>
      </div>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Your Website" />
        <input type="text" placeholder="Your Company" />
        <textarea placeholder="Your Comment" />
        <button>send message</button>
      </form>
    </section>
  );
}

export default ContactPage;
