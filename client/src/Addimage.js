import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
function Addimage() {

    
    const [user, setuser] = useState({
        pimage: '',
        pname : '',
        disc :''
    })

    let name, value;
    const handlechange = (e) => {
        name = e.target.name;
        value  = e.target.value;

        setuser({...user, [name] : value})
        console.log(user);
    }
    

    const id = '633d91528c26dd77bc3d4208'


    const handlephoto = (e) => {
        setuser({ ...user, pimage: e.target.files[0] });

    }


    const updateuser = async (e) => {
        e.preventDefault();



        
        try {
                const formData = new FormData();

                formData.append('pname', user.pname)
                formData.append('pimage', user.pimage)
                formData.append('pdisc', user.disc)

            
                // for watch formdata Values 

                // for (var pair of formData.entries()) {
                //     console.log(pair[0]+ ', ' + pair[1]); 
                // }
                

                const url = `/imageedit/${id}`
                
            let res = axios.patch(url, formData);
           
            if (!res) {
                window.alert('error in get data2')
            }
            else {
                // const data2 = res.data;
                
                window.alert("image updated")
            }

        } catch (err) {
            console.log('error');
        }

    }


    return (<div>
        <form  method='POST' onSubmit={updateuser} encType='multipart/form-data'>
            <div className='col-lg-4'>

                <label><b>Enter Your PRoduct NAme</b></label> <br />
                <input type="text" name='pname' value={user.pname} onChange={handlechange} />
                


                <label><b>Enter Your PRoduct Decs</b></label> <br />
                <input type="text" name='disc' value={user.disc} onChange={handlechange} />
                

                <label><b>Upload Hotel Image</b></label> <br />
                <input onChange={handlephoto} type="file" className='radio' name='pimage' />
            </div>




            <hr />

            <div class="clearfix">

                <button type="submit" class="btn btn-success signbtn">Update</button>
            </div>
        </form>
    </div>
    )
}

export default Addimage