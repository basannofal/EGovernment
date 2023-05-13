import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Component/Sidebar";

const Complaint = () => {
  const navigate = useNavigate();

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

  let i = 0;
  const { id } = useParams("");
  const [ddodata, setddodata] = useState([]);
  const [userdata, setuserdata] = useState([]);

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
      console.log(data);
      setddodata(data);
      let arr = [];
      let com = []
      arr = data.user;
      arr.map((e) => {
        
        if(e.usercomplaint != undefined)
        com = [...com, e.usercomplaint]
      })
      console.log(com);
      // setuserdata(data.user); // aavu to aave nahi to aani jagya e shu lakhvu
      com.map((e) => {
        setuserdata(...userdata, e)
      })
      console.log(userdata);
    }
  };

  const deleteData = async (stfid) => {
    if (window.confirm("Are you sure you want to delete this Complaint")) {
      const res7 = await fetch(`/deletefeedback/${stfid}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data4 = await res7.json();
      console.log(data4);
      if (!data4) {
        window.alert("error in delete data");
      } else {
        navigate(`/complaint/${id}`, { replace: true });
        console.log("data deleted");
        Getdata();
      }
    }
  };
  useEffect(() => {
    Getdata();
  }, []);

  return (
    <>
   <Sidebar id={id} cls={'user'} />
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn" onClick={Toggle}></i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search..." />
            <i class="bx bx-search"></i>
          </div>
          <div class="profile-details">
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
            <span class="admin_name">{ddodata.userid}</span>
            <i class="bx bx-chevron-down"></i>
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
                <div class="title">Complaints</div>
              </div>
              <hr />

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Complaint Type</th>
                    <th scope="col">Complaint Subject</th>
                    <th scope="col">Complaint Description</th>
                    <th scope="col">Complaint Date</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {userdata.map((ele, id) => {
                    return (
                      <>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{userdata.name}</td>
                          <td>{userdata.complainttype}</td>
                          <td>{userdata.complaintsubject}</td>
                          <td>{userdata.complaintdescription}</td>
                          <td>{userdata.complaintdate}</td>

                          <td>
                            <button
                              className="btn"
                              onClick={() => {
                                deleteData(userdata._id);
                              }}
                            >
                              <i
                                class="bx bx-trash text-danger px-2"
                                style={{ fontSize: 30 }}
                              ></ i>
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Complaint;