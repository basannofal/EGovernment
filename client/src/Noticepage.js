import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
function Noticepage() {

    
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
            setuserdata(data.notice)
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
                            <li class="text-white" style={{ paddingLeft: 5 }}>Notice Detail</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div class="section-title pt-5">
                <h2>Notice Details</h2>
            </div>

            <div class="container border mb-5">


            <table class="table table-striped">
            <thead>
                        <tr className='m-5 p-5'>
                            <th scope="col ">No</th>
                            <th scope="col">Notice Message</th>
                            <th scope="col" className='text-center'>Notice Publish Date</th>
                            <th scope="col" className='text-center'>Notice End Date</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            userdata.map((e, id) => {
                             
                                return (
                                    <>
                                        <tr className='my-3'>
                                            <th scope="row" >{id + 1}</th>
                                            <td  style={{color:"red"}}>{e.noticename}</td>
                                            <td className='text-center'>{e.todaydate}</td>
                                            <td className='text-center'>{e.noticedate}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }


                    </tbody>
                        </table>





              
            </div>


            <hr />
            <Footer />
        </>
  )
}

export default Noticepage