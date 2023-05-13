import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function Userlogin() {

  const { id } = useParams("");

    const naviget = useNavigate()
    const [data, setdata] = useState([]);
    const [lguser, setlguser] = useState({
        uphone: '',
        upass: '',
    })


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
            setdata(data.user)
            // console.log(data);
        }
    }


    let name, value;
    const lgin = (e) => {
        name = e.target.name;
        value = e.target.value;

        setlguser({ ...lguser, [name]: value })
    }
    
    const login = async(e) => {
        e.preventDefault();
        let temp = false;
        let obid = ''
        const {uphone, upass } = lguser
        
        data.map((e)=> {
            if(e.uemail === uphone)
            {
                if(e.upass === upass)
                {
                    temp= true;
                    obid = e._id
                }
                else
                {
                    temp = false
                }
            }
            else
            {
                console.log(e.uemail);
                console.log("no");
            }
        })
        
        if(temp === true)
        {
            localStorage.setItem("token", "hackathon_in_technomark")
            localStorage.setItem("obid", obid)
            naviget(`/userwelcome/${id}/${obid}`, {replace: true})
        }
        else
        {
            alert("Wrong Detail")
        }

        // const {uphone, upass } = lguser
        // const res = await fetch(`/userlogin/${id}`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         uphone, upass
        //     })
        // })

        // const data = await res.json();
        // console.log(data);
        // if (res.status === 400) {
            
        //     window.alert('please fill correct information')
        // }
        // else {
        //     window.alert('login Successfull!')
        //     naviget(`/`, {replace: true})
        // }


    }



    useEffect(() => {
        Getdata();
    }, [])
    
  return (
    <>
        {/* <div>login</div>

        <label htmlFor="">Enter Number</label>
        <input type="text" name="uphone" id="" onChange={lgin} value={lguser.uphone} />
        <br />

        
        <label htmlFor="">Enter Password</label>
        <input type="text" name="upass" id="" onChange={lgin} value={lguser.upass} />
<br />
        <input type="submit" value="Login" onClick={login} /> */}

        <div style={{backgroundColor:"#f3f5fa", height:"100vh"}} className="py-5"  >

        <div className='row w-25 mx-auto border shadow p-3  bg-body rounded' style={{marginTop: '7rem', backgroundColor:"#fff"}}>
                <h2 className=' pt-3 fw-bold'>
                    Login

                    <hr style={{ width: '3rem', color: '#0D6EFD' }} />
                </h2>
                <form class="row g-3 fw-bold">
                    <div class="col-md-12">
                        <label class="form-label">Email</label>
                        <input type="text" class="form-control" name="uphone" id="" onChange={lgin} value={lguser.uphone} />
                    </div>
                    <div class="col-md-12">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control"  name="upass" id="" onChange={lgin} value={lguser.upass} />
                    </div>
                    <div>
                        <button onClick={login} type="submit" class="btn mx-3 my-3 btn-primary col-md-12 mb-3">Sign in</button>
                    </div>
                </form>
                <div className='row mx-auto'>
                        <span>Not Have an account ?</span>
                        <NavLink to={`/userragister/${id}`} className="ml-1">
                            <span >Register</span>
                        </NavLink>

                    </div>
            </div>
        </div>
    </>
  )
}

export default Userlogin