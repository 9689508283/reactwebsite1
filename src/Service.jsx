import react from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => (
  <>
    <h1 className="text-center my-5">Service Page</h1>

    <section id="header" className="">
      <div className="container-fuild">
        <div className="row">
          <div className="col-10  mx-auto ">
            <div className="row gy-5">
              {
                Sdata.map((val,ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    // title={val.title}
                    // sname={val.sname}
                    // link={val.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Service;
