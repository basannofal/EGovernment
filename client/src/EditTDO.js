import React, { useState } from 'react'
import {  NavLink, useNavigate, useNavigation, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar';

function EditTDO() {

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

     
    const [tdoname, settdoname] = useState('');
    const [tdonumber, settdonumber] = useState('');
    const [tdoaddress, settdoaddress] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [abouttdo, setabouttdo] = useState('');

    
   

const savedata =async (e) => {
    e.preventDefault();



    const res = await fetch(`/edittdoinfo/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            
            tdoname, tdonumber,tdoaddress,username,abouttdo
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
        naviget(`/admin/${id}`, {replace: true})
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
            <a className='active'>
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
              <a href="#">
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

      <Sidebar id={id} cls={'home'}/>

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

                        <div class="title">Edit TDO Detail</div>
                      
                    </div>
                    <hr />

                 <form action="" >
                
                    <p className='label'>TDO Name</p>
                    <input type="text" className='inputtag form-control' placeholder="TDO Name" value={tdoname} onChange={(e) => { settdoname(e.target.value)}}/>
                    <p className='label'>TDO Number</p>
                    <input type="text" className='inputtag form-control' placeholder="TDO Number" value={tdonumber} onChange={(e) => { settdonumber(e.target.value)}}/>

                    <p className='label'>TDO Address</p>
                    <input type="text" className='inputtag form-control' placeholder="TDO Address" value={tdoaddress} onChange={(e) => { settdoaddress(e.target.value)}}/>
                    <p className='label'>UserName</p>
                    <input type="text" className='inputtag form-control' placeholder="UserName" value={username} onChange={(e) => { setusername(e.target.value)}}/>
                    <p className='label'>About TDO</p>
                    <textarea className='inputtag form-control' onChange={(e) => { setabouttdo(e.target.value)}}>
                    {abouttdo}

                    </textarea>
                  
                   
                    <div>
                    <input type="submit" className='btn btn-primary mt-5' value="Save Changes" onClick={savedata}/>
                    </div>
                    </form>

                </div>

            </div>
        </div>
    </section>
</>
  )
}

export default EditTDO