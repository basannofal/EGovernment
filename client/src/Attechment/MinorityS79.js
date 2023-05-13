import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
function MinorityS79() {
  return (
    <>
    <Navbar />

    <div class="page-title-section gnsection my-5" data-overlay="0.7" style={{backgroundColor:"#0c3c53"}}>
    <div class="page-title">
        <div class="container">
            <h2 class="text-light text-center" style={{paddingTop:45}}>This Panchayat is located in <span class="text-info fw-bold">Vadgam Taluka</span></h2>
        </div>
    </div>
    <div class="page-breadcrumb position-static">
        <div class="container">
            <ul class="breadcrumb justify-content-center fw-bold pt-2" style={{backgroundColor:"#0c3c53"}}>
                <li><NavLink to={`/userwellcome`}> Home <i class="bi bi-chevron-double-right"></i> </NavLink></li>
                <li class="text-white" style={{paddingLeft:5}}>S79 - Religious Minority Certificate</li>
            </ul>
        </div>
    </div>
</div>



<div class="container">
        <div class="row">
            <div class="col-lg-10 mx-auto mt-5 col-md-6 border">
                <div class="section-title pt-5">
                    <h2>S79 - Religious Minority Certificate</h2>
                </div>

                <div>
                    <h3 class="pb-4" style={{color:"#0C3C53"}}><i class="bi bi-chevron-double-right"></i> Residence Proof
                        Attachment (Any One) : </h3>
                </div>

                <div>
                    <h6 style={{color:"#209dd8"}}>
                        <i class="bi bi-check-all"></i> Ration Card. <br />
                        <i class="bi bi-check-all"></i> True Copy of Electricity Bill. <br />
                        <i class="bi bi-check-all"></i> True Copy of Telephone Bill. <br />
                        <i class="bi bi-check-all"></i> True Copy of Election Card. <br />
                        <i class="bi bi-check-all"></i> True Copy of Passport. <br />
                        <i class="bi bi-check-all"></i> First Page Of Bank PassBook/Cancelled Cheque. <br />
                        <i class="bi bi-check-all"></i> Post Office Account Statement/Passbook. <br />
                        <i class="bi bi-check-all"></i> Driving License <br />
                        <i class="bi bi-check-all"></i> Government Photo ID cards/ service photo identity
                        card issued by PSU. <br />
                        <i class="bi bi-check-all"></i> Water bill (not older than 3 months). <br />

                    </h6>
                </div>

                <div>
                    <h3 class="pb-4 pt-5" style={{color:"#0C3C53"}}><i class="bi bi-chevron-double-right"></i> Identity
                        Proof
                        Attachment (Any One) : </h3>
                </div>

                <div>
                    <h6 style={{color:"#209dd8"}}>
                        <i class="bi bi-check-all"></i> True Copy of Election Card. <br />
                        <i class="bi bi-check-all"></i> True Copy Income Tax PAN Card. <br />
                        <i class="bi bi-check-all"></i> True Copy of Passport. <br />
                        <i class="bi bi-check-all"></i> Self Attested Copy of Aadhar Card. <br />
                        <i class="bi bi-check-all"></i> Driving License. <br />
                        <i class="bi bi-check-all"></i> Government Photo ID cards/ service photo identity card issued by
                        PSU. <br />
                        <i class="bi bi-check-all"></i> Any Government Document having citizen photo. <br />
                        <i class="bi bi-check-all"></i> Photo ID issued by Recognized Educational Institution <br />
                    </h6>
                </div>

                <div>
                    <h3 class="pb-4 pt-5" style={{color:"#0C3C53"}}><i class="bi bi-chevron-double-right"></i> Caste Proof
                        (Any One) : </h3>
                </div>

                <div>
                    <h6 style={{color:"#209dd8"}}>
                        <i class="bi bi-check-all"></i> Panchama. <br />
                        <i class="bi bi-check-all"></i> Declaration before Talati (Service Related). <br />
                        <i class="bi bi-check-all"></i> Oath Letter. <br />
                        <i class="bi bi-check-all"></i> Certificate on School Letter pad for Religious Minority. <br />
                    </h6>
                </div>

                <div>
                    <h3 class="pb-4 pt-5" style={{color:"#0C3C53"}}><i class="bi bi-chevron-double-right"></i> Proof Needed
                        In Service Attachment : </h3>
                </div>

                <div>
                    <h6 style={{color:"#209dd8"}}>
                        <i class="bi bi-check-all"></i> Income Certificate. <br />
                        <i class="bi bi-check-all"></i> Applicant Answer. <br />
                        <i class="bi bi-check-all"></i> Certified copy of village reg. no. 7/12, no. 8-A & No. 6 for
                        which land is assumed to. <br />
                        <i class="bi bi-check-all"></i> Certified copy of village reg. no. 7/12, no. 8-A & No. 6 for
                        which land is sell to. <br />
                        <i class="bi bi-check-all"></i> Affidavit attached with the application. <br />
                        <i class="bi bi-check-all"></i> Panchama regarding of place status. <br />
                        <i class="bi bi-check-all"></i> Panchama. <br />
                    </h6>
                </div>

            </div>
        </div>
    </div>


    <Footer />
</>
  )
}

export default MinorityS79