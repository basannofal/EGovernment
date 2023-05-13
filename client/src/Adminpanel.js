import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'
import axios from 'axios'

function Adminpanel() {

  const { id } = useParams("");
  const [slider1, setslider1] = useState('');
  const [userdata, setuserdata] = useState([]);
  const [feedback, setfeedback] = useState([]);

  

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
      setfeedback(data.feedback)
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

  const deleteData =async (stfid) => {
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
      </div>     */}
      <Sidebar id={id} cls={'home'}/>

      
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
            <span class="admin_name">{userdata.userid}</span>
            <i class='bx bx-chevron-down' ></i>
          </div>
        </nav>


        <div style={{paddingTop:60}}>
        <div class="home-content" style={{paddingTop:50}} >
          <div class="sales-boxe">
            <NavLink to={`/staffinfo/${id}`} style={{ color: "black" }}>
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
                    STAFF
                  </h3>
                </div>
              </div>
            </NavLink>

            <NavLink to={`/panchayat/${id}`} style={{ color: "black" }}>
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
                    PANCHAYAT
                  </h3>
                </div>
              </div>
            </NavLink>

            <NavLink to={`/department/${id}`} style={{ color: "black" }}>
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
                    DEPARTMENT
                  </h3>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        <div class="home-content" style={{paddingTop:50}} >
          <div class="sales-boxe">
            <NavLink to={`/schemes/${id}`} style={{ color: "black" }}>
              <div
                class="recent-sales box"
                style={{
                  
                  width: "18.5rem",
                  
                  height: "7.4rem"
                }}
              >
                <div class="d-flex" style={{ paddingTop: "1rem" }}>
                  <i
                    class="bx bx-coin-stack text-secondary"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h3 style={{ paddingLeft: "1rem", paddingTop: "0.2rem" }}>
                    SCHEMES
                  </h3>
                </div>
              </div>
            </NavLink>

            <NavLink to={`/notice/${id}`} style={{ color: "black" }}>
              <div
                class="recent-sales box"
                style={{
                  
                  width: "18.5rem",
                  marginLeft: "3rem",
                  height: "7.4rem"
                }}
              >
                <div class="d-flex" style={{ paddingTop: "1rem" }}>
                  <i
                    class="bx bx-book-alt text-info"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h3 style={{ paddingLeft: "1rem", paddingTop: "0.2rem" }}>
                    NOTICE
                  </h3>
                </div>
              </div>
            </NavLink>

            <NavLink to={`/feedback/${id}`} style={{ color: "black" }}>
              <div
                class="recent-sales box"
                style={{
                  
                  width: "18.5rem",
                  marginLeft: "3rem",
                  height: "7.4rem"
                }}
              >
                <div class="d-flex" style={{ paddingTop: "1rem" }}>
                  
                  <i
                    class="bx bx-book-open text-warning"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h3 style={{ paddingLeft: "1rem", paddingTop: "0.2rem" }}>
                    FEEDBACK
                  </h3>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

        <div class="home-content" style={{paddingTop:50}} >
          <div class="sales-boxe">
            <NavLink to={`/userview/${id}`} style={{ color: "black" }}>
              <div
                class="recent-sales box"
                style={{
                  
                  width: "18.5rem",
                  
                  marginBottom: "5rem",
                  height: "7.4rem"
                }}
              >
                <div class="d-flex" style={{ paddingTop: "1rem" }}>
                  <i
                    class="bx bx-user text-primary"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h3 style={{ paddingLeft: "1rem", paddingTop: "0.2rem" }}>
                    USERS
                  </h3>
                </div>
              </div>
            </NavLink>

            <NavLink to={`/allapplication/${id}`} style={{ color: "black" }}>
              <div
                class="recent-sales box"
                style={{
                  
                  width: "18.5rem",
                  marginLeft: "3rem",
                  marginBottom: "5rem",
                  height: "7.4rem"
                }}
              >
                <div class="d-flex" style={{ paddingTop: "1rem" }}>
                  <i
                    class="bx bx-grid text-danger"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <h3 style={{ paddingLeft: "0.4rem", paddingTop: "0.2rem" }}>
                    APPLICATION
                  </h3>
                </div>
              </div>
            </NavLink>

            <NavLink to={`/complaint/${id}`} style={{ color: "black" }}>
              <div
                class="recent-sales box"
                style={{
                  
                  width: "18.5rem",
                  marginLeft: "3rem",
                  height: "7.4rem"
                }}
              >
                <div class="d-flex" style={{ paddingTop: "1rem" }}>
                  
                  <i
                    class="bi bi-envelope-exclamation text-secondary"
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                  <h3 style={{ paddingLeft: "1rem", paddingTop: "0.5rem" }}>
                    COMPLAINT
                  </h3>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      </section>

      {/* <NavLink to={`/image/${id}`}>
      <button className='btn btn-primary'>Image Upload</button>
      </NavLink> */}
    </>
  )
}

export default Adminpanel





// <div class="card-group mx-5 my-5">
//             <div class="card mx-2" style={{ borderRadius: 10 }} >

//               <img class="card-img-top" src="https://source.unsplash.com/214x180/?news" alt="Card image cap" />
//               <div class="card-body">
//                 <h5>slider 1</h5>
//                 <form method='POST' encType='multipart/form-data'>
//                   <input type="file" name='slider1' onChange={handleslider1} style={{ padding: "20px 0px" }} />
//                   <button className='btn btn-primary' onClick={updateslider1}> Update </button>
//                 </form>
//               </div>
//             </div>
//             <div class="card mx-2" style={{ borderRadius: 10 }} >

//               <img class="card-img-top" src="https://source.unsplash.com/214x180/?news" alt="Card image cap" />
//               <div class="card-body">
//                 <h5>slider 2</h5>
//                 <input type="file" style={{ padding: "20px 0px" }} />
//                 <button className='btn btn-primary'> Update </button>

//               </div>
//             </div>
//             <div class="card mx-2" style={{ borderRadius: 10 }} >

//               <img class="card-img-top" src="https://source.unsplash.com/214x180/?news" alt="Card image cap" />
//               <div class="card-body">
//                 <h5>slider 3</h5>
//                 <input type="file" style={{ padding: "20px 0px" }} />
//                 <button className='btn btn-primary'> Update </button>
//               </div>
//             </div>
//           </div>



//           <div class="sales-boxes">
//             <div class="recent-sales box">
//               <div class="title">Recent Sales</div>
//               <div class="sales-details">
//                 <ul class="details">
//                   <li class="topic">Date</li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                   <li><a href="#">02 Jan 2021</a></li>
//                 </ul>
//                 <ul class="details">
//                   <li class="topic">Customer</li>
//                   <li><a href="#">Alex Doe</a></li>
//                   <li><a href="#">David Mart</a></li>
//                   <li><a href="#">Roe Parter</a></li>
//                   <li><a href="#">Diana Penty</a></li>
//                   <li><a href="#">Martin Paw</a></li>
//                   <li><a href="#">Doe Alex</a></li>
//                   <li><a href="#">Aiana Lexa</a></li>
//                   <li><a href="#">Rexel Mags</a></li>
//                   <li><a href="#">Tiana Loths</a></li>
//                 </ul>
//                 <ul class="details">
//                   <li class="topic">Sales</li>
//                   <li><a href="#">Delivered</a></li>
//                   <li><a href="#">Pending</a></li>
//                   <li><a href="#">Returned</a></li>
//                   <li><a href="#">Delivered</a></li>
//                   <li><a href="#">Pending</a></li>
//                   <li><a href="#">Returned</a></li>
//                   <li><a href="#">Delivered</a></li>
//                   <li><a href="#">Pending</a></li>
//                   <li><a href="#">Delivered</a></li>
//                 </ul>
//                 <ul class="details">
//                   <li class="topic">Total</li>
//                   <li><a href="#">$204.98</a></li>
//                   <li><a href="#">$24.55</a></li>
//                   <li><a href="#">$25.88</a></li>
//                   <li><a href="#">$170.66</a></li>
//                   <li><a href="#">$56.56</a></li>
//                   <li><a href="#">$44.95</a></li>
//                   <li><a href="#">$67.33</a></li>
//                   <li><a href="#">$23.53</a></li>
//                   <li><a href="#">$46.52</a></li>
//                 </ul>
//               </div>
//               <div class="button">
//                 <a href="#">See All</a>
//               </div>
//             </div>
//             <div class="top-sales box">
//               <div class="title">Top Seling Product</div>
//               <ul class="top-sales-details">
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/sunglasses.jpg" alt="">--> */}
//                     <span class="product">Vuitton Sunglasses</span>
//                   </a>
//                   <span class="price">$1107</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/jeans.jpg" alt="">--> */}
//                     <span class="product">Hourglass Jeans </span>
//                   </a>
//                   <span class="price">$1567</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!-- <img src="images/nike.jpg" alt="">--> */}
//                     <span class="product">Nike Sport Shoe</span>
//                   </a>
//                   <span class="price">$1234</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/scarves.jpg" alt="">--> */}
//                     <span class="product">Hermes Silk Scarves.</span>
//                   </a>
//                   <span class="price">$2312</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/blueBag.jpg" alt="">--> */}
//                     <span class="product">Succi Ladies Bag</span>
//                   </a>
//                   <span class="price">$1456</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/bag.jpg" alt="">--> */}
//                     <span class="product">Gucci Womens's Bags</span>
//                   </a>
//                   <span class="price">$2345</span>

//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/addidas.jpg" alt="">--> */}
//                     <span class="product">Addidas Running Shoe</span>
//                   </a>
//                   <span class="price">$2345</span>
//                 </li>
//                 <li>
//                   <a href="#">
//                     {/* <!--<img src="images/shirt.jpg" alt="">--> */}
//                     <span class="product">Bilack Wear's Shirt</span>
//                   </a>
//                   <span class="price">$1245</span>
//                 </li>
//               </ul>
//             </div>
//           </div>