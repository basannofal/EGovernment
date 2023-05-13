import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'

function Schemes() {

  const { id } = useParams("")
  const [userdata, setuserdata] = useState([]);
  const [ddodata, setddodata] = useState([]);
  const [temp, settemp] = useState([]);



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

      setddodata(data);

      let arr = data.scheme;
      let sortarr = arr.sort((a, b) => { return b.date - a.date })
      setuserdata(sortarr)
      settemp(sortarr)

    }
  }

  const Editdata = async (obid) => {
    navigate(`/addschemes/${id}/${obid}`, { replace: true })
  }


  const deleteData = async (stfid) => {
    const res7 = await fetch(`/deleteschemes/${stfid}/${id}`, {
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
      navigate(`/schemes/${id}`, { replace: true })
      console.log('data deleted');
      Getdata()

    }
  }

  const filterBySearch = (event) => {
    // // Access input value
    // const query = event.target.value;
    // // Create copy of item list
    // var updatedList = [...userdata];
    // // Include all elements which includes the search query
    // updatedList = updatedList.filter((item) => {
    //   return item.schemename.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    // });
    // console.log(updatedList);
    // // Trigger render with updated values
    // if (updatedList.length !== 0) {
    //   setuserdata(updatedList);
    // } else {
    //   setuserdata(temp)
    // }

    
    const keyword = event.target.value;

    const results = temp.filter((user) => {
      return user.schemename.toLowerCase().startsWith(keyword.toLowerCase());
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
              <a href="#">
                <i class='bx bx-pie-chart-alt-2' ></i>
                <span class="links_name">Department</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/schemes/${id}`}>
              <a href="#" className='active'>
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
      <Sidebar id={id} cls={'scheme'}/>
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class='bx bx-menu sidebarBtn' onClick={Toggle}></i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" onChange={filterBySearch}  placeholder="Search..." />
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

                <div class="title">Schemes Information</div>
                <div><NavLink to={`/addschemes/${id}`} > <a><button className='btn btn-primary'>Add Schemes <i class='bx bx-plus'></i></button> </a></NavLink> </div>
              </div>
              <hr />


              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Scheme Name</th>
                    <th scope="col">Scheme Detail</th>
                    <th scope="col">Eligibility</th>
                    <th scope="col">Scheme Expiry Date</th>
                    <th scope="col">Scheme Photo</th>
                    <th scope="col">Handle</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    userdata.map((ele, id) => {
                      return (<>
                        <tr>
                          <td>{id + 1}</td>
                          <td>{ele.schemename}</td>
                          <td>{ele.schemedetail}</td>
                          <td>{ele.eligibility}</td>
                          <td>{ele.expdate}</td>
                          <td>{ele.schemephoto}</td>

                          <td>
                          <div style={{display:"flex"}}>

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

export default Schemes