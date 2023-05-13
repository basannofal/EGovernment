import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';


function Userragistration() {

    const select = {
        display: "block",
        backgroundColor: "#fff",
        padding: "5px 10px",
        // paddingHorizontal : "50px",
        fontSize: "20px",
        color: "#212529",
        borderWidth: 1,
        borderColor: "#ced4da",
        borderRadius: "5px"
    }




    const { id } = useParams("");


    const [userdata, setuserdata] = useState({

        ufname: '',
        umname: '',
        ulname: '',
        unumber: '',
        uemail: '',
        upass: '',
        ucpass: '',
        uimage: '',
        uadhar: '',
        dist: '',
        taluka: '',
        uandr: '',
        upin: '',
    });

    const [taluka, settaluka] = useState('[]');
    const [village, setvillage] = useState([]);








    //  const validate = (e) => {
    //     e.preventDefault(   )
    //     if(validatedata() == 0){
    //         submit()
    //     }
    //  }



    let tlist = []
    let vlist = []
    let temp = []


    let name, value;
    const handlechange = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuserdata({ ...userdata, [name]: value })
    }




    const handlephoto = (e) => {
        setuserdata({ ...userdata, uimage: e.target.files[0] });

    }

    const naviget = useNavigate();


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
            let arr = [];
            arr = data.user
            arr.map((e) => {
                tlist = [...tlist, e.uemail]
            })
            console.log(tlist);
        }
    }




    const submit = async (e) => {
        e.preventDefault();

        var mailtest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        if (userdata.ufname === '' || userdata.ucpass === '' || userdata.uemail === '' || userdata.uimage === '' || userdata.ulname === '' || userdata.unumber === '' || userdata.upass === '') {

            window.alert("Please Fill All Field")

        } else if (userdata.ufname.length <= 2) {
            window.alert("Please Enter Valid First Name")
        }
        else if (userdata.ulname.length <= 2) {
            window.alert("Please Enter Valid Last Name")
        }
        else if (!userdata.uemail.match(mailtest)) {
            window.alert("Please Enter Valid Email")
        }
        else if (isNaN(userdata.unumber)) {
            window.alert("Please Enter Valid Number")
        }
        else if (userdata.unumber.length != 10) {
            window.alert("Please Enter Valid Number")
        }
        else if (isNaN(userdata.uadhar)) {
            window.alert("Please Enter Valid Aadhar Number")
        }
        else if (userdata.uadhar.length != 12) {
            window.alert("Please Enter Valid Aadhar Number")
        }
        else if (isNaN(userdata.upin)) {
            window.alert("Please Enter Valid Pincode Number")
        }
        else if (userdata.upin.length != 6) {
            window.alert("Please Enter Valid Pincode Number")
        }
        else if (userdata.upass != userdata.ucpass) {
            window.alert("Please Check Your Confirm password")
        }
        else {
            // let x = false
            // tlist.filter((e) => {
            //     if (e == userdata.uemail) {
            //         x = true                    
            //     }
            // })

            // if(x === true){
            //     window.alert("User Already Exist")
            // }
                const formData = new FormData();

                formData.append('ufname', userdata.ufname)
                formData.append('umname', userdata.umname)
                formData.append('ulname', userdata.ulname)
                formData.append('uadhar', userdata.uadhar)
                formData.append('upin', userdata.upin)
                formData.append('unumber', userdata.unumber)
                formData.append('uemail', userdata.uemail)
                formData.append('upass', userdata.upass)
                formData.append('ucpass', userdata.ucpass)
                formData.append('uimage', userdata.uimage)


                for (var pair of formData.entries()) {
                    console.log(pair[0] + ', ' + pair[1]);
                }

                const url = `/userragister/${id}`

                let res = axios.patch(url, formData).then((res) => {
                    window.alert('User Ragistration Successfully')
                    naviget(`/userwellcome/${id}`, { replace: true })
                }).catch((e) => {
                    if(e.response.data.error === 'Image'){
                    window.alert('Enter Valid Image !!!!')
                    }else
                    window.alert('Email is already exist !!!!')
                })


                // if (res.status === 400) {
                //     window.alert('error is already exist !!!!')
                // }
                // else {
                //     window.alert('User Ragistration Successfully')
                //     naviget(`/userlogin/${id}`, { replace: true })
                // }

                // const res = await fetch(`/userragister/${id}`, {
                //     method: "PATCH",
                //     headers: {
                //         "Content-Type": "application/json"
                //     },
                //     body: JSON.stringify({
                //         ufname, ulname, unumber, uemail, upass, ucpass
                //     })
                // })
            }
            // else{
            //     window.alert("ss")
            // }

        }




    // function checkemail() {
    //     let x = false

    //     return x;
    // }



    useEffect(() => {
        Getdata();
    }, [])

    return (
        <>

            {/* <h1>user registration</h1>
            <form action="" encType='multipart/form-data'>



                <label>first name </label>
                <input type="text" name='ufname' onChange={handlechange} value={userdata.ufname} />
                <br />

                <label>middle name </label>
                <input type="text" name='umname' onChange={handlechange} value={userdata.umname} />
                <br />

                <label>Last name </label>
                <input type="text" name='ulname' onChange={handlechange} value={userdata.ulname} />
                <br />

                <label>Number</label>
                <input type="text" name='unumber' onChange={handlechange} value={userdata.unumber} />
                <br />

                <label>Email </label>
                <input type="text" name='uemail' onChange={handlechange} value={userdata.uemail} />
                <br />

                <label>Adhar number </label>
                <input type="text" name='uadhar' onChange={handlechange} value={userdata.uadhar} />
                <br />


                <label>Pin </label>
                <input type="text" name='upin' onChange={handlechange} value={userdata.upin} />
                <br />


                <select name="dist" id="">
                    {

                        vlist.map((e) => {
                            return (

                                <option value="">{e.tname}</option>
                            )
                        })


                    }
                </select>

                <br />

                <label>password </label>
                <input type="text" name='upass' onChange={handlechange} value={userdata.upass} />
                <br />

                <label>Confirm password </label>
                <input type="text" name='ucpass' onChange={handlechange} value={userdata.ucpass} />
                <br />

                <label>Upload Photo</label>
                <input type="file" name='uimage' onChange={handlephoto} />
                <br />

                <input type="submit" value="submit" onClick={submit} />
            </form>


            <NavLink to={`/userlogin/${id}`}>
                <button className='btn btn-primary'>Login</button>
            </NavLink> */}
            <div style={{ backgroundColor: "#f3f5fa", }} className="py-5 ">

                <div className='row w-50  mx-auto border shadow p-3  bg-body rounded' style={{ backgroundColor: "#fff" }}>
                    <h2 className=' pt-3 fw-bold'>
                        Register

                        <hr style={{ width: '3rem', color: '#0D6EFD' }} />
                    </h2>
                    <form class="row g-3 fw-bold">
                        <div class="col-md-6">
                            <label class="form-label">Firstname</label>
                            <input type="text" class="form-control" name='ufname' onChange={handlechange} value={userdata.ufname} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Lastname</label>
                            <input type="text" class="form-control" name='ulname' onChange={handlechange} value={userdata.ulname} />

                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" name='uemail' onChange={handlechange} value={userdata.uemail} />

                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Phone Number</label>
                            <input type="text" maxlength="10" class="form-control" name='unumber' onChange={handlechange} value={userdata.unumber} />

                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" name='upass' onChange={handlechange} value={userdata.upass} />

                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" name='ucpass' onChange={handlechange} value={userdata.ucpass} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Aadhar Number</label>
                            <input type="text" maxlength="12" class="form-control" name='uadhar' onChange={handlechange} value={userdata.uadhar} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Pin Code</label>
                            <input type="text" maxlength="6" class="form-control" name='upin' onChange={handlechange} value={userdata.upin} />

                        </div>
                        {/* <div class="col-md-6 my-3">
                            <label class="form-label ">District</label>
                            <select class="form-select col-md-12 fw-bold" style={select}>
                                <option class="fw-bold" selected disabled>Select District</option>
                                <option class="fw-bold">Ahmedabad</option>
                                <option class="fw-bold">Banaskantha</option>
                                <option class="fw-bold">Sabarkantha</option>
                                <option class="fw-bold">Junagadh</option>
                            </select>
                        </div>

                        <div class="col-md-6 my-3">
                            <label class="form-label">Taluka</label>
                            <select style={select} class="form-select col-md-12 fw-bold">
                                <option class="fw-bold" selected disabled>Select Taluka</option>
                                <option class="fw-bold">Tharad</option>
                                <option class="fw-bold">Bhandu</option>
                                <option class="fw-bold">Vadgam</option>
                                <option class="fw-bold">Modasa</option>
                            </select>

                        </div> */}
                        <div class="col-md-12">
                            <label for="formFile" class="form-label">Photo</label>
                            <input class="form-control" type="file" id="formFile" name='uimage' onChange={handlephoto} />
                        </div>

                        <div className='row mx-auto mt-4'>

                            <div className="col-lg-6">
                                <button type="submit" onClick={submit} class="btn btn-primary col-md-12 mb-3 ml-3 mt-4">Register</button>
                            </div>
                            <div className="col-lg-6">
                                <button type="clear" class="btn btn-danger col-md-12 mb-3 ml-3 mt-4">Cancel</button>
                            </div>
                        </div>
                        <br />
                    </form>
                    <div className='row mx-auto'>
                        <span>Already Have an account ?</span>
                        <NavLink to={`/userlogin/${id}`} className="ml-1">
                            <span >Login</span>
                        </NavLink>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Userragistration