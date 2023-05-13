import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
const noncr = 'http://localhost:3000/noncri.pdf'
const castcr = 'http://localhost:3000/cast.pdf'
const Senior = 'http://localhost:3000/senior.pdf'
const domi = 'http://localhost:3000/domi.pdf'
const income = 'http://localhost:3000/income.pdf'
const widow = 'http://localhost:3000/widow.pdf'




function Talukapanchayat() {
    const { id } = useParams("");

    const [userdata, setuserdata] = useState([]);
    const [obid, setobid] = useState('');


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
            setuserdata(data.panchayat)
            console.log(userdata);
        }
    }


    const getid = () => {
        setobid(localStorage.getItem("obid"))
        console.log(obid);
    }

    useEffect(() => {
        Getdata();
        getid()
    }, [])

    return (
        <>
            <Navbar />

            <div class="page-title-section gnsection my-5" data-overlay="0.7" style={{ backgroundColor: "#0c3c53" }}>
                <div class="page-title">
                    <div class="container">
                        <h2 class="text-light text-center" style={{ paddingTop: 45 }}>This Panchayat is located in <span class="text-info fw-bold">Taluka Panchayat</span></h2>
                    </div>
                </div>
                <div class="page-breadcrumb position-static">
                    <div class="container">
                        <ul class="breadcrumb justify-content-center fw-bold pt-2" style={{ backgroundColor: "#0c3c53" }}>
                            <li><NavLink to={`/`}> Home <i class="bi bi-chevron-double-right"></i> </NavLink></li>
                            <li class="text-white" style={{ paddingLeft: 5 }}>Taluka Panchayat</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div class="section-title pt-5">
                <h2>E-Govenment Forms</h2>
            </div>

            <div class="container">
                <div className="row  mt-4" >
                    <div className=" border border-2 mx-auto rounded servicesform" style={{ backgroundColor: "#fff", width: "320px" }}>
                        <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/2.jpg")} height="100px" width="100px" />
                        </div>


                        <h4 className='text-center py-3'>Caste certificate</h4>

                        <p className='px-3' style={{ textAlign: "justify", opacity: .8, height: "200px", overflow: "hidden" }}>Caste Certificate is a documented proof that an individual is belonging to a particular caste. This Caste Certificate is an essential document which the citizens of the country can avail for various benefits. </p>
                        <div className='row py-3 px-3'>

                            <div className="col-lg-5 mx-auto ">
                                <a href={castcr} download>

                                    <button className='btn btn-primary'>Download</button>
                                </a>
                            </div>

                            <div className="col-lg-5 mx-auto ">
                                <NavLink to={`/noncriminal/${id}/${obid}`}>
                                    <button className='btn btn-primary'>Apply</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className=" border border-2 mx-auto rounded servicesform" style={{ backgroundColor: "#fff", width: "320px" }}>
                        <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/1.png")} height="100px" width="100px" />
                        </div>

                        <h4 className='text-center py-3'>Non-Creamy Layer Certificate</h4>

                        <p className='px-3' style={{ textAlign: "justify", opacity: .8, height: "200px", overflow: "hidden" }}>Governments issue caste certificates for officially certifying that a person belongs to a particular caste or community. Non-Creamy Layer Certificate is issued to the Other Backward Class (OBC) category candidates by the respective state authorities </p>

                        <div className='row py-3 px-3'>

                            <div className="col-lg-5 mx-auto ">
                                <a href={noncr} download>
                                    <button className='btn btn-primary'>Download</button>
                                </a>
                            </div>
                            <div className="col-lg-5 mx-auto ">
                                <NavLink to={`/noncriminal/${id}/${obid}`}>

                                    <button className='btn btn-primary'>Apply</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" border border-2 mx-auto rounded servicesform" style={{ backgroundColor: "#fff", width: "320px" }}>
                        <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/3.png")} height="100px" width="100px" />
                        </div>
                        <h4 className='text-center py-3'>Senior Citizen Certificate </h4>

                        <p className='px-3' style={{ textAlign: "justify", opacity: .8, height: "200px", overflow: "hidden" }}>The Senior Citizen Card issued by the Social Welfare Department provides a generally recognized proof of age to elders so as to facilitate their access to concessions, discounts or priority services offered by Government departments, public companies, private and commercial establishments.   </p>

                        <div className='row py-3 px-3'>
                            <div className="col-lg-5 mx-auto ">
                            <a href={Senior} download>


                                    <button className='btn btn-primary'>Download</button>
                                </a>
                            </div>
                            <div className="col-lg-5 mx-auto ">
                                <NavLink to={`/noncriminal/${id}/${obid}`}>

                                    <button className='btn btn-primary'>Apply</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row  mt-4 pb-5" >
                    <div className=" border border-2 mx-auto rounded servicesform " style={{ backgroundColor: "#fff", width: "320px" }}>
                        <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/4.png")} height="100px" width="100px" />
                        </div>

                        <h4 className='text-center py-3'>Domicile Certificate</h4>

                        <p className='px-3' style={{ textAlign: "justify", opacity: .8, height: "200px", overflow: "hidden" }}>Domicile certificate is a legal proof, which certifies that a person resides in a particular State. This certificate is an essential document to claim the rights and benefits of the State that he/she lives. </p>

                        <div className='row py-3 px-3'>
                            <div className="col-lg-5 mx-auto ">
                                
                                <a href={domi} download>

                                    <button className='btn btn-primary'>Download</button>
                                </a>                                
                            </div>
                            <div className="col-lg-5 mx-auto ">
                                <NavLink to={`/noncriminal/${id}/${obid}`}>

                                    <button className='btn btn-primary'>Apply</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className=" border border-2 mx-auto rounded servicesform" style={{ backgroundColor: "#fff", width: "320px" }}>
                        <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/5.png")} height="100px" width="100px" />
                        </div>

                        <h4 className='text-center py-3'>Income Certificate</h4>

                        <p className='px-3' style={{ textAlign: "justify", opacity: .8, height: "200px", overflow: "hidden" }}>An Income Certificate is a document issued by an authority under the State Government certifying the annual income of a person or his family from all sources. </p>

                        <div className='row py-3 px-3'>
                            <div className="col-lg-5 mx-auto ">
                                
                                <a href={income} download>

                                    <button className='btn btn-primary'>Download</button>
                                </a>                                
                            </div>
                            <div className="col-lg-5 mx-auto ">
                                <NavLink to={`/noncriminal/${id}/${obid}`}>

                                    <button className='btn btn-primary'>Apply</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className=" border border-2 mx-auto rounded servicesform" style={{ backgroundColor: "#fff", width: "320px" }}>
                        <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/6.png")} height="100px" width="100px" />
                        </div>

                        <h4 className='text-center py-3'>Widow Certificate </h4>

                        <p className='px-3' style={{ textAlign: "justify", opacity: .8, height: "250px", overflow: "hidden" }}>The widow certificate is needed as proof to widow women that her husband is not alive. Widow Certificate is used to apply for pension services  </p>

                        <div className='row py-3 px-3'>
                            <div className="col-lg-5 mx-auto ">
                                
                                <a href={widow} download>

                                    <button className='btn btn-primary'>Download</button>
                                </a>                                
                            </div>
                            <div className="col-lg-5 mx-auto ">
                                <NavLink to={`/noncriminal/${id}/${obid}`}>

                                    <button className='btn btn-primary'>Apply</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <hr />
            <Footer />
        </>
    )
}

export default Talukapanchayat