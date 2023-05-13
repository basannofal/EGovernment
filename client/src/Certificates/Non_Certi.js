import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const Caste_Certi = () => {
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
  
const pay = (aid) => {
  
  naviget(`/physicaldoc/${id}/${obid}/${aid}`, { replace: true })

}


const dd = new Date();
const day = dd.getFullYear()

  useEffect(() => {
    Getdata();
  }, []);
  return (
    <>

    <NavLink to={`/Certificates/noneng/${id}/${obid}/${fid}`}>

    <p style={{textDecoration:"underline"}} id='chlan' className="my-4 mx-auto text-center">Switch English</p>
    </NavLink>
      <div class="container border" style={{ width: "800px" }}>
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
          <div class="col-lg-6 col-md-6 col-sm-6">
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

          <p class="pl-4"> (૧) અરજદારનું પુરુ નામ : <b>{userform.fullname}</b> </p>

          <p class="pl-4"> (૨) જન્મ તારીખ / જન્મસ્થળ : <b>{userform.address}</b> </p>

          <p class="pl-4"> (3) રહેઠાણનુ પુરુ સરનામુ : </p>
          <p class="pl-5">(ક) હાલનું : <b>{userform.address}</b></p>
          <p class="pl-5">(ખ) કાયમી : <b>{userform.address}</b></p>
          <p class="pl-5">(ગ) ફોન નં/ મોબાઇલ નં : <b>{userform.mobile}</b></p>

          <p class="pl-4"> (૪) ધર્મ જાતિ પેટાજાતિ : <b>{userform.religion}</b> </p>


          <p class="pl-4"> (૫) પિતાનું પુરુ નામ : <b>{user.ulname}</b></p>

          {/* <p class="pl-4"> (૭) પતિનું પુરુ નામઃ : - </p> */}

          {/* <p class="pl-4">
            {" "}
            (૬) માતા પિતા ? જીવનસાથીનો દરજ્જો. (Status of Parent (s) / Spouse){" "}
          </p> */}
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 pl-5 pt-3">તારીખ : {day}</div>
          <div class="col-lg-6 col-md-6 col-sm-6 pt-3">
            (અરજદારના માતા પિતા અથવા કુદરતી વાલીની સહી)
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 pl-5 pt-3">સ્થળ : વડગામ </div>
          <div class="col-lg-6 col-md-6 col-sm-6 pt-3">(અરજદારની સહી)</div>
        </div>

        <div style={{ paddingLeft: "30rem" }}>
          <img
            src={require("../image/d_s.png")}
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


        <div className="row">

        <div style={{margin:"auto"}}>
      {


        userform.orderid != "" ?
          <div >

            <button id="rzp-button1" className='btn btn-primary' onClick={()=> {pay(fid)}}>Pay</button>
          </div>
          :
          <div style={{ display: "flex" }}>
            <p>We will Sent your document in sort time soon as possible</p>
          </div>
      }

        </div>
        </div>
    </>
  );
};

export default Caste_Certi;
