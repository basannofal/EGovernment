import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Sidebar from './Component/Sidebar'
function Staffinformation() {
    const { id } = useParams("")
    const [ddodata, setddodata] = useState([]);
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
            setddodata(data)
            setuserdata(data.staffinfo)
            console.log(userdata);
        }
    }



    useEffect(() => {
        Getdata();
    }, [])
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
                            <li class="text-white" style={{ paddingLeft: 5 }}>Staff Information</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div class="section-title pt-5">
                <h2>Staff Information</h2>
            </div>

       




            <div class="row container mx-auto ">
                {
                    userdata.map((ele, id) => {
                        return (<>

                            <div class="col-lg-4 my-4" >

                                <div class="card " >

                                    <img src={require("./image/avatar.jpg")}  alt="" />
                                    <div class="card-body">
                                        <h3 class="card-title" style={{textTransform:"capitalize"}}>{ele.staffname}</h3>
                                        <p class="card-text">{ele.staffaddress}</p>
                                        {/* <p class="card-text">{ele.staffnumber}</p> */}

                                    </div>
                                    <div class="card-footer">
                                    <h4 class="card-text">{ele.staffposition}</h4>
                                    </div>
                                </div>
                            </div>

                        </>)
                    })

                }
            </div>
            <Footer />
        </>
    )
}

export default Staffinformation