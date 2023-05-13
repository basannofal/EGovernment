import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer id="footer">

            <div class="footer-top m-0 pt-4">
                    <div class="container ">
                        <div class="row ">

                            <div class="m-0 p-0 col-lg-3 col-md-6 footer-contact">
                                <h3>Vadgam <br /> Taluka</h3>
                                
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                            Vadgam state highway,<br />
                                Gujrat<br />
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                            <strong>Len line :</strong> 02739-262021<br />

                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                            <strong>Email:</strong> vadgam@gmail.com<br />

                            </div>

                        </div>
                    </div>
                </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: "#f5f5f5" }}>

            <div className='row' style={{margin:0}}>
            <div className='col-sm-12 col-lg-2'>

                <a href="https://www.digitalindia.gov.in/" target="blank">

                    <div className='px-2 mx-auto border'>
                        <img src={require("../img/d1.png")} />

                    </div>
                </a>
            </div>
            <div className='col-sm-12 col-lg-2'>
                <a href="https://www.pmindia.gov.in/en/" target="blank">

                    <div className='px-2 mx-auto border'>
                        <img src={require("../img/d2.png")} />
                    </div>
                </a>
            </div>
                <div className='col-sm-12 col-lg-2'>
                <a href="https://www.india.gov.in/" target="blank">

                    <div className='px-2 mx-auto border'>
                        <img src={require("../img/d3.png")} />
                    </div>
                </a>
            </div>
                <div className='col-sm-12 col-lg-2'>
                <a href="https://pmnrf.gov.in/en/" target="blank">

                    <div className='px-2 mx-auto border'>
                        <img src={require("../img/d4.png")} />
                    </div>
                </a>
            </div>
                <div className='col-sm-12 col-lg-2'>
                <a href="https://data.gov.in/" target="blank">

                    <div className='px-2 mx-auto border'>
                        <img src={require("../img/d5.png")} />
                    </div>
                </a>
            </div>
                <div className='col-sm-12 col-lg-2'>
                <a href="https://www.mygov.in/" target="blank">

                    <div className='px-2 mx-auto border'>
                        <img src={require("../img/d6.png")} />
                    </div>
                </a>
            </div>
            </div>
            </div>

               

                <div class="container footer-bottom clearfix">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Hackathon Project</span></strong>.
                    </div>
                    <div class="credits">
                        Designed by <a href="">TM002232</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer