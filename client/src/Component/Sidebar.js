import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar({id, cls}) {

  return (
    
  <div class="sidebar">
        <div class="logo-details">
          <i class='bx bxl-c-plus-plus'></i>
          <span class="logo_name">Vadgam</span>
        </div>
        <ul class="nav-links" >
          <li>
            <NavLink to={`/admin/${id}`}>
              <a className={cls == 'home' ? 'Active' :""}>
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
              <a href="#" className={cls == 'scheme' ? 'Active' :""}>
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
            <NavLink to={`/userview/${id}`}>
              <a href="#">
                <i class='bx bx-user' ></i>
                <span class="links_name">Users</span>
              </a>
            </NavLink>
          </li>

          <li>
            <NavLink to={`/allapplication/${id}`}>
              <a href="#">
                <i class='bx bx-grid' ></i>
                <span class="links_name">Application</span>
              </a>
            </NavLink>
          </li>


          <li>
            <NavLink to={`/multiadmin/${id}`}>
              <a href="#">
                <i class='bx bx-star' ></i>
                <span class="links_name">Multi Admin</span>
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
      </div> 
  )
}

export default Sidebar