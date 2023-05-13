import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Component/Sidebar'
import axios from 'axios'

const Addmultiuser = () => {

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



    const [adminname, setadminname] = useState('');
    const [adminpass, setadminpass] = useState('');
    const [checked, setChecked] = useState([]);
    const checkList = ["staffinfo", "panchayat", "dept", "scheme", "notice", "feedback", "user"];
    const [rides, setrides] = useState([])
    const [isupdate, setIsupdate] = useState(false);



    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    // Generate string of checked items
    const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    // Return classes based on whether item is checked
    var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";




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

            temp = data.panchayat
            temp.filter((e) => {
                if (e._id == obid) {
                    maindata = e;
                }
            })
            setIsupdate(true)



        }
    }



    const savedata = async (e) => {
        e.preventDefault();

        

        const res = await fetch(`/addride/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                adminname, adminpass, checkedItems
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
            naviget(`/panchayat/${id}`, { replace: true })
        }
    }


    const updatestaff = async (e) => {
        e.preventDefault();



        const res = await fetch(`/editpanchayat/${id}/${obid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                adminname, adminpass, rides


            })
        })

        console.log(res);
        const data = await res.json();
        console.log(data);
        if (res.status === 400) {
            window.alert('error is already exist !!!!')
        }
        else {
            window.alert('panchayat Updated')
            naviget(`/panchayat/${id}`, { replace: true })
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
            </div> */}

      <Sidebar id={id} cls={'multiadmin'}/>

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

                                {isupdate ? <div class="title">Update Panchayat</div> : <div class="title">Add New Sub Admin</div>}

                            </div>
                            <hr />

                            <form action="" >

                                <p className='label'>Admin Name</p>
                                <input type="text" className='inputtag form-control' placeholder="Admin Name" value={adminname} onChange={(e) => { setadminname(e.target.value) }} />
                                <p className='label'>Admin Password</p>
                                <input type="text" className='inputtag form-control' value={adminpass} onChange={(e) => { setadminpass(e.target.value) }} placeholder="Admin Password" />

                                <p className='label'>Select Rides</p>


                                {checkList.map((item, index) => (
                                    <div key={index}>
                                        <input value={item} type="checkbox" onChange={handleCheck} className='mr-3' />
                                        <span className={isChecked(item)}>{item}</span>
                                    </div>
                                ))}

                                <div className='mt-4'>
                                    {`selected previligious  : ${checkedItems}`}
                                </div>
                                <div>
                                    {isupdate ? <input type="submit" className='btn btn-primary mt-5' value="Update Admin" onClick={updatestaff} /> : <input type="submit" className='btn btn-primary mt-5' value="Add New Admin" onClick={savedata} />}
                                </div>
                            </form>

                        </div>

                    </div>
                </div>

            </section>


        </>
    )
}

export default Addmultiuser