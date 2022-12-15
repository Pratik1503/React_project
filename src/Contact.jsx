import React from "react";
import { useState } from "react";
import "./index.css";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    Phone: "",
    Email: "",
    Message: "",
  });
  const FormSubmit = (e) => {
    e.preventDefault();
    alert(
      `FullName is:${data.fullname} Phone Number is:${data.Phone} Email is:${data.Email}`
    );
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className=" text-center"> CONTACT US </h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto contact">
            <form onSubmit={FormSubmit}>
              <div className="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  className="form-control foorm"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input
                  type="Number"
                  className="form-control foorm"
                  id="exampleFormControlInput1"
                  name="Phone"
                  value={data.Phone}
                  onChange={inputEvent}
                  placeholder="MobileNumber"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control foorm"
                  id="exampleFormControlInput1"
                  name="Email"
                  value={data.Email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control foorm"
                  id="exampleFormControlTextarea1"
                  name="Message"
                  value={data.Message}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-auto my-1">
                <button type="submit" className="btn btn-outline-primary my-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
