import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import axios from "axios";

const Usercomplaint = () => {
    const { id, obid } = useParams("");

    const [slider1, setslider1] = useState([]);
    const [userdata, setuserdata] = useState([]);
    const [feedback, setfeedback] = useState([]);
  
    const naviget = useNavigate();
  
    let alldata = [];
    let formdata = [];  


    
  const Toggle = () => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".sidebarBtn");
    sidebarBtn.onclick = function () {
      sidebar.classList.toggle("active");
      if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    };
  };

  const [name, setname] = useState("");
  const [complainttype, setcomplainttype] = useState("");
  const [complaintsubject, setcomplaintsubject] = useState("");
  const [complaintdescription, setcomplaintdescription] = useState("");
  const [complaintdate, setcomplaintdate] = useState("");

  const savedata = async (e) => {
    e.preventDefault();

    const res = await fetch(`/usercomplaint/${id}/${obid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        complainttype,
        complaintsubject,
        complaintdescription,
        complaintdate,
      }),
    });

    console.log(res);
    const data = await res.json();
    console.log(data);
    if (res.status === 400) {
      window.alert("error is already exist !!!!");
    } else {
      window.alert("Complaint Successfully Added !...");
    }
  };

  const Getdata = async () => {
    const res = await fetch(`/getdata/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (!data) {
      window.alert("error in get data");
    } else {
      setuserdata(data.user);
      alldata = data.user;
      alldata.map((e) => {
        if (e._id === obid) {
          alldata = e;
          setuserdata(e);
        }
      });
      //   userdata.map((e) => {
      //     if(e._id === obid)
      //     {
      //         alldata = e
      //         console.log(e);
      //     }
      //   })
    }
  };

  const Logout = () => {
    localStorage.removeItem("token");
    alert("helo");
  };

  useEffect(() => {
    Getdata();

    const token = localStorage.getItem("token");
    if (token === null) {
      naviget(`/userlogin/${id}`, { replace: true });
    }
  }, []);


    return (
        <>
        <div class="sidebar">
          <div class="logo-details">
            <i class="bx bx-user"></i>
            <span class="logo_name">{userdata.upass}</span>
          </div>
          <ul class="nav-links">
            <li>
              <NavLink to={`/userwelcome/${id}/${obid}`}>
                <a href="/admin">
                  <i class="bx bx-grid-alt"></i>
                  <span class="links_name">Service</span>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/userprofile/${id}/${obid}`}>
                <a>
                  <i class="bx bx-box"></i>
                  <span class="links_name">My Profile</span>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/userapplication/${id}/${obid}`}>
                <a href="#" class="active">
                  <i class="bx bx-list-ul"></i>
                  <span class="links_name">My Application</span>
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to={`/usercomplaint/${id}/${obid}`}>
                <a>
                  <i class="bx bx-box"></i>
                  <span class="links_name">My Complaint</span>
                </a>
              </NavLink>
            </li>
  
            <li class="log_out">
              <a
                href="#"
                onClick={() => {
                  localStorage.removeItem("token");
                  naviget(`/userlogin/${id}`, { replace: true });
                }}
              >
                <i class="bx bx-log-out"></i>
                <span class="links_name">Log out</span>
              </a>
            </li>
          </ul>
        </div>
  
        <section class="home-section">
          <nav>
            <div class="sidebar-button">
              <i class="bx bx-menu sidebarBtn" onClick={Toggle}></i>
              <span class="dashboard"></span>
            </div>
  
            <div class="profile-details">
              {/* <!--<img src="images/profile.jpg" alt="">--> */}
              <span class="admin_name">{userdata.ufname}</span>
              {/* <i class='bx bx-chevron-down' ></i> */}
            </div>
          </nav>
  
          <div class="home-content">
            <div class="sales-boxe pb-5">
              <div class="recent-sales box">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div class="title">Add Your Complaints</div>
                </div>
                <hr />
  
                <form action="">
                  <p className="label">Your Name</p>
                  <input
                    type="text"
                    className="inputtag form-control"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  />
  
                  <p className="label">Complaint Type</p>
                  <input
                    type="text"
                    className="inputtag form-control"
                    placeholder="Complaint Type"
                    value={complainttype}
                    onChange={(e) => {
                      setcomplainttype(e.target.value);
                    }}
                  />
  
                  <p className="label">Complaint Subject</p>
                  <input
                    type="text"
                    className="inputtag form-control"
                    placeholder="Complaint Subject"
                    value={complaintsubject}
                    onChange={(e) => {
                      setcomplaintsubject(e.target.value);
                    }}
                  />
  
                  <p className="label">Complaint Description</p>
                  <textarea
                    className="inputtag form-control"
                    name="info"
                    placeholder="Complaint Description"
                    value={complaintdescription}
                    onChange={(e) => {
                      setcomplaintdescription(e.target.value);
                    }}
                  ></textarea>
  
                  <p className="label">Complaint Issue Date</p>
                  <input
                    type="date"
                    className="inputtag form-control"
                    value={complaintdate}
                    onChange={(e) => {
                      setcomplaintdate(e.target.value);
                    }}
                  />
  
                  <div>
                    <input
                      type="submit"
                      className="btn btn-primary mt-5"
                      value="Add Complaint"
                      onClick={savedata}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}

export default Usercomplaint