import react from "react";
import webimg from "../src/Images/home.png";
import Common from "./Common";


// const image = "images/image.gif"; 

const Home = () => {
  return (
    <>
      <Common 
             
        name=" Grow your Business with "      
        imgsrc ={webimg}
        btnname= "Get Started"
        visit= "/service"

         
         />
    </>
  );
};

export default Home;
