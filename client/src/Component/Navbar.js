import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';


function Navbar() {


    const [id, setid] = useState('');
    const [userdata, setuserdata] = useState([]);
    const [dept, setdept] = useState([]);
    const [scheme, setscheme] = useState([]);
    const [ddodata, setddodata] = useState([]);

    const Getdata = async () => {
        const res = await fetch(`/getdata`, {
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
            setdept(data[0].dept);
            setscheme(data[0].scheme);


            setid(data[0]._id)
            console.log(data[0].dept);


        }
    }

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }
    const Toggle = (e) => {

        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')

    }





    useEffect(() => {

        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all)
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                    selectEl.addEventListener(type, listener)
                }
            }
        }

        on('click', '.navbar .dropdown > a', function (e) {
            if (select('#navbar').classList.contains('navbar-mobile')) {
                e.preventDefault()
                this.nextElementSibling.classList.toggle('dropdown-active')
            }
        }, true)

        Getdata();
    }, [])

    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center ml-4 p-0">

                    <NavLink to={`/userwellcome/${id}`} >
                        <img src={require("../img/dd.jpg")} width="200px" style={{ borderRadius: 5 }} />
                    </NavLink>
                    <a href="#" class="logo me-auto">
                        <img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

                    <nav id="navbar" class="navbar">
                        <ul>

                            <li class="dropdown" ><a href="#"><span>About of Taluka</span> <i
                                class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <NavLink to={`/history`} style={{ margin: 0, padding: 0 }}>

                                        <li><a href="#">History</a></li>
                                    </NavLink>

                                    <NavLink to={`/demography/${id}`} style={{ margin: 0, padding: 0 }}>
                                        <li><a href="#">Demographic Information</a></li>
                                    </NavLink>
                                    <NavLink to={`/abouttdo/${id}`} style={{ margin: 0, padding: 0 }}>
                                        <li><a href="#">About of TDO</a></li>
                                    </NavLink>

                                    <NavLink to={`/staffinformation/${id}`} style={{ margin: 0, padding: 0 }}>
                                        <li><a href="#">Staff Information</a></li>
                                    </NavLink>

                                    <NavLink to={`/rulesragulation`} style={{ margin: 0, padding: 0 }}>
                                        <li><a href="#">Rules / Ragulation page</a></li>
                                    </NavLink>

                                    <NavLink to={`/sarpanchdetail/${id}`} style={{ margin: 0, padding: 0 }}>
                                        <li><a href="#">Sarpanch Detail</a></li>
                                    </NavLink>
                                    <NavLink to={`/villagedetail/${id}`} style={{ margin: 0, padding: 0 }}>
                                        <li><a href="#">Gram Panchayat Detail</a></li>
                                    </NavLink>

                                    
                                </ul>
                            </li>

                            {/* <li class="dropdown"><a href="#"><span>Panchayat</span> <i
                                class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <NavLink to={`/villagedetail/${id}`} style={{ margin: 0, padding: 0 }}>

                                        <li><a href="#">Village Details</a></li>
                                    </NavLink>
                                    <NavLink to={`/sarpanchdetail/${id}`} style={{ margin: 0, padding: 0 }}>

                                        <li><a href="#">Sarpanch List</a></li>
                                    </NavLink>
                                </ul>
                            </li> */}

                            <li class="dropdown"><a href="#"><span>Gov Departments</span> <i
                                class="bi bi-chevron-down"></i></a>
                                <ul>
                                    {
                                        dept.map((ele, idd) => {
                                            return (<>
                                                <NavLink to={`/depatmentinfo/${id}/${ele._id}`} style={{ margin: 0, padding: 0 }}>

                                                    <li><a href="#">{ele.deptname}</a></li>
                                                </NavLink>
                                            </>

                                            )
                                        }
                                        )
                                    }
                                </ul>
                            </li>

                            <li class="dropdown"><a href="#"><span>Schemes</span> <i
                                class="bi bi-chevron-down"></i></a>
                                <ul>

                                    {
                                        scheme.map((ele, idd) => {
                                            return (<>
                                                <NavLink to={`/schemedetail/${id}/${ele._id}`} style={{ margin: 0, padding: 0 }}>

                                                    <li><a href="#">{ele.schemename}</a></li>
                                                </NavLink>
                                            </>

                                            )
                                        }
                                        )
                                    }

                                </ul>
                            </li>



                                    <NavLink to={`/taludapanchayat/${id}`} style={{ margin: 0, padding: 0 }}>
                            <li class="dropdown"><a href="#"><span>Services</span></a>
                            </li>
                                    </NavLink>
                                



                            <NavLink to={`/noticedetail/${id}`} style={{ margin: 0, padding: 0 }}>
                                <li><a class="nav-link scrollto" href="#">Archive Notice</a></li>
                            </NavLink>




                            <NavLink to={`/feedbackandcontact/${id}`} style={{ margin: 0, padding: 0 }}>

                                <li><a class="nav-link scrollto" href="#">Feedback</a></li>
                            </NavLink>

                            {/* 
                            <NavLink to={`/gallary/${id}`} style={{ margin: 0, padding: 0 }}>

                                <li><a class="nav-link scrollto" href="#">Events</a></li>
                            </NavLink> */}


                            <NavLink to={`/userragister/${id}`} style={{ margin: 0, padding: 0 }}>

                                <li><a class="nav-link scrollto" href="#"> <button className='btn btn-primary'>Register</button></a></li>


                            </NavLink>


                            <NavLink to={`/userlogin/${id}`} style={{ margin: 0, padding: 0 }}>

                                <li><a class="nav-link scrollto" href="#"> <button className='btn btn-primary'>Login</button></a></li>


                            </NavLink>

                        </ul>
                        <i class="bi bi-list mobile-nav-toggle" style={{ marginLeft: 90 }} onClick={Toggle}></i>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar