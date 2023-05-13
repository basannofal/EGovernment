import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import { NavLink } from 'react-router-dom'

function History() {
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
                    <li><NavLink to={`/`}> Home <i class="bi bi-chevron-double-right"></i> </NavLink></li>
                    <li class="text-white" style={{paddingLeft:5}}>History</li>
                </ul>
            </div>
        </div>
    </div>


    <section id="why-us" class="why-us section-bg p-5" style={{marginTop:-43}}>
        <div class="container-fluid" data-aos="fade-up">

            <div class="row">

                <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                    <div class="section-title">
                        <h2>History About Vadgam</h2>
                    </div>
                    <p  class="px-5"><i class="bi bi-chevron-double-right text-info"></i> Vadgam is located in India, situated in Banaskantha
                        district in northern Gujarat.
                        Administratively, it is a Taluka. There are 110 villages under this Taluka. Vadgam region also
                        known as a Dhandhar.
                        <br /><br />
                        <i class="bi bi-chevron-double-right text-info"></i> During the British Raj Vadgam was the capital of Wadagam State, one of the princely states of
                        the Mahi Kantha Agency ruled by Rajputs.
                    </p>

                    <div class="section-title pt-4">
                        <h2>Geography of Vadgam</h2>
                    </div>
                    <p  class="px-5"><i class="bi bi-chevron-double-right text-info"></i> Vadgam is situated between Kheralu and Palanpur, 15
                        km away from Palanpur the main city of the Banaskantha District. It is a commercial place for
                        the surrounding the villages Memadpur, Kodaram, Pilucha, Rupal, Gola, Parakhadi, Magarwada,
                        Nandotra, Majadar, Gidasan and Nanosana. average raindrop in vadgam region is 706mm.
                    </p>

                </div>

                <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img ving"
                     data-aos="zoom-in"
                    data-aos-delay="150">
                    &nbsp;</div>
            </div>

        </div>
    </section>
        <Footer />
    </>
  )
}

export default History