import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Component/Sidebar";

const Feedback = () => {
  const { id } = useParams("");
  const [userdata, setuserdata] = useState([]);
  const [feedback, setfeedback] = useState([]);

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
      setuserdata(data);
      setfeedback(data.feedback);
      console.log(userdata);
    }
  };

  const deleteData = async (stfid) => {
    if (window.confirm("Are you sure you want to delete this Feedback")) {
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
        navigate(`/feedback/${id}`, { replace: true });
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
            <span class="admin_name">{userdata.userid}</span>
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
                <div class="title">Feedback</div>
              </div>
              <hr />

              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">User Name</th>
                    <th scope="col">User Email</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Message</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {feedback.map((ele, id) => {
                    return (
                      <>
                        <tr>
                          <td>{id + 1}</td>
                          <td>{ele.fbname}</td>
                          <td>{ele.fbemail}</td>
                          <td>{ele.fbsubject}</td>
                          <td>{ele.fbmsg}</td>

                          <td>
                            <button
                              className="btn"
                              onClick={() => {
                                deleteData(ele._id);
                              }}
                            >
                              <i
                                class="bx bx-trash text-danger px-2"
                                style={{ fontSize: 30 }}
                              ></i>
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

export default Feedback;