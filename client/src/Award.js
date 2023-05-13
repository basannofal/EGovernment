import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';


function Award() {

    const { id } = useParams("")
    const [userdata, setuserdata] = useState([]);
    const [ddodata, setddodata] = useState([]);

    const navigate = useNavigate();



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
            setddodata(data)
            setuserdata(data.award)
            console.log(userdata);
        }
    }


    const deleteData =async (stfid) => {
        const res7 = await fetch(`/deleteaward/${stfid}/${id}`, {
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
            navigate(`/award/${id}`, { replace: true })
            console.log('data deleted');
            Getdata()
      
          }
    }

    useEffect(() => {
        Getdata();
    }, [])



  return (
    <>

<div class="sidebar">
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
              <a href="#">
                <i class='bx bx-book-alt' ></i>
                <span class="links_name">Notice</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/award/${id}`}>
              <a href="#" class="active">
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
      </div> 
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
                <span class="admin_name">{ddodata.userid}</span>
                <i class='bx bx-chevron-down' ></i>
            </div>
        </nav>


        <div class="home-content">


            <div class="sales-boxe">
                <div class="recent-sales box">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>

                        <div class="title">Awards </div>
                        <div><NavLink to={`/addaward/${id}`} > <a><button className='btn btn-primary'>Add Awards <i class='bx bx-plus'></i></button> </a></NavLink> </div>
                    </div>
                    <hr />


                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Award Name</th>
                                    <th scope="col">Compitition Name</th>
                                    <th scope="col">Winner Name</th>
                                    <th scope="col">Archived Rank</th>
                                    <th scope="col">Compitition Year</th>
                                    <th scope="col">Handle</th>

                                </tr>
                            </thead>
                            <tbody>
                               
                        {
                            userdata.map((ele, id) => {
                                return (<>
                                    <tr>
                                        <td>{id + 1}</td>
                                        <td>{ele.awardname}</td>
                                        <td>{ele.compititionname}</td>
                                        <td>{ele.winnername}</td>
                                        <td>{ele.rank}</td>
                                        <td>{ele.compititionyear}</td>

                                        <td>
                                         <button className='btn' onClick={ () => {deleteData(ele._id)}}>

                                            <i class='bx bx-trash text-danger px-2' style={{fontSize:30,}}></i>
                                         </button>
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

export default Award