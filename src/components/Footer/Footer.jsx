import React from "react";
import "./Footer.css"
import {BsInstagram, BsYoutube, BsLinkedin} from "react-icons";

function Footer(){
    return (
        <footer>
        
            <div className="foot">
                <div className="row">
                <div className="fc">
                    {/* <BsInstagram/>
                    <BsYoutube/>
                    <BsLinkedin/> */}
                    </div>
                    <div className="fc1">
                        <h4>Email</h4>
                        <p>jr3631@srmist.edu.in, js2019@srmist.edu.in</p>
                        <h4>Phone Number</h4>
                        <p>+91 - 9321863306, +91 - 7413845933</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
