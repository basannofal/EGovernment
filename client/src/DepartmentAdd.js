import React, { useState } from 'react'
import { NavLink, useNavigate, useNavigation, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Component/Sidebar';

function DepartmentAdd() {

  const { id } = useParams("")

  const naviget = useNavigate();
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



  const [dept, setdept] = useState({
    name: '',
    info: '',
    web: '',
    photo: ''
  })

  let name, value;
  const handlechange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setdept({ ...dept, [name]: value })
    console.log(dept);
  }




  const handlephoto = (e) => {
    setdept({ ...dept, photo: e.target.files[0] });

  }

  
  const Savedept = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append('name', dept.name)
      formData.append('info', dept.info)
      formData.append('web', dept.web)
      formData.append('photo', dept.photo)



      // for watch formdata Values 

      // for (var pair of formData.entries()) {
      //     console.log(pair[0]+ ', ' + pair[1]); 
      // }
      


      const url = `/savedept/${id}`

      let res = axios.patch(url, formData);

      if (!res) {
        window.alert('error in get data2')
      }
      else {
        // const data2 = res.data;

        naviget(`/department/${id}`, { replace: true })
      }

    } catch (err) {
      console.log('error');
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
              <a href="#" className='active'>
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
      </div> */}
      <Sidebar id={id} cls={'dept'}/>

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

                <div class="title">Department Information</div>

              </div>
              <hr />

            
              <form action="" >

                <p className='label'>Department Name</p>
                <input type="text" className='inputtag form-control' placeholder="Department Name" value={dept.name} name='name'  onChange={handlechange}  />
                <p className='label'>Department Inforamtion</p>
                <textarea className='inputtag form-control' name='info' value={dept.info} onChange={handlechange}  placeholder="Department Inforamtion"></textarea>

                <p className='label'>Department Website Link</p>
                <input type="tel" className='inputtag form-control' name='web' value={dept.web} onChange={handlechange}  placeholder="Department Website Link" />

                <p className='label'>Department Photo</p>
                <input type="file" className='inputtag form-control' name='photo' onChange={handlephoto} placeholder="Sarpnach Address" pattern="[0-9]{10}" />

                <div>
                  <input type="submit" className='btn btn-primary mt-5' value="Add Department" onClick={Savedept} />
                </div>
              </form>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default DepartmentAdd