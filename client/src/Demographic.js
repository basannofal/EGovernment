import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import { NavLink } from 'react-router-dom'

function Demographic() {
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
                <li class="text-white" style={{paddingLeft:5}}>Demographic Information</li>
            </ul>
        </div>
    </div>
</div>





<section id="about" class="about">
        <div class="container " data-aos="fade-up">

                <div class="section-title ">
                    <h2 className='text-center'>About of Demographic Information</h2>
                </div>
            <div class="row content">


                <div class="col-lg-8">
                    <p>
                        The Vadgam population chart is a graph that shows the distribution of all demographic groups, Literacy percentage is 67.45 percent, out of these 39.04 percent is male literates and 28.41 percent is female literates. Total Workers percentage is 37.12 percent, out of these 26.92 percent is male workers and 10.20 percent is female workers.Total Taluka Agriculture farmers percentage is 9.71 percent in Vadgam, out of these 8.87 percent is male farmers and 0.85 percent is female farmers. Vadgam Labor percentage is 8.82 percent, out of these 6.79 percent is male labor and 2.03 percent is female labor. Vadgam Taluka people is divided down between male and female members of the population. The below graphic shows from Literacy to Households of Vadgam Taluka.
                    </p>
                    <ul>
                        <li><i class="bi bi-check"></i> Vadgam is located in India, situated in Banaskantha district in northern Gujarat
                        </li>
                        <li><i class="bi bi-check"></i>There are 110 villages under this Taluka. Vadgam region also known as a Dhandhar.</li>

                        <li><i class="bi bi-check"></i> Vadgam is situated between Kheralu and Palanpur, 15 km away from Palanpur the main city of the Banaskantha District.
                        </li>
                    </ul>
                </div>

                <div class="col-lg-4 pt-4 pt-lg-0 border">
                    <div class="text-light Notice_Board mt-3 ">
                        <h3>Population Details</h3>
                    </div>

                    <div class="Notices pt-4">

                        <ul>
                            <li><i class="bi bi-check"></i> Total Population : <span class="text-info fw-bold" style={{fontSize:20}} >240,326</span></li>
                            <li><i class="bi bi-check"></i>  Total Males : <span class="text-info fw-bold" style={{fontSize:20}} >122,254</span></li>
                            <li><i class="bi bi-check"></i>  Total Females : <span class="text-info fw-bold" style={{fontSize:20}} >118,072</span></li>
                            <li><i class="bi bi-check"></i>  Total Households : <span class="text-info fw-bold" style={{fontSize:20}} >47,642</span></li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    </section>
    <Footer />
</>
  )
}

export default Demographic