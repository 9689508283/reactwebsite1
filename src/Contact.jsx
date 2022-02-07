import react, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const InputEvent = (event) => {
const {name, value} =event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const FormSubmit = (e) => {
e.preventDefault();
console.log(setData);
alert(`My Name IS ${data.fullName}. My Email Address is ${data.email} And My Phone Number Is ${data.phoneNumber} Here is what i want to say ${data.message}  `)
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={FormSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  //   id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  //   id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter You Email Id"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number</label>
                <input
                  type="number"
                  className="form-control"
                  //   id="exampleFormControlInput1"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={InputEvent}
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  //   id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <input type="submit" className="btn btn-primary" value="SUBMIT 👍"  />
               
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
