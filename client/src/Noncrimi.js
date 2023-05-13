import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Noncrimi() {

  const { id, obid } = useParams("");
  const naviget = useNavigate()


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

    const [noncrimi, setnoncrimi] = useState({
        fullname : '',
        dob : '',
        emai : '',
        mobile : '',
        gender : 'Male',
        adhar : '',
        address : '',
        fathername : '',
        mothername : '',
        occuption : '',
        annualinc : '',
        certinumber : '',
        issuddate :'',
        issueby : 'issue By Talati',
        incomecerti : '',
        religion : 'Muslim',
        subcast : 'Khant',
        castcerissudata  :'',
        castecerid : '' ,
        castcerti : '',
        castceriissu : '',
        rationcard : '',
        upload7by12 : '',
        stemppaper : '',
        sign : '',
        status : ''
    });
    let name, value;
    const handlechange = (e) => {
        name = e.target.name;
        value = e.target.value;

        setnoncrimi({ ...noncrimi, [name]: value })
    }

    const submit = () => {
       try {


        if(noncrimi.fullname == '' && noncrimi.dob == '' && noncrimi.emai && noncrimi.mobile && noncrimi.gender == '' && noncrimi.adhar == '' && noncrimi.address == '' && noncrimi.fathername == '' && noncrimi.mothername == '' && noncrimi.occuption == '' && noncrimi.annualinc == '' && noncrimi.certinumber == '' && noncrimi.issuddate == '' && noncrimi.issueby == '' && noncrimi.incomecerti == '' && noncrimi.religion == '' && noncrimi.subcast == '' ){
            window.alert("Fill All Field")
        }
        else{

        const formData = new FormData();

        formData.append('fullname', noncrimi.fullname)
        formData.append('dob', noncrimi.dob)
        formData.append('emai', noncrimi.emai)
        formData.append('mobile', noncrimi.mobile)
        formData.append('gender', noncrimi.gender)
        formData.append('adhar', noncrimi.adhar)
        formData.append('address', noncrimi.address)
        formData.append('fathername', noncrimi.fathername)
        formData.append('mothername', noncrimi.mothername)
        formData.append('occuption', noncrimi.occuption)
        formData.append('annualinc', noncrimi.annualinc)
        formData.append('certinumber', noncrimi.certinumber)
        formData.append('issuddate', noncrimi.issuddate)
        formData.append('issueby', noncrimi.issueby)
        formData.append('incomecerti', noncrimi.incomecerti)
        formData.append('religion', noncrimi.religion)
        formData.append('subcast', noncrimi.subcast)



        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
            if(pair[1] == ''){
                window.alert("Please Enter Detail of " + pair[0])
                return
            }
        }

        const url = `/noncrimiform/${id}/${obid}`

        let res = axios.patch(url, formData);


        if (res.status === 400) {
            window.alert('error is already exist !!!!')
        }
        else {
            window.alert('Application Sent Successfully')
            // naviget(`/userlogin/${id}`, { replace: true })
            naviget(`/userwelcome/${id}/${obid}`, {replace: true})

        }
        }
       } catch (e) {
            console.log(e);
       }

      
    }



    useEffect(() => {
        
    const token = localStorage.getItem("token")
    if(token === null){
      naviget(`/userlogin/${id}`, { replace: true })
    }
   },[])

    const handlephoto = (e) => {
        setnoncrimi({ ...noncrimi, incomecerti: e.target.files[0] });
        console.log(noncrimi.incomecerti);

    }
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
                        <input style={{fontSize:'13px'}} required type="text " class="form-control" placeholder="Enter Fullname" name='fullname' onChange={handlechange} value={noncrimi.fullname}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Date of Birth <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="date" class="form-control" name='dob' onChange={handlechange} value={noncrimi.dob}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Email <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="email" class="form-control" placeholder="Enter Email" name='emai' onChange={handlechange} value={noncrimi.emai}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Mobile Number <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="text" maxlength="10" class="form-control" placeholder="Enter Mobile Number" name='mobile' onChange={handlechange} value={noncrimi.mobile}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Gender <span style={{color:'red'}}>*</span></label>
                        <select class="form-select col-lg-12" style={select} name='gender' onChange={handlechange} value={noncrimi.gender}>
                            <option class="" selected disabled>Select Gender</option>
                            <option class="">Male</option>
                            <option class="">Female</option>
                            <option class="">Other</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Aadhar Number <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="text" maxlength="12" class="form-control" placeholder="Enter Aadhar Number" name='adhar' onChange={handlechange} value={noncrimi.adhar}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Address <span style={{color:'red'}}>*</span></label>
                        <textarea class="form-control" rows="3" placeholder="Enter Address"  name='address' onChange={handlechange} value={noncrimi.address} > </textarea>
                    </div>


                    <h6 className="fw-bold col-lg-12 mt-4 mb-2">Parent Details</h6>

                    <div class="col-md-4">
                        <label class="form-label">Father name <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Father name" name='fathername' onChange={handlechange} value={noncrimi.fathername}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Mother Name (Optional) </label>
                        <input  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Mother Name" name='mothername' onChange={handlechange} value={noncrimi.mothername}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Occuption <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Occuption" name='occuption' onChange={handlechange} value={noncrimi.occuption}/>
                    </div>


                    <h6 className="fw-bold col-lg-12 mt-4 mb-2">Annual Details</h6>

                    <div class="col-md-4">
                        <label class="form-label">Annual Income <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Annual Income" name='annualinc' onChange={handlechange} value={noncrimi.annualinc}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Certificate number <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Certificate number" name='certinumber' onChange={handlechange} value={noncrimi.certinumber}/>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Issue Date <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="date" class="form-control" name='issuddate' onChange={handlechange} value={noncrimi.issuddate} />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Issue By <span style={{color:'red'}}>*</span></label>
                        <select class="form-select col-lg-12" style={select} name='issueby' onChange={handlechange} value={noncrimi.issueby} >
                            <option class="" selected disabled>Select Issue By</option>
                            <option class="">Issue By Talati</option>
                            <option class="">Issue By TDO / Taluka Office</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Upload Income Certificate <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="file" class="form-control" name='incomecerti'  onChange={handlephoto} />
                    </div>


                    <h6 className="fw-bold col-lg-12 mt-4 mb-2">Cast Details <span style={{color:'red'}}>*</span></h6>

                    <div class="col-md-4">
                        <label class="form-label">Religion</label>
                        <select class="form-select col-lg-12" style={select} name='religion' onChange={handlechange} value={noncrimi.religion}>
                            <option class="" selected disabled>Select Religion</option>
                            <option class="">Hindu</option>
                            <option class="">Muslim</option>
                            <option class="">Christians</option>
                            <option class="">Shikhs</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Sub Caste <span style={{color:'red'}}>*</span></label>
                        <select class="form-select col-lg-12" style={select} name='subcast' onChange={handlechange} value={noncrimi.subcast}>
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
                        <input  style={{fontSize:'15px'}} required type="date" class="form-control" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Caste Certificate ID <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Caste Certificate ID" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Upload Caste Certificate <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="file" class="form-control" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Upload Ration card <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="file" class="form-control" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Upload 7/12 Document <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="file" class="form-control" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Stemp Pepar <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="file" class="form-control" />
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Signature <span style={{color:'red'}}>*</span></label>
                        <input  style={{fontSize:'15px'}} required type="file" class="form-control" />
                    </div> */}
                    <div class="col-12 mt-4">
                        <div class="form-check">
                            <input  style={{fontSize:'15px'}} required class="form-check-input" type="checkbox" value="" id="invalidCheck" />
                            <label class="form-check-label text-primary">
                                I agree to the Terms and conditions
                            </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>

            
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end" , marginLeft:"900px" }} className="mt-4">

                        <button type="reset" class="btn btn-danger mx-4 px-5" >Cancel</button>
                        <button type="submit" class="btn btn-primary px-5" onClick={submit}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Noncrimi