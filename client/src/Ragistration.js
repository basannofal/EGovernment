import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Ragistration() {

    const naviget = useNavigate();

    const [tdoname, settdoname] = useState('');
    const [tdonumber, settdonumber] = useState('');
    const [tdoaddress, settdoaddress] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');


const postdata =async (e) => {
    e.preventDefault();


    const res = await fetch('/ragister', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            tdoname, tdonumber,tdoaddress,username,password,
        })
    })

    console.log(res);
    const data = await res.json();
    console.log(data);
    if (res.status === 400) {
        window.alert('error is already exist !!!!')
    }
    else {
        window.alert('Ragistration Successfull')
        naviget('/adminlogin', {replace: true})
    }

}

  return (
    <>
              <section style={{backgroundColor:"rgb(170, 202, 202)",height:"100vh"}}>
                <div class="row" style={{marginRight:0}}>
                    <div class="col-lg-6 mt-3 mx-auto form" >
                        <form method="post">
                        
                            <div style={{margin:"30px 0"}}>
                                <h1 className='heading'> Taluka Panchayat Ragistration</h1>
                                <hr />
                            </div>
                            <div className='row'>

                            <div class="form-group col-lg-6">
                                <label for="formGroupExampleInput">Tdo Name</label>
                                <input type="text" class="form-control" name="tdoname" id="tdoname" placeholder="Tdo Name" value={tdoname} onChange={(e) => {settdoname(e.target.value)} }/>
                            </div>

                            <div class="form-group col-lg-6">
                                <label for="formGroupExampleInput">Tdo Number</label>
                                <input type="tel" maxLength={10} class="form-control" name="tdonumber" id="tdonumber" value={tdonumber} onChange={(e) => {settdonumber(e.target.value)} } placeholder="Tdo Number" />
                            </div>
                            </div>

                            <div class="form-group">
                                <label for="formGroupExampleInput">Tdo Address</label>
                                <input type="text" class="form-control" name="tdoaddress" id="tdoaddress" value={tdoaddress} onChange={(e) => {settdoaddress(e.target.value)} } placeholder="Tdo Address" />
                            </div>

                            <div class="form-group">
                                <label for="formGroupExampleInput">username</label>
                                <input type="text" class="form-control" name="userid" id="userid" value={username} onChange={(e) => {setusername(e.target.value)} } placeholder="username" />
                            </div>

                            <div class="form-group">
                                <label for="formGroupExampleInput2">password </label>
                                <input type="password" class="form-control" name="pass" id="pass" value={password} onChange={(e) => {setpassword(e.target.value)} } placeholder="password" />
                            </div>
                            <br />
                            <div>
                                <input type="submit" class="btn btn-primary" value="Log in" onClick={postdata} />
                            </div>
                            <br />

                            <div className='my-4'>
                                <a href="/adminlogin" class="link"> <h5 className='linktext'>Listed Talukas ?</h5></a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Ragistration