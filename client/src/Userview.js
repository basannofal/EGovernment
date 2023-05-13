import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'
import axios from 'axios'

function Userview() {

  const { id } = useParams("");
  const [slider1, setslider1] = useState('');
  const [userdata, setuserdata] = useState([]);
  const [feedback, setfeedback] = useState([]);
  const [temp, setTemp] = useState([]);

  const navigate = useNavigate()



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
      setuserdata(data)
      setfeedback(data.user)
      setTemp(data.user)
      console.log(userdata);
    }
  }


  const updateslider1 = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('slider1', slider1);
    console.log(slider1);

    const url = `/imageedit/${id}`

    try {
      console.log("############");
      console.log(formData);
      window.alert(formData);

      let res = axios.patch(`/imageedit/${id}`, formData);

      if (!res) {
        window.alert('error in get data2')
      }
      else {

        window.alert("image updated")
      }

    } catch (err) {
      console.log('error');
    }

  }

  const handleslider1 = (e) => {
    setslider1({ ...slider1, slider1: e.target.files[0] })
    console.log(slider1);
  }

  const deleteData = async (stfid) => {
    const res7 = await fetch(`/deletefeedback/${stfid}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })

    const data4 = await res7.json();
    console.log(data4);
    if (!data4) {
      window.alert('error in delete data')
    }
    else {
      navigate(`/admin/${id}`, { replace: true })
      console.log('data deleted');
      Getdata()

    }
  }

  
  const filterBySearch = (event) => {
   
  
      
    const keyword = event.target.value;

    const results = temp.filter((user) => {
      return (user.ufname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 || 
      user.ulname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 || user.uemail.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 );
      // Use the toLowerCase() method to make it case-insensitive
    });
    if (results !== '') {
      setfeedback(results);
    } 
    else{
      setfeedback(temp)
    }
  };


  useEffect(() => {
    Getdata();
  }, [])

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
              <a href="/admin" class="active">
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
      <Sidebar id={id} cls={'user'}/>
      
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class='bx bx-menu sidebarBtn' onClick={Toggle}></i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search User..." onChange={filterBySearch} />
            <i class='bx bx-search' ></i>
          </div>
          <div class="profile-details">
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
            <span class="admin_name">{userdata.userid}</span>
            <i class='bx bx-chevron-down' ></i>
          </div>
        </nav>


    
    
        <div style={{paddingTop:60, }}>
        <div class="home-content" style={{paddingTop:50}} >
          <div class="sales-boxe">
            <NavLink to={`/allusers/${id}`} style={{ color: "black" }}>
              <div
                class="recent-sales box"
                style={{
                  marginTop: "2rem",
                  width: "18.5rem",
                  
                }}
              >
                <div class="d-flex" style={{ paddingTop: "0.5rem", paddingLeft: "2rem" }}>
                  <i
                    class="bi bi-people-fill text-success"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h3 style={{ paddingLeft: "1rem", paddingTop: "0.8rem" }}>
                    ALL user
                  </h3>
                </div>
              </div>
            </NavLink>

            <NavLink to={`/feedback/${id}`} style={{ color: "black" }}>
              <div
                class="recent-sales box"
                style={{
                  marginTop: "2rem",
                  width: "18.5rem",
                  marginLeft: "3rem",
                }}
              >
                <div class="d-flex" style={{ paddingTop: "0.5rem" }}>
                  <i
                    class="bi bi-justify-left text-danger"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h3 style={{ paddingLeft: "1rem", paddingTop: "0.8rem" }}>
                    Feedback
                  </h3>
                </div>
              </div>
            </NavLink>

            <NavLink to={`/complaint/${id}`} style={{ color: "black" }}>
              <div
                class="recent-sales box"
                style={{
                  marginTop: "2rem",
                  width: "18.5rem",
                  marginLeft: "3rem",
                }}
              >
                <div class="d-flex" style={{ paddingTop: "0.5rem" }}>
                  <i
                    class="bi bi-building text-primary"
                    style={{ fontSize: "2rem",  }}
                  ></i>
                  <h3 style={{ paddingLeft: "0.5rem", paddingTop: "0.8rem", }}>
                    Complaints
                  </h3>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

      </div>

        <div class="home-content">


          <div class="sales-boxe">
            <div class="recent-sales box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>

                <div class="title">Users </div>
                
              </div>
              <hr />


              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">User Name</th>
                    <th scope="col">User Email</th>
                    <th scope="col">User Number</th>
                    <th scope="col text-center">Action</th>


                  </tr>
                </thead>
                <tbody>

                  {
                    feedback.map((ele, id) => {
                      return (<>
                        <tr>
                          <td>{id + 1}</td>
                          <td>{ele.ufname}</td>
                          <td>{ele.uemail}</td>
                          <td>{ele.unumber}</td>
                          <td>
                          

                              <a href="#" class="card-link col-lg-5 w-20"> <button className='btn btn-primary'>View</button> </a>
                          </td>



                        </tr>
                      </>)
                    })

                  }
                </tbody>
              </table>



            </div>

          </div>
        </div>
      </section>


    </>
  )
}

export default Userview