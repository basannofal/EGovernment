import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'
import axios from 'axios'

function Userprofile() {
    const { id, obid } = useParams("");
 

    
    const [slider1, setslider1] = useState('');
    const [userdata, setuserdata] = useState([]);
    const [feedback, setfeedback] = useState([]);
  
    const naviget = useNavigate()
  
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
              <a href="/admin" >
                <i class='bx bx-grid-alt' ></i>
                <span class="links_name">Service</span>
              </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/userprofile/${id}/${obid}`}>
                <a class="active">
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
            
            
  
  
  
            <li class="log_out" >
  
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
  
          <div style={{paddingTop:"90px",height:"100vh"}}>
          <div className='row w-50  mx-auto border p-3 shadow p-3 mb-5 bg-body rounded' style={{backgroundColor:"#fff", marginTop:"100px"}}>
                <h2 className=' pt-3 fw-bold'>
                    User Profile Data

                    <hr style={{ width: '5rem', color: '#0D6EFD' }} />
                </h2>
                <form class="row g-3 fw-bold p-2">
                    <div class="col-md-6 py-2">
                        <label class="form-label">Firstname : <b>{userdata.ufname}</b></label>
                    </div>
                    <div class="col-md-6 py-2">
                        <label class="form-label">Lastname : <b> {userdata.ulname} </b></label>
                    </div>
                    <div class="col-md-6 py-2">
                        <label class="form-label">Email : <b>{userdata.ufname}</b></label>
                    </div>
                    <div class="col-md-6 py-2">
                        <label class="form-label">Phone Number :  <b>{userdata.unumber}</b></label>
                    </div>
                    <div class="col-md-6 py-2">
                        <label class="form-label">Aadhar Number :  <b>{userdata.uadhar}</b></label>
                    </div>
                    <div class="col-md-6 py-2">
                        <label class="form-label">Pin Code :  <b>{userdata.upin}</b></label>
                    </div>
                    {/* <div class="col-md-6 py-2">
                        <label class="form-label">District :  <b>{userdata.ufname}</b></label>
                    </div>
                    <div class="col-md-6 py-2">
                        <label class="form-label">Taluka : </label>
                    </div> */}
                </form>
            </div>
          </div>
  
      
        </section>
  
       
      </>
    )
}

export default Userprofile