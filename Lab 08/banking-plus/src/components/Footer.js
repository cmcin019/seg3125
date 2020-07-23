import React, { Component } from "react";
import "../styles/Footer.css";
import $ from 'jquery';

class Footer extends Component {
    componentDidMount() {
        $(window).scroll(function() {   
            if($(window).scrollTop() + $(window).height() >= $(document).height()-5) {
                document.getElementById("footer").style.display = "block";
            } else {
                document.getElementById("footer").style.display = "none";
            }
         });
    }
    render() {
        return (
            <div>
                <div id='footer' className="footer-copyright blue">
                    <div className="container">


                    <span class="my_name">Cristopher McIntyre Garcia - 300025114 - cmcin019@uottawa.ca</span><br/>
                    <span class="my_name">https://github.com/cmcin019/seg3125.git</span>

                    </div>
                </div> 
            </div>
        ) 
    }

}

export default Footer