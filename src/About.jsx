import react from "react";
import Common from "./Common";
import webimg from "../src/Images/about.png";


const About = ()=>
{
    return (<>
    
        <Common 
        
        name=" Welcome to About Page "      
        imgsrc ={webimg}
        btnname= "Contact Now"
        visit= "/contact"

         
         />
        
    </>);
    
}



export default About;


