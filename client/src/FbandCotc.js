import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
function FbandCotc() {

    const naviget = useNavigate();

    let newarr = [];
    const { id } = useParams("")
    // const id = "633d91528c26dd77bc3d4208"
    const [notice, setnotice] = useState([]);
    const [ddodata, setddodata] = useState([]);
    const [userdata, setuserdata] = useState([]);




    const [fbemail, setfbemail] = useState('');
    const [fbname, setfbname] = useState('');
    const [fbsubject, setfbsubject] = useState('');
    const [fbmsg, setfbmsg] = useState('');





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
            setuserdata(data.notice)
            setnotice(data.notice)
            console.log(notice);

            newarr = notice.reverse();
            console.log(newarr);
        }
    }


    const savedata = async (e) => {
        e.preventDefault();



        const res = await fetch(`/addfeedback/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fbemail, fbname, fbsubject, fbmsg
            })
        })

        console.log(res);
        const data = await res.json();
        console.log(data);
        if (res.status === 400) {
            window.alert('error is already exist !!!!')
        }
        else {
            window.alert('Feedback Submited')
            naviget(`//${id}`, { replace: true })
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
                            <li class="text-white" style={{ paddingLeft: 5 }}>Feedback And Contact</li>
                        </ul>
                    </div>
                </div>
            </div>



            <section id="contact" class="contact gnsection">
                <div class="container" data-aos="fade-up">



                    <div class="row">

                        <div class="section-title pt-5 col-lg-5 ">
                            <h2>Contact</h2>
                        </div>

                        <div class="section-title pt-5 col-lg-7 ">
                            <h2>Feedback</h2>
                        </div>
                    </div>
                    <div class="row">

                        <div class="col-lg-5 d-flex align-items-stretch">
                            <div class="info">
                                <div class="address">
                                    <i class="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Vadgam state highway, Gujrat</p>
                                </div>

                                <a href="mailto:vadgam@gmail.com">
                                    <div class="email">
                                        <i class="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>vadgam@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:+02739-262021">
                                    <div class="phone">
                                        <i class="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p> 02739-262021</p>
                                    </div>
                                </a>



                            </div>

                        </div>

                        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form method="post" role="form" class="php-email-form">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="name" onChange={(e) => { setfbname(e.target.value) }} value={fbname} class="form-control" id="name" required />
                                    </div>


                                    <div class="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" class="form-control" onChange={(e) => { setfbemail(e.target.value) }} value={fbemail} name="email" id="email" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" class="form-control" onChange={(e) => { setfbsubject(e.target.value) }} value={fbsubject} name="subject" id="subject" required />
                                </div>
                                <div class="form-group">
                                    <label for="name">Message</label>
                                    <textarea class="form-control" onChange={(e) => { setfbmsg(e.target.value) }} name="message" rows="10" required></textarea>
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button onClick={savedata} type="submit">Send Your Query</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>


            <hr />
            <Footer />
        </>
    )
}

export default FbandCotc