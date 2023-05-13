import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'
import axios from 'axios'


function Userapplication() {
  const { id, obid } = useParams("");


  const [slider1, setslider1] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const [feedback, setfeedback] = useState([]);

  const naviget = useNavigate()

  let alldata = []
  let formdata = []

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
          if (e._id === obid) {

            neworderarr = [...neworderarr, arraobj[i]]
          }
        }
      })
      console.log(neworderarr);
      setuserdata(neworderarr)

      // setuserdata(data.user)
      // alldata = data.user
      // alldata.map((e) => {
      //   if (e._id === obid) {
      //     alldata = e
      //     setuserdata(e)
      //     noncrimidata(e)
      //   }
      // })

      // setslider1(userdata.noncrimi)
      // setfeedback(userdata.noncrimi)
      // formdata = userdata.noncrimi


      //   userdata.map((e) => {
      //     if(e._id === obid)
      //     {
      //         alldata = e
      //         console.log(e);
      //     }
      //   })
    }




  }

  const noncrimidata = (e) => {
    formdata = e.noncrimi
    // setfeedback(ayy)
    console.log(formdata);
  }

  const Logout = () => {
    localStorage.removeItem("token")
    alert("helo")
  }


const pay = (aid) => {
  
  naviget(`/physicaldoc/${id}/${obid}/${aid}`, { replace: true })

}




  useEffect(() => {
    Getdata();
    Getdata()


    const token = localStorage.getItem("token")
    if (token === null) {
      naviget(`/userlogin/${id}`, { replace: true })
    }
  }, [])

  return (
    <>

      <div class="sidebar">
        <div class="logo-details">
          <i class='bx bx-user'></i>
          <span class="logo_name">{userdata.upass}</span>
        </div>
        <ul class="nav-links">
          <li>
            <NavLink to={`/userwelcome/${id}/${obid}`}>
              <a href="/admin" >
                <i class='bx bx-grid-alt' ></i>
                <span class="links_name">Service</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/userprofile/${id}/${obid}`}>
              <a>
                <i class='bx bx-box' ></i>
                <span class="links_name">My Profile</span>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/userapplication/${id}/${obid}`}>
              <a href="#" class="active">
                <i class='bx bx-list-ul' ></i>
                <span class="links_name">My Application</span>
              </a>
            </NavLink>
          </li>





          <li class="log_out">

            <a href="#" onClick={() => { localStorage.removeItem("token"); naviget(`/userlogin/${id}`, { replace: true }) }} >
              <i class='bx bx-log-out'></i>
              <span class="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>

      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class='bx bx-menu sidebarBtn' onClick={Toggle}></i>
            <span class="dashboard"></span>
          </div>

          <div class="profile-details">
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
            <span class="admin_name">{userdata.ufname}</span>
            {/* <i class='bx bx-chevron-down' ></i> */}
          </div>
        </nav>


        {/* <div style={{ paddingTop: "90px", backgroundColor:"#fff" }}>
          <div>
            <h4 className='m-3 '>My All Application</h4>

<div className='mx-3 my-5'>

            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Application Id</th>
                  <th scope="col">Form Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>


              <tbody>
              {
                userdata.map((e) => {
                  return(
                    <>
                      <h2>{e.cdate}</h2>
                    </>
                  )
                })
                

              }

        
              </tbody>
            </table>
</div>
          </div>



        </div> */}


        <div class="home-content">


          <div class="sales-boxe">
            <div class="recent-sales box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>

                <div class="title">My Application </div>

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
                          <td className='row'>
                          <div style={{display:"flex"}}>



                              {ele.status === "Accepted" ? (
                              <NavLink
                                to={`/Certificates/Non_Certi/${id}/${obid}/${ele._id}`}
                                
                              >
                                <button className="btn btn-success">
                                  Download
                                </button>
                              </NavLink>
                            ) : (
                              <button
                                className="btn btn-success"
                                style={{ opacity: 0.3, width: "110px" }}
                                disabled
                              >
                                Download
                              </button>
                            )}
                            <NavLink to={`/formview/${id}/${fmid}`}>

                              <button className='btn btn-primary ml-2'>View</button>

                            </NavLink>
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

export default Userapplication


















// {


//   ele.status === "Accepted" ?
//     <div style={{display:"flex"}}>
  
//     {/* <button id="rzp-button1" className='btn btn-primary' onClick={()=> {pay(ele._id)}}>Pay</button> */}
//       <button className='btn btn-success ml-2'>Download</button>
//     </div>
//     : 
//     <div style={{display:"flex"}}>
//     {/* <button id="rzp-button1" className='btn btn-primary'  disabled>Pay</button> */}
//       <button className='btn btn-success ml-2' disabled>Download</button>
//     </div>
// }