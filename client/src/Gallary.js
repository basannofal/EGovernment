import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

function Gallary() {
  return (
    <>
    <Navbar />

    <div class="page-title-section gnsection my-5" data-overlay="0.7" style={{ backgroundColor: "#0c3c53" }}>
                <div class="page-title">
                    <div class="container">
                        <h2 class="text-light text-center" style={{ paddingTop: 45 }}>This Panchayat is located in <span class="text-info fw-bold">Vadgam Taluka</span></h2>
                    </div>
                </div>
                <div class="page-breadcrumb position-static">
                    <div class="container">
                        <ul class="breadcrumb justify-content-center fw-bold pt-2" style={{ backgroundColor: "#0c3c53" }}>
                            <li><NavLink to={`/`}> Home <i class="bi bi-chevron-double-right"></i> </NavLink></li>
                            <li class="text-white" style={{ paddingLeft: 5 }}>Gallery</li>
                        </ul>
                    </div>
                </div>
            </div>



     

    <section id="galary" class="galary gnsection">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Galary</h2>
                     
                    </div>

                    <div class="row galary-container mt-5" data-aos="fade-up" data-aos-delay="200">

                        <div class="col-lg-4 col-md-6 galary-item filter-app">
                            <div class="galary-img"><img src={require("./assets/img/galary/galary1.jpg")} width="
    380px" height="200px" alt="" /></div>
                        </div>

                        <div class="col-lg-4 col-md-6 galary-item filter-app">
                            <div class="galary-img"><img src={require("./assets/img/galary/galary2.jpg")} width="
    380px" height="200px" alt="" /></div>
                        </div>

                        <div class="col-lg-4 col-md-6 galary-item filter-app">
                            <div class="galary-img"><img src={require("./assets/img/galary/galary3.jpg")} width="
    380px" height="200px" alt="" /></div>
                        </div>

                        <div class="col-lg-4 col-md-6 galary-item filter-app">
                            <div class="galary-img"><img src={require("./assets/img/galary/galary4.jpg")} width="
    380px" height="200px" alt="" /></div>
                        </div>

                        <div class="col-lg-4 col-md-6 galary-item filter-app">
                            <div class="galary-img"><img src={require("./assets/img/galary/galary5.jpg")} width="
    380px" height="200px" alt="" /></div>
                        </div>

                        <div class="col-lg-4 col-md-6 galary-item filter-app">
                            <div class="galary-img"><img src={require("./assets/img/galary/galary6.jpg")} width="
    380px" height="200px" alt="" /></div>
                        </div>



                    </div>

                </div>
            </section>

    <Footer />
</>
  )
}

export default Gallary