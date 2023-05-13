import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
function Schemedetail() {
    const { id } = useParams("");
    const { obid } = useParams("");
    console.log(id);
    console.log(obid);

    let olddata = []
    let newdata = []
    const [userdata, setuserdata] = useState([]);
    const [maindata, setmaindata] = useState([]);


    const Getdata = async () => {
        const res = await fetch(`/getscheme/${id}/${obid}`, {
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
            setuserdata(data[0].scheme[0])
            olddata = data[0].scheme

            console.log(data[0].scheme[0]);
        }
    }


    useEffect(() => {
        Getdata();

    }, [obid])
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
                            <li class="text-white" style={{ paddingLeft: 5 }}>{userdata.schemename}</li>
                        </ul>
                    </div>
                </div>
            </div>


            <section id="why-us" class="why-us section-bg ">
                <div class="container-fluid" data-aos="fade-up">

                    <div class="section-title pt-5">
                        <h2>{userdata.schemename}</h2>
                    </div>

                    <div class="row">

                        <div className="col-lg-8" style={{width: "200px", height: "220px", overflow: "hidden",  overflowY: "scroll"}}>

                            <div class="content m-0 py-0">
                                <p>
                                    {userdata.schemedetail}
                                </p>



                            </div>
                        </div>

                        <div className="col-lg-4">
                        
                            {/* <img src={require(`./uploads/${userdata.schemephoto}`)} width="
    400px" height="400px" alt="" /> */}
                        </div>

                    </div>

                    <div className='mt-0 py-2 content'>

                        <strong>Expire Date :- </strong> <span className='text-danger'>

                            {userdata.expdate}
                        </span>
                    </div>

                </div>
            </section>






            <hr />
            <Footer />
        </>
    )
}

export default Schemedetail