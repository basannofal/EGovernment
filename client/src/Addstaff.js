import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useNavigation, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar';

function Addstaff() {

  const { id, obid } = useParams("")

  const naviget = useNavigate();
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


  const [staffname, setstaffname] = useState('');
  const [staffposition, setstaffposition] = useState('');
  const [staffaddress, setstaffaddress] = useState('');
  const [staffnumber, setstaffnumber] = useState('');
  const [isupdate, setIsupdate] = useState(false);

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
      let temp = []
      let maindata = []

      temp = data.staffinfo
      temp.filter((e) => {
        if(e._id == obid){
          maindata = e;
        }
      })
      setIsupdate(true)
      setstaffname(maindata.staffname);
      setstaffposition(maindata.staffposition)
      setstaffaddress(maindata.staffaddress)
      setstaffnumber(maindata.staffnumber)

    }
  }


  const savedata = async (e) => {
    e.preventDefault();
    console.log(staffname);



    const res = await fetch(`/addstaff/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        staffname, staffposition, staffaddress, staffnumber
      })
    })

    console.log(res);
    const data = await res.json();
    console.log(data);
    if (res.status === 400) {
      window.alert('error is already exist !!!!')
    }
    else {
      window.alert('Member Added')
      naviget(`/staffinfo/${id}`, { replace: true })
    }
  }

  const updatestaff = async (e) => {
    e.preventDefault();
    console.log(staffname);



    const res = await fetch(`/editstaff/${id}/${obid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        staffname, staffposition, staffaddress, staffnumber
      })
    })

    console.log(res);
    const data = await res.json();
    console.log(data);
    if (res.status === 400) {
      window.alert('error is already exist !!!!')
    }
    else {
      window.alert('Member Updated')
      naviget(`/staffinfo/${id}`, { replace: true })
    }
  }


  useEffect(() => {
    if (obid) {
      Getdata()
    }
  }, []);


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
            <NavLink to={`/award/${id}`}>
              <a href="#" >
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
      </div> */}

      <Sidebar id={id} cls={'staff'} />
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
            <span class="admin_name">Vadgam</span>
            <i class='bx bx-chevron-down' ></i>
          </div>
        </nav>


        <div class="home-content">


          <div class="sales-boxe pb-5">
            <div class="recent-sales box">
              <div style={{ display: "flex", justifyContent: "space-between" }}>

              { isupdate ?  <div class="title">Update Staff Member</div> :<div class="title">Add New Staff Member</div>}


              </div>
              <hr />

              <form action="" >
                <p className='label'>Name</p>
                <input type="text" className='inputtag form-control' placeholder="Enter Staff Member Name" value={staffname} onChange={(e) => { setstaffname(e.target.value) }} />
                <p className='label'>Position</p>
                <input type="text" className='inputtag form-control' value={staffposition} onChange={(e) => { setstaffposition(e.target.value) }} placeholder="Enter Staff Position" />
                <p className='label'>Contact Number</p>
                <input type="tel" className='inputtag form-control' value={staffnumber} onChange={(e) => { setstaffnumber(e.target.value) }} placeholder="Enter Member Contact Number" pattern="[0-9]{10}" maxLength={10} />

                <p className='label'>Address</p>
                <textarea className='inputtag form-control' value={staffaddress} onChange={(e) => { setstaffaddress(e.target.value) }} placeholder="Enter Member Address">

                </textarea>






                <div>
                { isupdate ? <input type="submit" className='btn btn-primary mt-5' value="Update Staff Member" onClick={updatestaff} /> : <input type="submit" className='btn btn-primary mt-5' value="Add New Staff Member" onClick={savedata} />}
                </div>
              </form>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Addstaff