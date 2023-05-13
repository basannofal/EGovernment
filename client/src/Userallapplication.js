import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'
import axios from 'axios'


function Userallapplication() {

    const { id, obid } = useParams("");
    const [slider1, setslider1] = useState('');
    const [userdata, setuserdata] = useState([]);
    const [feedback, setfeedback] = useState([]);
    const [temp, setTemp] = useState([]);

    const navigate = useNavigate()


    let allapp = []
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

        let neworderarr = [];

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

            setfeedback(data.user)

            let allurorder = [];
            allurorder = data.user;
            allurorder.map((e) => {
                const arraobj = e.noncrimi
                for (let i = 0; i < arraobj.length; i++) {
                    neworderarr = [...neworderarr, arraobj[i]]
                }
            })
            console.log(neworderarr);
            setuserdata(neworderarr)
            setTemp(neworderarr)


        }
    }


    const filterBySearch = (event) => {
   
  
      
        const keyword = event.target.value;
    
        const results = temp.filter((user) => {
          return( user._id.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
          user.appname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
          // Use the toLowerCase() method to make it case-insensitive
        });
        if (results !== '') {
          setuserdata(results);
        } 
        else{
          setuserdata(temp)
        }
      };
  


    useEffect(() => {
        Getdata();
    }, [])

    return (
        <>
{/* 
            <div class="sidebar">
                <div class="logo-details">
                    <i class='bx bxl-c-plus-plus'></i>
                    <span class="logo_name">Vadgam</span>
                </div>
                <ul class="nav-links">
                    <li>
                        <NavLink to={`/admin/${id}`}>
                            <a href="/admin" >
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

            <Sidebar id={id} cls={'application'}/>

            <section class="home-section">
                <nav>
                    <div class="sidebar-button">
                        <i class='bx bx-menu sidebarBtn' onClick={Toggle}></i>
                        <span class="dashboard">Dashboard</span>
                    </div>
                    <div class="search-box">
                        <input type="text" placeholder="Search Application..." onChange={filterBySearch} />
                        <i class='bx bx-search' ></i>
                    </div>
                    <div class="profile-details">
                        {/* <!--<img src="images/profile.jpg" alt="">--> */}
                        <span class="admin_name">{userdata.userid}</span>
                        <i class='bx bx-chevron-down' ></i>
                    </div>
                </nav>


          


                <div class="home-content">


                    <div class="sales-boxe">
                        <div class="recent-sales box">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>

                                <div class="title">All Application </div>
                              
                            </div>
                            <hr />


                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Application Number</th>
                                        <th scope="col">Application Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        userdata.map((ele, i) => {
                                            let fmid = ele._id
                                            return (<>
                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{ele._id}</td>
                                                    <td>{ele.appname}</td>
                                                    <td>{ele.cdate}</td>
                                                    <td>{ele.status}</td>
                                                    <td>

                                                    <NavLink to={`/adminformdetail/${id}/${fmid}`}>

                                                        <button className='btn btn-primary'>View</button>


                                                    </NavLink>
                                                        
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

export default Userallapplication