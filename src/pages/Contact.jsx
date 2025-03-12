import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    location: "",
    dates: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await axios.post("http://localhost:5000/book-tour", formData);
      setStatus(res.data.message);
      setFormData({ name: "", phone: "", email: "", address: "", location: "", dates: "", message: "" });
    } catch (error) {
      setStatus("Error booking tour, please try again.");
    }
  };

  return (
    <>
      <div className="container tour-form-container">
        <div className="text-center">
          <h2>Book Your Tour</h2>
          {status && <p>{status}</p>}
        </div>
        <form className="tour-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" value={formData.address} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="location">Preferred Location</label>
            <select className="form-control" id="location" value={formData.location} onChange={handleChange} required>
              <option value="">Select Location</option>
              <option value="Delhi, New Delhi">Delhi, New Delhi</option>
              <option value="Bihar, India">Bihar, India</option>
              <option value="UP, India">UP, India</option>
              <option value="Mumbai, India">Mumbai, India</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dates">Travel Dates / Month (Required)</label>
            <input type="month" className="form-control" id="dates" value={formData.dates} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message (Required)</label>
            <textarea className="form-control" id="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="btn btn-primary tour-submit-btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
