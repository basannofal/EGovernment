import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

function AboutTdo() {

  const { id } = useParams("");

    const [userdata, setuserdata] = useState([]);
  
  
    const Getdata = async () => {
        const res = await fetch(`/getdata/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        })
    
        const data = await res.json();
        if (!data) {
          window.alert('error in get data')
        }
        else {
          setuserdata(data)
          console.log(userdata);
        }
      }


      useEffect(() => {
        Getdata();
      }, [])
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
                <li class="text-white" style={{paddingLeft:5}}>About TDO</li>
            </ul>
        </div>
    </div>
</div>



<section id="team" class="team">
        <div class="container" data-aos="fade-up">

                    <h2 className='text-center pb-4'>About of TDO</h2>
            <div class="row content">

                <div class="section-title">
                </div>
                <div class="col-lg-6">
                    <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                        <div class="pic"><img src={require("./assets/img/avatar.jpg")} class="img-fluid" alt="" />
                        </div>
                        <div class="member-info">
                            <h4>{userdata.tdonamme}</h4>
                            <span>TDO </span>

                            <p>{userdata.tdoaddress}</p>
                            <p>{userdata.abouttdo}</p>

                            <div class="social mt-4">
                           
                               {/* <i class="bi bi-phone mt-2 mr-2"></i> <p>{userdata.tdonumber}</p> */}
                              
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
    <Footer />
</>
  )
}

export default AboutTdo