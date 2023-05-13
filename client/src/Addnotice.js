import React, { useState } from 'react'
import {  NavLink, useNavigate, useNavigation, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar';

function Addnotice() {

    const {id} = useParams("")

    const naviget = useNavigate();
    const Toggle = () => {
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".sidebarBtn");
        sidebarBtn.onclick = function() {
          sidebar.classList.toggle("active");
          if(sidebar.classList.contains("active")){
          sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
        }else
          sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
      }

     
      const [noticemsg, setnoticemsg] = useState('');
      const [noticedate, setnoticedate] = useState('');
      const [noticename, setnoticename] = useState('');

      

const savedata =async (e) => {
    e.preventDefault();



    const res = await fetch(`/addnotice/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            noticemsg, noticedate, noticename
        })
    })

    console.log(res);
    const data = await res.json();
    console.log(data);
    if (res.status === 400) {
        window.alert('error is already exist !!!!')
    }
    else {
        window.alert('Notice Added')
        naviget(`/notice/${id}`, {replace: true})
    }
}
    return (
        <>

{/* <div class="sidebar">
        <div class="logo-details">
          <i class='bx bxl-c-plus-plus'></i>
          <span class="logo_name">Vadgam</span>
        </div>
        <ul class="nav-links">
          <li>
          <NavLink to={`/admin/${id}`}>
            <a >
              <i class='bx bx-grid-alt' ></i>
              <span class="links_name">Dashboard</span>
            </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/staffinfo/${id}`}>
              <a>
                <i class='bx bx-box' ></i>
                <span class="links_name">staffinfo</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/panchayat/${id}`}>
              <a href="#">
                <i class='bx bx-list-ul' ></i>
                <span class="links_name">Panchayat</span>
              </a>
            </NavLink>

          </li>
          <li>
            <NavLink to={`/department/${id}`}>
              <a href="#">
                <i class='bx bx-pie-chart-alt-2' ></i>
                <span class="links_name">Department</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/schemes/${id}`}>
              <a href="#">
                <i class='bx bx-coin-stack' ></i>
                <span class="links_name">Schemes</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/notice/${id}`}>
              <a href="#" className='active'>
                <i class='bx bx-book-alt' ></i>
                <span class="links_name">Notice</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/award/${id}`}>
              <a href="#" >
                <i class='bx bx-user' ></i>
                <span class="links_name">Awards</span>
              </a>
            </NavLink>
          </li>
          
          



          <li class="log_out">
            <NavLink to={`/adminlogin`} >

              <a href="#">
                <i class='bx bx-log-out'></i>
                <span class="links_name">Log out</span>
              </a>
            </NavLink>
          </li>
        </ul>
      </div>  */}

      <Sidebar id={id} cls={'notice'}/>
            <section class="home-section">
                <nav>
                    <div class="sidebar-button">
                        <i class='bx bx-menu sidebarBtn' onClick={Toggle}></i>
                        <span class="dashboard">Dashboard</span>
                    </div>
                    <div class="search-box">
                        <input type="text" placeholder="Search..." />
                        <i class='bx bx-search' ></i>
                    </div>
                    <div class="profile-details">
                        {/* <!--<img src="images/profile.jpg" alt="">--> */}
                        <span class="admin_name">Vadgam</span>
                        <i class='bx bx-chevron-down' ></i>
                    </div>
                </nav>


                <div class="home-content">


                    <div class="sales-boxe pb-5">
                        <div class="recent-sales box">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>

                                <div class="title">Add New Notice</div>
                              
                            </div>
                            <hr />

                         <form action="" >
                         
                         <p className='label'>Notice Name</p>
                            <input type="text" className='inputtag form-control' placeholder="Notice Name" value={noticename} onChange={(e) => { setnoticename(e.target.value)}}/>
                            <p className='label'>Notice Message</p>
                            <input type="text" className='inputtag form-control' placeholder="Notice Message" value={noticemsg} onChange={(e) => { setnoticemsg(e.target.value)}}/>
                            <p className='label'>Notice End Date</p>
                            <input type="date" className='inputtag form-control'  value={noticedate} onChange={(e) => { setnoticedate(e.target.value)}} placeholder="Notice End Date"/>
                    
                            <div>
                            <input type="submit" className='btn btn-primary mt-5' value="Add Notice" onClick={savedata}/>
                            </div>
                            </form>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Addnotice