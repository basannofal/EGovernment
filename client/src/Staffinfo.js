import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'

function Staffinfo() {

  const { id } = useParams("")
  const [ddodata, setddodata] = useState([]);
  const [userdata, setuserdata] = useState([]);

  const navigate = useNavigate();

  const [temp, setTemp] = useState([]);


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
      setuserdata(data.staffinfo)
      setTemp(data.staffinfo)
      console.log(userdata);
    }
  }


  const deleteData = async (stfid) => {
    const res7 = await fetch(`/staffmember/${stfid}/${id}`, {
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
      navigate(`/staffinfo/${id}`, { replace: true })
      console.log('data deleted');
      Getdata()

    }
  }



  const Editdata = async (obid) => {
    navigate(`/addstaff/${id}/${obid}`, { replace: true })
  }



  const filterBySearch = (event) => {



    const keyword = event.target.value;

    const results = temp.filter((user) => {
      return user.staffname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      // Use the toLowerCase() method to make it case-insensitive
    });
    if (results !== '') {
      setuserdata(results);
    }
    else {
      setuserdata(temp)
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
              <a >
                <i class='bx bx-grid-alt' ></i>
                <span class="links_name">Dashboard</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/staffinfo/${id}`}>
              <a className='active'>
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

      <Sidebar id={id} cls={'staff'} />
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class='bx bx-menu sidebarBtn' onClick={Toggle}></i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Enter Staff Member Name.." onChange={filterBySearch} />
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
                <div class="title">TDO Information</div>
                <NavLink to={`/editprofile/${id}`}>
                  <button
                    className="btn btn-primary mx-4 mb-3 "
                    style={{ width: "auto" }}
                  >
                    {" "}
                    <i class="bx bx-edit mr-2"></i>
                    TDO Inforamation
                  </button>
                </NavLink>
              </div>

              <div></div>
              <div class="sales-boxe">
                <div class="overview-boxes">
                  <div class="box">
                    <div class="right-side">
                      <div class="box-topic" style={{ fontSize: 18 }}>
                        TDO Name
                      </div>
                      <div class="number" style={{ fontSize: 24 }}>
                        {ddodata.tdonamme}
                      </div>
                      <div class="indicator">
                        {/* <i class='bx bx-up-arrow-alt'></i> */}
                        {/* <span class="text">Up from yesterday</span> */}
                      </div>
                    </div>
                    {/* <i class='bx bx-cart-alt cart'></i> */}
                  </div>
                  <div class="box">
                    <div class="right-side">
                      <div class="box-topic" style={{ fontSize: 18 }}>
                        {" "}
                        TDO Number
                      </div>
                      <div class="number" style={{ fontSize: 24 }}>
                        {ddodata.tdonumber}
                      </div>
                      <div class="indicator">
                        {/* <i class='bx bx-up-arrow-alt'></i> */}
                        {/* <span class="text">Up from yesterday</span> */}
                      </div>
                    </div>
                    {/* <i class='bx bxs-cart-add cart two' ></i> */}
                  </div>
                  <div class="box">
                    <div class="right-side">
                      <div class="box-topic" style={{ fontSize: 18 }}>
                        TDO Address
                      </div>
                      <div class="number" style={{ fontSize: 24 }}>
                        {ddodata.tdoaddress}
                      </div>
                      {/* <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div> */}
                    </div>
                    {/* <i class='bx bx-cart cart three' ></i> */}
                  </div>
                  <div class="box">
                    <div class="right-side">
                      <div class="box-topic" style={{ fontSize: 18 }}>
                        UserName
                      </div>
                      <div class="number" style={{ fontSize: 24 }}>
                        {ddodata.userid}
                      </div>
                      {/* <div class="indicator">
              <i class='bx bx-down-arrow-alt down'></i>
              <span class="text">Down From Today</span>
            </div> */}
                    </div>
                    {/* <i class='bx bxs-cart-download cart four' ></i> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="home-content pt-5" >


          <div class="sales-boxe">
            <div class="recent-sales box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>

                <div class="title">Staff Information</div>
                <div><NavLink to={`/addstaff/${id}`} > <a><button className='btn btn-primary'>Add Member <i class='bx bx-plus'></i></button> </a></NavLink> </div>
              </div>
              <hr />


              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Member Name</th>
                    <th scope="col">Member Position</th>
                    <th scope="col">Member Address</th>
                    <th scope="col">Member Contact</th>
                    <th scope="col">Handle</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    userdata.map((ele, id) => {
                      return (<>
                        <tr>
                          <td>{id + 1}</td>
                          <td>{ele.staffname}</td>
                          <td>{ele.staffposition}</td>
                          <td>{ele.staffaddress}</td>
                          <td>{ele.staffnumber}</td>
                          <td>

                            <div style={{ display: "flex" }}>

                              <button className='btn' onClick={() => { Editdata(ele._id) }}>

                                <i class='bi bi-pencil-square text-primary px-2' style={{ fontSize: 25, }}></i>
                              </button>

                              <button className='btn' onClick={() => { deleteData(ele._id) }}>

                                <i class='bx bx-trash text-danger px-2' style={{ fontSize: 30, }}></i>
                              </button>
                            </div>
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

export default Staffinfo