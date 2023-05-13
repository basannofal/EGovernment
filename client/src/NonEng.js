import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const NonEng = () => {
    const { id, obid, fid } = useParams("");
    const [feedback, setfeedback] = useState([]);
    const [user, setuser] = useState([]);
    const [userform, setuserform] = useState([]);

    const navigate = useNavigate();

    const Getdata = async () => {
        const res = await fetch(`/getdata/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();
        if (!data) {
            window.alert("error in get data");
        } else {
            let arr = [];
            let userarr = [];
            arr = data.user;
            arr.map((e) => {
                if (e._id == obid) {
                    setuser(e);
                    userarr = e.noncrimi;
                    userarr.map((ele) => {
                        if (ele._id == fid) {
                            setuserform(ele);
                        }
                    });
                }
            });
            // setfeedback(data.user);
        }
    };

    const naviget = useNavigate()

    const dd = new Date();
    const day = dd.getFullYear()

    const pay = (aid) => {

        naviget(`/physicaldoc/${id}/${obid}/${aid}`, { replace: true })

    }



    useEffect(() => {
        Getdata();
    }, []);
    return (
        <>
            <NavLink to={`/Certificates/Non_Certi/${id}/${obid}/${fid}`}>

                <p style={{ textDecoration: "underline" }} id='chlan' className="my-4 mx-auto text-center">Switch Gujarati</p>
            </NavLink>
            <div class="container border" style={{ width: "800px" }}>
                <div>
                    <h5 class="text-center mt-5" style={{ fontWeight: "bold" }}>
                        Appendix-3
                    </h5>
                    <p class="pt-2 text-justify">
                        Sample Application for "NON-CREAMY LAYER" Certificate for Socially
                        and Educationally Backward Class Candidates to avail Reservation for
                        Admission in Educational Institutions in Gujarat Government
                        Services, Jobs :
                    </p>
                    <hr style={{ width: "750px" }} />
                    <p>
                        (This form is to be treated as a model, but information relevant to
                        the applicant and local situation may be included in the form if
                        deemed necessary).
                    </p>
                </div>
                <br />

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        To, <br /> Mamlatdar Shri- <br /> <b>Shri B. g. Parmar</b> <br /> .
                        Taluka Vadgam<br /> District Banaskantha
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
                            Photo{" "}
                        </div> */}
                    </div>
                </div>

                <div class="pt-4">
                    <p>
                        Dear Sir, <br />
                        <p class="pl-5 text-justify">
                            I am NON-CREAMY for the purpose of availing the benefit of
                            reservation as a socially and educationally backward class
                            candidate in the jobs under Gujarat Govt., admission to
                            educational institutions.
                        </p>
                    </p>
                </div>

                <div>
                    <p class="pl-5">
                        Necessary details of me / my father / family are as follows.
                    </p>

                    <p class="pl-4"> (1) Applicant's full name : <b>{userform.fullname}</b></p>

                    <p class="pl-4"> (2) Date of Birth / Place of Birth : <b>{userform.address}</b></p>

                    <p class="pl-4"> (3) 3. Full address of residence</p>
                    <p class="pl-5">(a) Existing : <b>{userform.address}</b></p>
                    <p class="pl-5">(b) Permanent : <b>{userform.address}</b></p>
                    <p class="pl-5">(c) Phone no / Mobile no : <b>{userform.mobile}</b></p>

                    <p class="pl-4"> (4) Religion & Caste / Subcaste : <b>{userform.religion}</b></p>

                    {/* <p class="pl-4"> (5)Occupation / Group : <b>{userform.fullname}</b></p> */}

                    {/* <p class="pl-4"> (5) Father's Full Name : <b>{userform.ulname}</b></p> */}

                    {/* <p class="pl-4"> (7) Mother's Full Name : <b>{userform.fullname}</b></p> */}

                    {/* <p class="pl-4"> (8) Status of parents/spouse.</p> */}
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 pl-5 pt-3">Date : {day}</div>
                    <div class="col-lg-6 col-md-6 col-sm-6 pt-3">
                        (Signature of applicant's parents or natural guardian)
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 pl-5 pt-3">Place : Vadgam</div>
                    <div class="col-lg-6 col-md-6 col-sm-6 pt-3">(Apllicant's Sign)</div>
                </div>

                <div style={{ paddingLeft: "30rem" }}>
                    <img
                        src={require("./image/d_s.png")}
                        alt="digital signature of TDO sir"
                    />
                </div>
            </div>
            <button
                class="btn btn-primary mt-3 w-25 mb-3"
                style={{ marginLeft: "32rem" }}
                id="print_btn"
                onClick={() => window.print()}
            >
                Print the Form
            </button>
        </>
    )
}

export default NonEng