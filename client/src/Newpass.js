import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
function Newpass() {

    const { id } = useParams("");
    const naviget = useNavigate()
    const [lguser, setlguser] = useState({
        username: '',
        psw: '',
    })


    let name, value;
    const lgin = (e) => {
        name = e.target.name;
        value = e.target.value;

        setlguser({ ...lguser, [name]: value })
    }
    
    const login = async(e) => {
        e.preventDefault();


        const {username, psw } = lguser
        const res = await fetch(`/newpassword/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, psw
            })
        })

        const data = await res.json();
        console.log(data);
        if (res.status === 400) {
            
            window.alert('please fill correct information')
        }
        else {
            window.alert('login Successfull!')
            naviget(`/admin/${data._id}`, {replace: true})
        }
    }
  return (
    <>
    <section style={{backgroundColor:"rgb(170, 202, 202)",height:"100vh"}}>
        <div class="row" style={{marginRight:0}}>
            <div class="col-lg-3 mx-auto form" >
                <form method="post" onSubmit={login}>
                    <div style={{margin:"20px 0"}}>
                        <h1 className='heading'>Admin - Taluka Panchayat</h1>
                        <hr />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">New Password</label>
                        <input type="text" class="form-control" name="username" id="username" placeholder="New Password" onChange={lgin} value={lguser.username}/>
                    </div>

                    <div class="form-group">
                        <label for="formGroupExampleInput2">Confirm New Password </label>
                        <input type="password" class="form-control" name="psw" id="pass" placeholder="New Password" onChange={lgin} value={lguser.psw}/>
                    </div>
                    <br />
                    <div>
                        <input type="submit" class="btn btn-primary" value="Log in" />
                    </div>
                    <br />

                    <div>
                   
                    </div>
                </form>
            </div>
        </div>
    </section>
</>
  )
}

export default Newpass