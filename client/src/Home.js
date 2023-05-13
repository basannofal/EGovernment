import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function Home() {

//   const { id } = useParams("")
// const id = "633d91528c26dd77bc3d4208";
  const [ddodata, setddodata] = useState([]);
  
  const [userdata, setuserdata] = useState([]);


const navigate = useNavigate();
  const Getdata = async () => {
      const res = await fetch(`/getdata`, {
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
          setddodata(data[0]._id)
          const id = data[0]._id
          navigate(`/userwellcome/${id}`)
      }
  }
  useEffect(() => {
    Getdata();
    // navigate(`/userwellcome/${id}`)

  }, [])
  return (
    <>
            <Navbar />
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ marginTop: 120 }}>
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require("./img/s2.png")} width="100%"  />
                    </div>
                    <div class="carousel-item ">
                        <img src={require("./img/Gov_Web_Img/slider1.jpg")} height="578px" width="100%" />
                    </div>
                    <div class="carousel-item">
                        <img src={require("./img/s3.png")} width="100%"  />

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



            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor:"#f5f5f5" }}>
            <a href="https://www.digitalindia.gov.in/" target="blank">

                <div className='px-2 mx-auto border'>
                    <img src={require("./img/d1.png")} />

                </div>
            </a>

            <a href="https://www.pmindia.gov.in/en/" target="blank">
                
                <div className='px-2 mx-auto border'>
                    <img src={require("./img/d2.png")} />
                </div>
            </a>
            <a href="https://www.india.gov.in/" target="blank">
                
                <div className='px-2 mx-auto border'>
                    <img src={require("./img/d3.png")} />
                </div>
            </a>
            <a href="https://pmnrf.gov.in/en/" target="blank">
                
                <div className='px-2 mx-auto border'>
                    <img src={require("./img/d4.png")} />
                </div>
            </a>
            <a href="https://data.gov.in/" target="blank">
                
                <div className='px-2 mx-auto border'>
                    <img src={require("./img/d5.png")} />
                </div>
            </a>
            <a href="https://www.mygov.in/" target="blank">
                
                <div className='px-2 mx-auto border'>
                    <img src={require("./img/d6.png")} />
                </div>
            </a>
            </div>


            <section id="about" class="about gnsection" style={{ paddingTop: 0, marginTop: 40 }}>
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2 >About Us & Notice Board</h2>

                    </div>
                    <div class="row content">


                        <div class="col-lg-8">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et
                                dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </li>
                                <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate
                                    velit</li>
                                <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </li>
                            </ul>
                        </div>

                        <div class="col-lg-4 pt-4 pt-lg-0 border">
                            <div class="text-light Notice_Board mt-3 ">
                                <h3>Notice Board</h3>
                            </div>

                            <div class="Notices pt-4">

                                <ul>
                                    <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat</li>
                                    <li><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate
                                        velit</li>
                                    <li><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat</li>
                                </ul>

                            </div>

                            <a href="#" class="btn-learn-more mb-3">Read More</a>
                        </div>
                    </div>

                </div>
            </section>


            <section id="why-us" class="why-us section-bg gnsection">
                <div class="container-fluid" data-aos="fade-up">

                    <div class="row">

                        <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

                            <div class="content">
                                <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et
                                    dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                </p>
                            </div>

                            <div class="accordion-list">
                                <ul>
                                    <li>
                                        <details>
                                            <summary className='listsyle'><a data-bs-toggle="collapse" class="collapse"
                                                data-bs-target="#accordion-list-1"><span>01</span> Non
                                                consectetur a erat nam at lectus urna duis? <i class="dropdown-toggle"></i>
                                            </a></summary>
                                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
                                                international pavilions, award-winning fireworks and seasonal special events.
                                            </p>
                                        </details>
                                    </li>

                                    <li>
                                        <details>
                                            <summary className='listsyle'><a data-bs-toggle="collapse"
                                                data-bs-target="#accordion-list-2" class="collapsed"><span>02</span>
                                                Feugiat scelerisque varius morbi enim nunc? <i
                                                    class="dropdown-toggle"></i></a></summary>
                                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
                                                international pavilions, award-winning fireworks and seasonal special events.
                                            </p>
                                        </details>
                                    </li>

                                    <li>
                                        <details>
                                            <summary className='listsyle'><a data-bs-toggle="collapse"
                                                data-bs-target="#accordion-list-3" class="collapsed"><span>03</span>
                                                Dolor sit amet consectetur adipiscing elit?<i
                                                    class="dropdown-toggle"></i></a></summary>
                                            <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
                                                international pavilions, award-winning fireworks and seasonal special events.
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
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit
                            in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">
                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box">
                                <div class="icon"><i class="bi bi-dribbble"></i></div>
                                <h4><a href="">Lorem Ipsum</a></h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                            data-aos-delay="200">
                            <div class="icon-box">
                                <div class="icon"><i class="bi bi-file-code-fill"></i></div>
                                <h4><a href="">Sed ut perspici</a></h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="300">
                            <div class="icon-box">
                                <div class="icon"><i class="bi bi-speedometer2"></i></div>
                                <h4><a href="">Magni Dolores</a></h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="400">
                            <div class="icon-box">
                                <div class="icon"><i class="bi bi-stack"></i></div>
                                <h4><a href="">Nemo Enim</a></h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            <section id="galary" class="galary gnsection">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Galary</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit
                            in iste officiis commodi quidem hic quas.</p>
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

            <section id="team" class="team section-bg gnsection">
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
            </section>

            <section id="contact" class="contact gnsection">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit
                            in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div class="row">

                        <div class="col-lg-5 d-flex align-items-stretch">
                            <div class="info">
                                <div class="address">
                                    <i class="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div class="email">
                                    <i class="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div class="phone">
                                    <i class="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>


                            </div>

                        </div>

                        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="name" class="form-control" id="name" required />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="name">Your Email</label>
                                        <input type="email" class="form-control" name="email" id="email" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name">Subject</label>
                                    <input type="text" class="form-control" name="subject" id="subject" required />
                                </div>
                                <div class="form-group">
                                    <label for="name">Message</label>
                                    <textarea class="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div class="my-3">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>



            <Footer />


        </>
  )
}

export default Home