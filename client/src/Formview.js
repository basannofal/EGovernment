import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Formview() {
    const { id, fmid } = useParams("");

    const [slider1, setslider1] = useState([]);
    const [userdata, setuserdata] = useState([]);
    const [feedback, setfeedback] = useState([]);
  
    
    const select = {
        display: "block",
        backgroundColor: "#fff",
        padding: "5px 10px",
        // paddingHorizontal : "50px",
        ontSize: "20px",
        color: "#212529",
        borderWidth: 1,
        borderColor: "#ced4da",
        borderRadius: "5px"
    }
    
    let alldata = []
    let formdata = []
    const Getdata = async () => {

        let neworderarr = [];
    
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
    
    
          setfeedback(data.user)
    
    
          let allurorder = [];
          allurorder = data.user;
          allurorder.map((e) => {
            const arraobj = e.noncrimi
            for (let i = 0; i < arraobj.length; i++) {
             
                let j = arraobj[i]
                if(j._id === fmid){
                    neworderarr = [...neworderarr, arraobj[i]]
                    console.log(neworderarr);
                }
                console.log(fmid);
                
                
            }
          })
          console.log(neworderarr[0]);
          setuserdata(neworderarr[0])
    
          // setuserdata(data.user)
          // alldata = data.user
          // alldata.map((e) => {
          //   if (e._id === fmid) {
          //     alldata = e
          //     setuserdata(e)
          //     noncrimidata(e)
          //   }
          // })
    
          // setslider1(userdata.noncrimi)
          // setfeedback(userdata.noncrimi)
          // formdata = userdata.noncrimi
    
    
          //   userdata.map((e) => {
          //     if(e._id === fmid)
          //     {
          //         alldata = e
          //         console.log(e);
          //     }
          //   })
        }
    
    
    
    
      }


      useEffect(() => {
        Getdata()
      }, [])
      return (
        <>
            <div className='row mt-5 mx-auto border shadow p-3 mb-5 bg-body rounded ' style={{overflowX:'hidden', width: '95%', fontFamily: 'Poppins', fontSize:'0.9rem' }}>
                <h3 className=' pt-3 fw-bold'>
                    Application for Non-Creamy Layer Certificate

                    <hr style={{ width: '10rem', color: '#0D6EFD' }} />
                </h3>
                <form class="row g-3">
                    <h6 className="fw-bold col-lg-12 my-3">Personal Details</h6>

                    <br />

                    <div class="col-md-4">
                        <label class="form-label">Fullname <span style={{color:'red'}}>*</span></label>
                        <input readOnly style={{fontSize:'13px'}} required type="text " class="form-control" placeholder="Enter Fullname" value={userdata.fullname}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Date of Birth <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="date" class="form-control" name='dob'  value={userdata.dob}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Email <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="email" class="form-control" placeholder="Enter Email" name='emai'  value={userdata.emai}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Mobile Number <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="text" maxlength="10" class="form-control" placeholder="Enter Mobile Number" name='mobile'  value={userdata.mobile}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Gender <span style={{color:'red'}}>*</span></label>
                        <select disabled class="form-select col-lg-12" style={select} name='gender'  value={userdata.gender}>
                            <option class="" selected disabled>Select Gender</option>
                            <option class="">Male</option>
                            <option class="">Female</option>
                            <option class="">Other</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Aadhar Number <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="text" maxlength="12" class="form-control" placeholder="Enter Aadhar Number" name='adhar'  value={userdata.adhar}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Address <span style={{color:'red'}}>*</span></label>
                        <textarea disabled class="form-control" rows="3" placeholder="Enter Address"  name='address'  value={userdata.address} > </textarea>
                    </div>


                    <h6 className="fw-bold col-lg-12 mt-4 mb-2">Parent Details</h6>

                    <div class="col-md-4">
                        <label class="form-label">Father name <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Father name" name='fathername'  value={userdata.fathername}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Mother Name (Optional) </label>
                        <input readOnly  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Mother Name" name='mothername'  value={userdata.mothername}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Occuption <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Occuption" name='occuption'  value={userdata.occuption}/>
                    </div>


                    <h6 className="fw-bold col-lg-12 mt-4 mb-2">Annual Details</h6>

                    <div class="col-md-4">
                        <label class="form-label">Annual Income <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Annual Income" name='annualinc'  value={userdata.annualinc}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Certificate number <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Certificate number" name='certinumber'  value={userdata.certinumber}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Issue Date <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="date" class="form-control" name='issuddate'  value={userdata.issuddate} />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Issue By <span style={{color:'red'}}>*</span></label>
                        <select disabled class="form-select col-lg-12" style={select} name='issueby'  value={userdata.issueby} >
                            <option class="" selected disabled>Select Issue By</option>
                            <option class="">Issue By Talati</option>
                            <option class="">Issue By TDO / Taluka Office</option>
                        </select>
                    </div>
               
                    <h6 className="fw-bold col-lg-12 mt-4 mb-2">Cast Details <span style={{color:'red'}}>*</span></h6>

                    <div class="col-md-4">
                        <label class="form-label">Religion</label>
                        <select disabled class="form-select col-lg-12" style={select} name='religion'  value={userdata.religion}>
                            <option class="" selected disabled>Select Religion</option>
                            <option class="">Hindu</option>
                            <option class="">Muslim</option>
                            <option class="">Christians</option>
                            <option class="">Shikhs</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Sub Caste <span style={{color:'red'}}>*</span></label>
                        <select disabled  class="form-select col-lg-12" style={select} name='subcast'  value={userdata.subcast}>
                            <option class="" selected disabled>Select Sub Caste</option>
                            <option class="">Khant</option>
                            <option class="">Solanki</option>
                            <option class="">Rabari</option>
                            <option class="">Lodha</option>
                            <option class="">Sunasara</option>
                            <option class="">Basan</option>
                            <option class="">Jagarala</option>
                        </select>
                    </div>
                    {/* <div class="col-md-4">
                        <label class="form-label">Issue Date <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="date" class="form-control" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Caste Certificate ID <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Caste Certificate ID" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Upload Caste Certificate <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="file" class="form-control" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Upload Ration card <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="file" class="form-control" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Upload 7/12 Document <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="file" class="form-control" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Stemp Pepar <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="file" class="form-control" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Signature <span style={{color:'red'}}>*</span></label>
                        <input readOnly  style={{fontSize:'15px'}} required type="file" class="form-control" />
                    </div> */}
                 

            
                   
                </form>
            </div>
        </>
    )
}

export default Formview