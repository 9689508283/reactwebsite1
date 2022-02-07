import react from "react";
import { NavLink } from "react-router-dom";
import webimg from "../src/Images/image.gif";

// const image = "images/image.gif";

const Common = (props) => {
  return (
    <>
      <section id="header" className="">
        <div className="container-fuild">
          <div className="row">
            <div className="col-10  mx-auto ">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                  <div className="styleheading">
                    <h2>
                      {props.name}
                      <strong>Business Idea</strong>
                    </h2>
                    <h3 className="my-3">
                      we are the team of talented developer making websites
                    </h3>
                  </div>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-md-6  order-1 order-lg-2">
                  <img
                    src={props.imgsrc}
                    alt="No image"
                    className="imagestyle img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
