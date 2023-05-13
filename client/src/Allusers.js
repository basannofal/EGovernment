import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'
import axios from 'axios'

const Allusers = () => {

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

export default Allusers