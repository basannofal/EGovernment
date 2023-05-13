import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Forgetpass() {

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
        const res = await fetch('/forgetpass', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, 
            })
        })

        const data = await res.json();
        console.log(data);
        if (res.status === 400) {
            
            window.alert('please fill correct information')
        }
        else {
            window.alert('login Successfull!')
            naviget(`/newpassword/${data._id}`, {replace: true})
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
                                <label for="formGroupExampleInput">Enter Your Real username</label>
                                <input type="text" class="form-control" name="username" id="username" placeholder="username" onChange={lgin} value={lguser.username}/>
                            </div>

                        
                            <br />
                            <div>
                                <input type="submit" class="btn btn-primary" value="Next" />
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

export default Forgetpass