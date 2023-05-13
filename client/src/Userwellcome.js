import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Userwellcome() {

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
            naviget(`/userwellcome/${id}`, { replace: true })
        }
    }




    useEffect(() => {
        Getdata();


    }, [])
    return (
        <>
            <Navbar />

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ marginTop: 100 }}>
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require("./img/s2.png")} width="100%" />
                    </div>
                    <div class="carousel-item ">
                        <img src={require("./img/Gov_Web_Img/slider1.jpg")} height="578px" width="100%" />
                    </div>
                    <div class="carousel-item">
                        <img src={require("./img/s3.png")} width="100%" />

                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>





            <section id="about" class="about gnsection" style={{ paddingTop: 0, marginTop: 40 }}>
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2 >About Us & Latest Update</h2>

                    </div>
                    <div class="row content">


                        <div class="col-lg-8">
                            <p>
                                Vadgam is located in India, situated in Banaskantha
                                district in northern Gujarat.
                                Administratively, it is a Taluka. There are 110 villages under this Taluka. Vadgam region also
                                known as a Dhandhar.
                            </p>
                            <ul>
                                <li><i class="bi bi-check"></i> During the British Raj Vadgam was the capital of Wadagam State,
                                    one of the princely states of
                                    the Mahi Kantha Agency ruled by Rajputs.
                                </li>
                                <li><i class="bi bi-check"></i> Vadgam is situated between Kheralu and Palanpur, 15
                                    km away from Palanpur the main city of the Banaskantha District.</li>
                                <li><i class="bi bi-check"></i> It is a commercial place for
                                    the surrounding the villages Memadpur, Kodaram, Pilucha, Rupal, Gola, Parakhadi, Magarwada,
                                    Nandotra, Majadar, Gidasan and Nanosana. average raindrop in vadgam region is 706mm.
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-4 pt-4 pt-lg-0 border">
                            <div class="text-light Notice_Board mt-3 ">
                                <h3>Latest Update</h3>
                            </div>

                            <div class="Notices pt-4">
                                <marquee class="noticemarq" direction="up" scrollamount="4" >

                                    <ul>
                                        {

                                            notice.map((e, i) => {

                                                if (i + 1 <= 4) {
                                                    return (
                                                        <>

                                                            <li style={{ color: "red" }}><i class="bi bi-check"></i> {e.noticename}</li>

                                                            <small className='ml-4 mt-5' >{e.noticedate}</small>
                                                            <hr className='text-danger' />
                                                        </>
                                                    )
                                                }


                                            })
                                        }

                                    </ul>
                                </marquee>
                            </div>
                            <NavLink to={`/noticedetail/${id}`} style={{ margin: 0, padding: 0 }}>
                                <a href="#" class="btn-learn-more mb-3">Read More</a>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </section>


            <section id="why-us" class="why-us section-bg gnsection">
                <div class="container-fluid" data-aos="fade-up">

                    <div class="row">

                        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                            <div class="content">
                                <h3>About Your <strong>Questions</strong></h3>
                                <p>
                                    I hope your query will be answered in this Questions.
                                </p>
                            </div>

                            <div class="accordion-list">
                                <ul>
                                    <li>
                                        <details>
                                            <summary style={{ listStyle: "none" }}><a data-bs-toggle="collapse" class="collapse"
                                                data-bs-target="#accordion-list-1"><span>01</span> What do you mean by
                                                Taluka Panchayat?
                                                <i class="dropdown-toggle"></i>
                                            </a></summary>
                                            <p>Taluka Panchayats are the intermediate tier of the Panchayat Raj Institutions at
                                                the taluka level. Since 1999, certain specified development schemes earlier
                                                executed by the Zilla Panchayat have been transfered and delegated to the Taluk
                                                Panchayats for implementation.
                                            </p>
                                        </details>
                                    </li>

                                    <li>
                                        <details>
                                            <summary style={{ listStyle: "none" }}><a data-bs-toggle="collapse"
                                                data-bs-target="#accordion-list-2" class="collapsed"><span>02</span>
                                                What is the work of taluka panchayat? <i class="dropdown-toggle"></i></a>
                                            </summary>
                                            <p>protecting them from social injustice and all other forms of exploitation;
                                                amelioration of the Scheduled Castes and Scheduled Tribes and Backward Classes;
                                                Securing social justice to the Scheduled Castes, Scheduled Tribes, Women and
                                                other weaker sections of the society.
                                            </p>
                                        </details>
                                    </li>

                                    <li>
                                        <details>
                                            <summary style={{ listStyle: "none" }}><a data-bs-toggle="collapse"
                                                data-bs-target="#accordion-list-3" class="collapsed"><span>03</span>
                                                Who is the head of taluka panchayat?<i class="dropdown-toggle"></i></a>
                                            </summary>
                                            <p>
                                                The administrative head of the taluka panchayat is called Tehsildar. The
                                                tehsildar is the highest government official in each tehsil or taluka
                                            </p>
                                        </details>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div class="col-lg-5 align-items-stretch order-1 order-lg-2 img bing"
                            data-aos="zoom-in" data-aos-delay="150">
                            &nbsp;</div>
                    </div>

                </div>
            </section>



            <section id="services" class="services section-bg gnsection">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Role of Taluka Panchayat</h2>
                        <p>Exercise overall supervision over the financial and executive administration of the Taluka Panchayat
                            and place before the Taluka Panchayat . </p>
                    </div>


                    <div class="row">
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <div class="icon"><i class="bi bi-dribbble"></i></div>
                                <h4><a href="https://bangalorerural.nic.in/en/taluk-panchayat-role/">Taluka Panchayat Political Setup</a></h4>
                                <p>Every Taluka Panchayat shall consist of the Elected members of Taluka Panchayat</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="icon-box">
                                <div class="icon"><i class="bi bi-file-code-fill"></i></div>
                                <h4><a href="https://bangalorerural.nic.in/en/taluk-panchayat-role/">Standing Committees</a></h4>
                                <p>
                                    1. General Standing Committee. <br />
                                    2. Finance, Audit and Planning Committee. <br />
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="300">
                            <div class="icon-box">
                                <div class="icon"><i class="bi bi-speedometer2"></i></div>
                                <h4><a href="https://bangalorerural.nic.in/en/taluk-panchayat-role/">Social Justice Committee</a></h4>
                                <p>protecting them from social injustice and all other forms of exploitation.</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="400">
                            <div class="icon-box">
                                <div class="icon"><i class="bi bi-stack"></i></div>
                                <h4><a href="https://bangalorerural.nic.in/en/taluk-panchayat-role/">Functions of Taluka Panchayat</a></h4>
                                <p>1. holding of Grama Sabha. <br />
                                    2. maintenance of Water supply works</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


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

            {/* <section id="team" class="team section-bg gnsection">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit
                            in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-6">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                                <div class="pic"><img src={require("./assets/img/team/team-1.jpg")} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4 mt-lg-0">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src={require("./assets/img/team/team-2.jpg")} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                    <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src={require("./assets/img/team/team-3.jpg")} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mt-4">
                            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                <div class="pic"><img src={require("./assets/img/team/team-4.jpg")} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section> */}

            <section id="contact" class="contact gnsection">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>Visit Our Office</p>
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

                                <a href="tel:+919427628497">
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




            <Footer />


        </>
    )
}

export default Userwellcome























// <div id="preloader"></div>
// <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
// class="bi bi-arrow-up-short"></i></a>