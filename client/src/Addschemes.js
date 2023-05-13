import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useNavigation, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
function Addschemes() {

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



  const [isupdate, setisupdate] = useState(false);
  const [schemename, setschemename] = useState('');
  const [schemedetail, setschemedetail] = useState('');
  const [eligibility, seteligibility] = useState('');
  const [expdate, setexpdate] = useState('');
  const [schemephoto, setschemephoto] = useState('');

  const [scheme, setscheme] = useState({
    name: '',
    detail: '',
    eli: '',
    exp: '',
    photo: ''
  })


  let name, value;
  const handlechange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setscheme({ ...scheme, [name]: value })
    console.log(scheme);
  }




  const handlephoto = (e) => {
    setscheme({ ...scheme, photo: e.target.files[0] });

  }




  const saveScheme = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append('name', scheme.name)
      formData.append('detail', scheme.detail)
      formData.append('eli', scheme.eli)
      formData.append('exp', scheme.exp)
      formData.append('photo', scheme.photo)



      // for watch formdata Values 

      // for (var pair of formData.entries()) {
      //     console.log(pair[0]+ ', ' + pair[1]); 
      // }


      const url = `/savescheme/${id}`

      let res = axios.patch(url, formData);

      if (!res) {
        window.alert('error in get data2')
      }
      else {
        // const data2 = res.data;

        naviget(`/schemes/${id}`, { replace: true })
      }

    } catch (err) {
      console.log('error');
    }

  }


  const updatescheme = async (e) => {
    e.preventDefault();
    
    try {

      const formData = new FormData();

      formData.append('name', scheme.name)
      formData.append('detail', scheme.detail)
      formData.append('eli', scheme.eli)
      formData.append('exp', scheme.exp)
      formData.append('photo', scheme.photo)

    

      const url = `/editscheme/${id}/${obid}`

      let res = axios.patch(url, formData);

      if (!res) {
        window.alert('error in get data2')
      }
      else {
        window.alert("Scheme Updated")
        naviget(`/schemes/${id}`, { replace: true })
      }


    } catch (e) {
      window.alert("Something Went Wrong")
    }
  }


  const savedata = async (e) => {
    e.preventDefault();



    const res = await fetch(`/addschemes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        schemename, schemedetail, eligibility, expdate, schemephoto
      })
    })

    console.log(res);
    const data = await res.json();
    console.log(data);
    if (res.status === 400) {
      window.alert('error is already exist !!!!')
    }
    else {
      window.alert('Schemes Added')
      naviget(`/schemes/${id}`, { replace: true })
    }
  }

  const Getdata = async () => {
    const res = await fetch(`/getscheme/${id}/${obid}`, {
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
        setisupdate(true);
        setscheme({name:data[0].scheme[0].schemename, detail:data[0].scheme[0].schemedetail, eli:data[0].scheme[0].eligibility, exp:data[0].scheme[0].expdate, photo:data[0].scheme[0].schemephoto})
        console.log(data[0].scheme[0]);
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

      <Sidebar id={id} cls={'scheme'} />
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

               { isupdate ?  <div class="title">Update Schemes</div> :<div class="title">Add New Schemes</div>}

              </div>
              <hr />

              {/* <form action="" >
             
                            <p className='label'>Scheme Name</p>
                            <input type="text" className='inputtag form-control' placeholder="Scheme Name" value={schemename} onChange={(e) => { setschemename(e.target.value)}}/>
                            <p className='label'>schemedetail Detail</p>
                            <input type="text" className='inputtag form-control'  value={schemedetail} onChange={(e) => { setschemedetail(e.target.value)}} placeholder="schemedetail Detail"/>
                  
                            <p className='label'>Eligibility</p>
                            <input type="tel" className='inputtag form-control'  value={eligibility} onChange={(e) => { seteligibility(e.target.value)}} placeholder="Eligibility"  />

                            <p className='label'>Scheme Expire Date</p>
                            <input type="text" className='inputtag form-control'  value={expdate} onChange={(e) => { setexpdate(e.target.value)}} placeholder="Scheme Expire Date"   />

                            <p className='label'>Scheme Photo</p>
                            <input type="file" className='inputtag form-control' name="scimg" onChange={handlephoto} placeholder="Scheme Photo"   />
                          
                            <div>
                            <input type="submit" className='btn btn-primary mt-5' value="Add Department" onClick={savedata}/>
                            </div>
                            </form> */}

              <form action="" >

                <p className='label'>Scheme Name</p>
                <input type="text" name='name' className='inputtag form-control' placeholder="Scheme Name" value={scheme.name} onChange={handlechange} />
                <p className='label'>schemedetail Detail</p>
                <input type="text" name='detail' className='inputtag form-control' value={scheme.detail} onChange={handlechange} placeholder="schemedetail Detail" />

                <p className='label'>Eligibility</p>
                <input type="text" className='inputtag form-control' name='eli' value={scheme.eli} onChange={handlechange} placeholder="Eligibility" />

                <p className='label'>Scheme Expire Date</p>
                <input type="text" className='inputtag form-control' name='exp' value={scheme.exp} onChange={handlechange} placeholder="Scheme Expire Date" />

                <p className='label'>Scheme Photo</p>
                <input type="file" className='inputtag form-control' name="photo" onChange={handlephoto} placeholder="Scheme Photo" />

                <div>
                 { isupdate ? <input type="submit" className='btn btn-primary mt-5' value="Update Scheme" onClick={updatescheme} /> : <input type="submit" className='btn btn-primary mt-5' value="Add Scheme" onClick={saveScheme} />}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Addschemes