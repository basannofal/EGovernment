import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'
import axios from 'axios'
const noncr = 'http://localhost:3000/noncri.pdf'

function Userwelcome() {

  const naviget = useNavigate()

  const { id, obid } = useParams("");
 

  const [slider1, setslider1] = useState('');
  const [userdata, setuserdata] = useState([]);
  const [feedback, setfeedback] = useState([]);

  const navigate = useNavigate()

  let alldata = []

  const Toggle = () => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }


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
    
      setuserdata(data.user)
      alldata = data.user
      alldata.map((e) => {
        if(e._id === obid)
         {
                alldata = e
                setuserdata(e)
        }
      })
    //   userdata.map((e) => {
    //     if(e._id === obid)
    //     {
    //         alldata = e
    //         console.log(e);
    //     }
    //   })
    }


    
  }




  useEffect(() => {
    Getdata();

    const token = localStorage.getItem("token")
    if(token === null){
      naviget(`/userlogin/${id}`, { replace: true })
    }

  }, [])

  

  return (
    <>

      <div class="sidebar">
        <div class="logo-details">
          <i class='bx bx-user'></i>
          <span class="logo_name">{userdata.upass}</span>
        </div>
        <ul class="nav-links">
          <li>
          <NavLink to={`/userwelcome/${id}/${obid}`}>
            <a href="/admin" class="active">
              <i class='bx bx-grid-alt' ></i>
              <span class="links_name">Service</span>
            </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/userprofile/${id}/${obid}`}>
              <a>
                <i class='bx bx-box' ></i>
                <span class="links_name">My Profile</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/userapplication/${id}/${obid}`}>
              <a href="#">
                <i class='bx bx-list-ul' ></i>
                <span class="links_name">My Application</span>
              </a>
            </NavLink>
        </li>
          
          



          <li class="log_out"  >
            

              <a href="#" onClick={() => {localStorage.removeItem("token"); naviget(`/userlogin/${id}`, { replace: true })}}>
                <i class='bx bx-log-out'></i>
                <span class="links_name">Log out</span>
              </a>
            
          </li>
        </ul>
      </div>    
      
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class='bx bx-menu sidebarBtn' onClick={Toggle}></i>
            <span class="dashboard"></span>
          </div>
    
          <div class="profile-details">
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
            <span class="admin_name">{userdata.ufname}</span>
            {/* <i class='bx bx-chevron-down' ></i> */}
          </div>
        </nav>


        <div style={{paddingTop:"90px"}}>
        <div className="row  mt-4" >
                <div className=" border border-2 mx-auto rounded servicesform" style={{backgroundColor:"#fff", width:"320px"}}>
                <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/2.jpg")} height="100px" width="100px" />
                        </div>

                <h4 className='text-center py-3'>Caste certificate</h4>

                <p className='px-3' style={{textAlign:"justify", opacity:.8}}>Caste Certificate is a documented proof that an individual is belonging to a particular caste. This Caste Certificate is an essential document which the citizens of the country can avail for various benefits. </p>
                 <div className='row py-3 px-3'>
                    <div className="col-lg-5 mx-auto "> 
                    <button className='btn btn-primary'>Download</button>
                     </div>
                    <div className="col-lg-5 mx-auto "> 
                    <button className='btn btn-primary'>Apply</button>
                     </div>
                </div>
                </div>
                <div className=" border border-2 mx-auto rounded servicesform" style={{backgroundColor:"#fff", width:"320px"}}>
                <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/1.png")} height="100px" width="100px" />
                        </div>

                <h4 className='text-center py-3'>Non-Creamy Layer Certificate</h4>

                <p className='px-3' style={{textAlign:"justify", opacity:.8}}>Governments issue caste certificates for officially certifying that a person belongs to a particular caste or community. Non-Creamy Layer Certificate is issued to the Other Backward Class (OBC) category candidates by the respective state authorities </p>

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
                
                <div className=" border border-2 mx-auto rounded servicesform" style={{backgroundColor:"#fff", width:"320px"}}>
                <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/3.png")} height="100px" width="100px" />
                        </div>

                <h4 className='text-center py-3'>Senior Citizen Certificate </h4>

                <p className='px-3' style={{textAlign:"justify", opacity:.8}}>The Senior Citizen Card issued by the Social Welfare Department provides a generally recognized proof of age to elders so as to facilitate their access to concessions, discounts or priority services offered by Government departments, public companies, private and commercial establishments.   </p>

                <div className='row py-3 px-3'>
                    <div className="col-lg-5 mx-auto "> 
                    <button className='btn btn-primary'>Download</button>
                     </div>
                    <div className="col-lg-5 mx-auto "> 
                    <button className='btn btn-primary'>Apply</button>
                     </div>
                </div>
                </div>
            </div>

          
          
            <div className="row  mt-4 pb-5" >
                <div className=" border border-2 mx-auto rounded servicesform " style={{backgroundColor:"#fff", width:"320px"}}>
                <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/4.png")} height="100px" width="100px" />
                        </div>

                <h4 className='text-center py-3'>Domicile Certificate</h4>

                <p className='px-3' style={{textAlign:"justify", opacity:.8}}>Domicile certificate is a legal proof, which certifies that a person resides in a particular State. This certificate is an essential document to claim the rights and benefits of the State that he/she lives. </p>

                <div className='row py-3 px-3'>
                    <div className="col-lg-5 mx-auto "> 
                    <button className='btn btn-primary'>Download</button>
                     </div>
                    <div className="col-lg-5 mx-auto "> 
                    <button className='btn btn-primary'>Apply</button>
                     </div>
                </div>
                </div>
                <div className=" border border-2 mx-auto rounded servicesform" style={{backgroundColor:"#fff", width:"320px"}}>
                <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/5.png")} height="100px" width="100px" />
                        </div>

                <h4 className='text-center py-3'>Income Certificate</h4>

                <p className='px-3' style={{textAlign:"justify", opacity:.8}}>An Income Certificate is a document issued by an authority under the State Government certifying the annual income of a person or his family from all sources. </p>

                <div className='row py-3 px-3'>
                    <div className="col-lg-5 mx-auto "> 
                    <button className='btn btn-primary'>Download</button>
                     </div>
                    <div className="col-lg-5 mx-auto "> 
                    <button className='btn btn-primary'>Apply</button>
                     </div>
                </div>
                </div>
                
                <div className=" border border-2 mx-auto rounded servicesform" style={{backgroundColor:"#fff", width:"320px"}}>
                <div style={{ margin: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <img style={{ borderRadius: "50%" }} src={require("./image/ser/6.png")} height="100px" width="100px" />
                        </div>

                <h4 className='text-center py-3'>Widow Certificate </h4>

                <p className='px-3' style={{textAlign:"justify", opacity:.8}}>The widow certificate is needed as proof to widow women that her husband is not alive. Widow Certificate is used to apply for pension services  </p>

                <div className='row py-3 px-3'>
                    <div className="col-lg-5 mx-auto "> 
                    <button className='btn btn-primary'>Download</button>
                     </div>
                    <div className="col-lg-5 mx-auto "> 
                    <button className='btn btn-primary'>Apply</button>
                     </div>
                </div>
                </div>
            </div>

          
           
        </div>



    
      </section>

     
    </>
  )
}


export default Userwelcome