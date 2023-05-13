import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const Adminformdetail = () => {
    const { id, fmid } = useParams("");

    const [slider1, setslider1] = useState([]);
    const [userdata, setuserdata] = useState([]);
    const [feedback, setfeedback] = useState([]);
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

    let alldata = []
    let formdata = []
    const Getdata = async () => {
        let customerData = [];
        let orderData = [];
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
            let custData = []
            custData = data.user

            custData.filter((e) => {
                let allorderid = e.noncrimi
                for (let i = 0; i < allorderid.length; i++) {

                    if (allorderid[i]._id == fmid) {
                        //   setslider1(e)
                        orderData = allorderid[i]
                        formdata = allorderid[i]
                        alldata = e
                        customerData = e
                        console.log(alldata);
                        console.log(orderData);

                        console.log(allorderid[i]);
                    }

                }

            })
            setslider1(customerData)
            setuserdata(orderData)
            console.log(slider1);
            console.log(userdata);

            //   setfeedback(data.user)


            //   let allurorder = [];
            //   allurorder = data.user;
            //   allurorder.map((e) => {
            //     const arraobj = e.noncrimi
            //     for (let i = 0; i < arraobj.length; i++) {

            //         let j = arraobj[i]
            //         if(j._id === fmid){
            //             neworderarr = [...neworderarr, arraobj[i]]
            //             console.log(neworderarr);
            //         }
            //         console.log(fmid);


            //     }
            //   })
            //   console.log(neworderarr[0]);
            //   setuserdata(neworderarr[0])


            // ***************

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

    const date_ob = new Date();
    const day = date_ob.getFullYear()

    const obid = slider1._id
    useEffect(() => {
        Getdata()
    }, [])


    const Accept = async () => {
        try {
            var x = "Accepted";





            const mainid = id
            const objectid = obid
            const orid = fmid
            const res = await fetch(`/editStatus/${mainid}/${objectid}/${orid}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    x
                })
            })

            const data2 = await res.json();
            console.log(data2);
            if (!data2) {
                window.alert('error in get data2');
            }
            else {


                console.log(data2);
                naviget(`/allapplication/${id}`)

            }




        } catch (e) {
            console.log(e);
            window.alert(e)
        }

    }

    const Reject = async () => {
        try {
            var x = "Rejected";





            const mainid = id
            const objectid = obid
            const orid = fmid
            const res = await fetch(`/editStatus/${mainid}/${objectid}/${orid}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    x
                })
            })

            const data2 = await res.json();
            console.log(data2);
            if (!data2) {
                window.alert('error in get data2');
            }
            else {
                // const config = {
                //     Host : "smtp.elasticemail.com",
                //     Username : "statusword9@gmail.com",
                //     Password : "BADEC0CC1A357B390C0541C2461BDC8550B9",
                //     To : 'statusword9@gamil.com',
                //     From : userdata.emai,
                //     Subject : "This is the subject",
                //     Body : "And this is the body"
                // }

                // window.Email.send(config).then(window.alert("Suc"))
                // window.Email.send({
                //     Host : "smtp.elasticemail.com",
                //     Username : "statusword9@gmail.com",
                //     Password : "BADEC0CC1A357B390C0541C2461BDC8550B9",
                //     To : userdata.emai,
                //     From : 'statusword9@gamil.com',
                //     Subject : "This is the subject",
                //     Body : "And this is the body"
                // }).then(
                //   message => alert(message)
                // );
                console.log(data2);
                // window.alert("Updated Profile")
                naviget(`/allapplication/${id}`)
            }




        } catch (e) {
            console.log(e);
            window.alert(e)
        }

    }


    return (
        <>


            

            <div class="container border my-5" style={{ width: "800px" }}>
                <div>
                    <h5 class="text-center mt-5" style={{ fontWeight: "bold" }}>
                        પરિશિષ્ટ-૩
                    </h5>
                    <p class="pt-2 text-justify">
                        સામાજિક અને શૈક્ષણિક રીતે પછાત વર્ગના ઉમેદવારોએ ગુજરાત સરકારની
                        સેવાઓ,નોકરીઓમાં/શૈક્ષણિક સંસ્થાઓમાં પ્રવેશ માટે અનામતના લાભ લેવા
                        માટે બિન ઉન્નતવર્ગ(NON- CREAMY LAYER) પ્રમાણપત્ર મેળવવા માટેની
                        અરજીનો નમૂનો :
                    </p>
                    <hr style={{ width: "750px" }} />
                    <p>
                        (આ ફોર્મ નમૂના તરીકે ગણવાનું રહેશે, પરંતુ જરૂરી જણાય તો અરજદારની
                        તેમજ સ્થાનિક પરિસ્થિતિને અનુરૂપ માહિતી ફોર્મમાં સામેલ કરી શકાશે).
                    </p>
                </div>
                <br />

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 ml-4">
                        પ્રતિ <br /> મામલતદારશ્રી   <b> Shri B. g. Parmar</b>	 <br />
                        તાલુકો  વડગામ   <br className="mb-2" />  જિલ્લો બનાસકાંઠા

                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        {/* <div
                            class="border text-center"
                            style={{
                                paddingTop: "3rem",
                                marginLeft: "13rem",
                                height: "140px",
                                width: "130px",
                            }}
                        >
                            ફોટો
                        </div> */}
                    </div>
                </div>

                <div class="pt-4">
                    <p>
                        શ્રીમાન, <br />
                        <p class="pl-5 text-justify">
                            ગુજરાત સરકાર હેઠળની નોકરીઓમાં, શૈક્ષણિક સસ્થાઓમાં પ્રવેશ વખતે
                            સામાજિક અને શૈક્ષણિક રીતે પછાત વર્ગના ઉમેદવાર તરીકે અનામતનો લાભ
                            મેળવવાના હેતુ માટે મને નોન ક્રિમીલેયર (NON-CREAMY LAYER)
                            પ્રમાણપત્ર આપવા વિનંતી છે.
                        </p>
                    </p>
                </div>

                <div>
                    <p class="pl-5">
                        મારી હું મારા પિતાની કે કુટુંબની જરૂરી વિગતો નીચે પ્રમાણે છે.
                    </p>

                    <p class="pl-4"> (૧) અરજદારનું પુરુ નામ : <b>{userdata.fullname}</b> </p>

                    <p class="pl-4"> (૨) જન્મ તારીખ / જન્મસ્થળ : <b>{userdata.address}</b> </p>

                    <p class="pl-4"> (3) રહેઠાણનુ પુરુ સરનામુ : </p>
                    <p class="pl-5">(ક) હાલનું : <b>{userdata.address}</b></p>
                    <p class="pl-5">(ખ) કાયમી : <b>{userdata.address}</b></p>
                    <p class="pl-5">(ગ) ફોન નં/ મોબાઇલ નં : <b>{userdata.mobile}</b></p>

                    <p class="pl-4"> (૪) ધર્મ જાતિ પેટાજાતિ : <b>{userdata.religion}</b> </p>


                    <p class="pl-4"> (૬) પિતાનું પુરુ નામ : <b>{userdata.fathername}</b></p>

                    {/* <p class="pl-4"> (૭) પતિનું પુરુ નામઃ : - </p> */}

                    <p class="pl-4">
                        {" "}
                        (૮) માતા પિતા ? જીવનસાથીનો દરજ્જો. (Status of Parent (s) / Spouse){" "}
                    </p>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 pl-5 pt-3">તારીખ : {day}</div>
                    <div class="col-lg-6 col-md-6 col-sm-6 pt-3">
                        (અરજદારના માતા પિતા અથવા કુદરતી વાલીની સહી)
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 pl-5 pt-3">સ્થળ : વડગામ</div>
                    <div class="col-lg-6 col-md-6 col-sm-6 pt-3">(અરજદારની સહી)</div>
                </div>
                    <div style={{ paddingLeft: "30rem" }}>
                    <img
                        src={require("./image/d_s.png")}
                        alt="digital signature of TDO sir" width="200px"
                    />
                </div>
            </div>  


            {
                userdata.status == 'inProgress' ?
                    <div className="row container m-2 mb-5">

                        <div className="col-lg-2">

                            <button onClick={Reject} className='btn btn-danger'>Reject</button>
                        </div>
                        <div className="col-lg-2">

                            <button onClick={Accept} className='btn btn-primary'>Accept</button>
                        </div>
                    </div>
                    : ""
            }

        </>
    )
}


// <div className='row mt-5 mx-auto border shadow p-3 mb-5 bg-body rounded ' style={{ overflowX: 'hidden', width: '95%', fontFamily: 'Poppins', fontSize: '0.9rem' }}>
//                 <h3 className=' pt-3 fw-bold'>
//                     Application for Non-Creamy Layer Certificate

//                     <hr style={{ width: '10rem', color: '#0D6EFD' }} />
//                 </h3>
//                 <form class="row g-3">
//                     <h6 className="fw-bold col-lg-12 my-3">Personal Details</h6>

//                     <br />

//                     <div class="col-md-4">
//                         <label class="form-label">Fullname <span style={{ color: 'red' }}>*</span></label>
//                         <input readOnly style={{ fontSize: '13px' }} required type="text " class="form-control" placeholder="Enter Fullname" value={userdata.fullname} />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Date of Birth <span style={{ color: 'red' }}>*</span></label>
//                         <input readOnly style={{ fontSize: '15px' }} required type="date" class="form-control" name='dob' value={userdata.dob} />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Email <span style={{ color: 'red' }}>*</span></label>
//                         <input readOnly style={{ fontSize: '15px' }} required type="email" class="form-control" placeholder="Enter Email" name='emai' value={userdata.emai} />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Mobile Number <span style={{ color: 'red' }}>*</span></label>
//                         <input readOnly style={{ fontSize: '15px' }} required type="text" maxlength="10" class="form-control" placeholder="Enter Mobile Number" name='mobile' value={userdata.mobile} />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Gender <span style={{ color: 'red' }}>*</span></label>
//                         <select disabled class="form-select col-lg-12" style={select} name='gender' value={userdata.gender}>
//                             <option class="" selected disabled>Select Gender</option>
//                             <option class="">Male</option>
//                             <option class="">Female</option>
//                             <option class="">Other</option>
//                         </select>
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Aadhar Number <span style={{ color: 'red' }}>*</span></label>
//                         <input readOnly style={{ fontSize: '15px' }} required type="text" maxlength="12" class="form-control" placeholder="Enter Aadhar Number" name='adhar' value={userdata.adhar} />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Address <span style={{ color: 'red' }}>*</span></label>
//                         <textarea disabled class="form-control" rows="3" placeholder="Enter Address" name='address' value={userdata.address} > </textarea>
//                     </div>


//                     <h6 className="fw-bold col-lg-12 mt-4 mb-2">Parent Details</h6>

//                     <div class="col-md-4">
//                         <label class="form-label">Father name <span style={{ color: 'red' }}>*</span></label>
//                         <input readOnly style={{ fontSize: '15px' }} required type="text" class="form-control" placeholder="Enter Father name" name='fathername' value={userdata.fathername} />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Mother Name (Optional) </label>
//                         <input readOnly style={{ fontSize: '15px' }} required type="text" class="form-control" placeholder="Enter Mother Name" name='mothername' value={userdata.mothername} />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Occuption <span style={{ color: 'red' }}>*</span></label>
//                         <input readOnly style={{ fontSize: '15px' }} required type="text" class="form-control" placeholder="Enter Occuption" name='occuption' value={userdata.occuption} />
//                     </div>


//                     <h6 className="fw-bold col-lg-12 mt-4 mb-2">Annual Details</h6>

//                     <div class="col-md-4">
//                         <label class="form-label">Annual Income <span style={{ color: 'red' }}>*</span></label>
//                         <input readOnly style={{ fontSize: '15px' }} required type="text" class="form-control" placeholder="Enter Annual Income" name='annualinc' value={userdata.annualinc} />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Certificate number <span style={{ color: 'red' }}>*</span></label>
//                         <input readOnly style={{ fontSize: '15px' }} required type="text" class="form-control" placeholder="Enter Certificate number" name='certinumber' value={userdata.certinumber} />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Issue Date <span style={{ color: 'red' }}>*</span></label>
//                         <input readOnly style={{ fontSize: '15px' }} required type="date" class="form-control" name='issuddate' value={userdata.issuddate} />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Issue By <span style={{ color: 'red' }}>*</span></label>
//                         <select disabled class="form-select col-lg-12" style={select} name='issueby' value={userdata.issueby} >
//                             <option class="" selected disabled>Select Issue By</option>
//                             <option class="">Issue By Talati</option>
//                             <option class="">Issue By TDO / Taluka Office</option>
//                         </select>
//                     </div>

//                     <h6 className="fw-bold col-lg-12 mt-4 mb-2">Cast Details <span style={{ color: 'red' }}>*</span></h6>

//                     <div class="col-md-4">
//                         <label class="form-label">Religion</label>
//                         <select disabled class="form-select col-lg-12" style={select} name='religion' value={userdata.religion}>
//                             <option class="" selected disabled>Select Religion</option>
//                             <option class="">Hindu</option>
//                             <option class="">Muslim</option>
//                             <option class="">Christians</option>
//                             <option class="">Shikhs</option>
//                         </select>
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Sub Caste <span style={{ color: 'red' }}>*</span></label>
//                         <select disabled class="form-select col-lg-12" style={select} name='subcast' value={userdata.subcast}>
//                             <option class="" selected disabled>Select Sub Caste</option>
//                             <option class="">Khant</option>
//                             <option class="">Solanki</option>
//                             <option class="">Rabari</option>
//                             <option class="">Lodha</option>
//                             <option class="">Sunasara</option>
//                             <option class="">Basan</option>
//                             <option class="">Jagarala</option>
//                         </select>
//                     </div>
//                     {/* <div class="col-md-4">
//                         <label class="form-label">Issue Date <span style={{color:'red'}}>*</span></label>
//                         <input readOnly  style={{fontSize:'15px'}} required type="date" class="form-control" />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Caste Certificate ID <span style={{color:'red'}}>*</span></label>
//                         <input readOnly  style={{fontSize:'15px'}} required type="text" class="form-control" placeholder="Enter Caste Certificate ID" />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Upload Caste Certificate <span style={{color:'red'}}>*</span></label>
//                         <input readOnly  style={{fontSize:'15px'}} required type="file" class="form-control" />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Upload Ration card <span style={{color:'red'}}>*</span></label>
//                         <input readOnly  style={{fontSize:'15px'}} required type="file" class="form-control" />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Upload 7/12 Document <span style={{color:'red'}}>*</span></label>
//                         <input readOnly  style={{fontSize:'15px'}} required type="file" class="form-control" />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Stemp Pepar <span style={{color:'red'}}>*</span></label>
//                         <input readOnly  style={{fontSize:'15px'}} required type="file" class="form-control" />
//                     </div>
//                     <div class="col-md-4">
//                         <label class="form-label">Signature <span style={{color:'red'}}>*</span></label>
//                         <input readOnly  style={{fontSize:'15px'}} required type="file" class="form-control" />
//                     </div> */}




//                 </form>
//             </div>