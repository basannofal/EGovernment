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

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <>
      {/* <h1>
        user id = {user._id} and name = {user.ufname}{" "}
      </h1>
      <h1>apply karely application id = {userform._id}</h1> */}

      <div class="container border" style={{ width: "800px" }}>
        {/* Page 1 */}

        <h5 class="text-center mt-5" style={{ fontWeight: "bold" }}>
          {" "}
          મુદ્દા .નં. ૪૦{" "}
        </h5>
        <h5 class="text-center" style={{ fontWeight: "bold" }}>
          અનુસુચિત જાતિ/અનુસુચિત જનજાતિ માટેનું પ્રમાણપત્ર મેળવવા બાબત{" "}
        </h5>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem", paddingTop: "2rem" }}
          >
            <h6 style={{ fontWeight: "bold" }}> ૧. જોગવાઈ </h6>
          </div>

          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingRight: "6rem", paddingTop: "2rem" }}
          >
            (૧) ભારતના બંધારણ (અનુસુચિત જાતિ) હુકમ ૧૯૫૦ <br />
            (ર) ભારતના બંધારણ (અનુસુચિત જનજાતિ) હુકમ ૧૯૫૦
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem", paddingTop: "2rem" }}
          >
            <h6 style={{ fontWeight: "bold" }}> ૨. અરજી કોને કરવી </h6>
          </div>

          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingRight: "6rem", paddingTop: "2rem" }}
          >
            સંબંધિત મામલતદારશ્રી, ગ્રામ્ય​ વિસ્તાર માટે, <br />
            ઝોનલ્ અધિકારીશ્રિ શહેરી વિસ્તાર માટે <br />
            પરિશિષ્ઠ-૧ / ૪૦ મુજબ
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem", paddingTop: "2rem" }}
          >
            <h6 style={{ fontWeight: "bold" }}>
              {" "}
              ૩. નિકાલ માટેના સત્તાધિકારી{" "}
            </h6>
          </div>

          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingRight: "6rem", paddingTop: "2rem" }}
          >
            તાલુકા મામલતદારશ્રી, <br />
            ઝોનલ અધિકારીશ્રી(શહેરી વિસ્તાર માટે)
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem", paddingTop: "2rem" }}
          >
            <h6 style={{ fontWeight: "bold" }}>૪. નિકાલ માટેની સમય મર્યાદા</h6>
          </div>

          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingRight: "6rem", paddingTop: "2rem" }}
          >
            ૧ દિવસ
          </div>
        </div>
        <h6
          class="mt-5 text-justify"
          style={{
            paddingLeft: "9rem",
            paddingRight: "8rem",
            fontWeight: "bold",
          }}
        >
          અરજીમાં સંપુર્ણ વિગતો સ્પષ્ટ રીતે વાંચી શકાય તેવી રીતે ભરવાની રહેશે.
          તેમજ અરજી સાથે માંગ્યા મુજબના તમામ પુરાવાઓની પ્રમાણિત નકલ બીડવાની
          રહેશે. આ ઉપરાંત અરજી સાથે આપેલ ચેકલીસ્ટમાં તમામ મુદ્દાઓના જવાબ અવશ્ય
          આપવાના રહેશે. જો એક પણ વિગત અધુરી હશે કે પુરાવા રજુ કરેલ નહી હોય તો
          અરજીપત્રક સ્વીકારવામાં આવશે નહી.
        </h6>
        <table
          class="table table-bordered mx-auto mt-4"
          style={{ width: "700px" }}
        >
          <thead>
            <tr>
              <th scope="col">અ.નં.</th>
              <th scope="col">કયારે લાગુ પડે તે</th>
              <th scope="col">બીડાણનું વર્ણન</th>
              <th scope="col">અસલ / નકલ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">૧</td>
              <td>બધાને</td>
              <td>રેશનકાર્ડ</td>
              <td>અસલ</td>
            </tr>
            <tr>
              <td scope="row">૨</td>
              <td>
                પોતાના મકાનમાં રહેતા હોય તો <br /> પોતાની માલિકીનો અને ભાડે
                રહેતા <br /> હોય તો મકાન માલિકનો મકાનની <br /> માલિકીનો પુરાવો
                <hr style={{ marginTop: "18.9rem" }} /> ભાડે રહેતા હોય તો
                <hr /> સરકારી મકાનમાં રહેતા હોય તો
              </td>
              <td>
                રહેઠાણ અંગેનો પુરાવો, <br /> મિલ્કત / મકાનમાં ખરીદીનો દસ્તાવેજ
                અથવા
                <hr />
                મ્યુ.કો./નગરપાલિકા/ગ્રામપંચાયતનું આકારણી <br /> બીલ અથવા
                <hr /> મકાનનો એલોટમેન્ટ લેટર અથવા
                <hr /> સોસાયટીનું શેર સર્ટીફીકેટ અથવા
                <hr /> વિજળીનું બિલ (છેલ્લા મહીનાનું) અથવા
                <hr /> ટેલીફોન બીલ મોબાઇલ ફોનનું બીલ <br /> (છેલ્લા મહીનાનું)
                <hr /> ભાડા પહોંચ
                <hr /> મકાન ફાળવણી થયાનો ઓર્ડર
              </td>
              <td>
                પ્રમાણિત નકલ
                <hr style={{ marginTop: "24.7rem" }} /> નકલ
                <hr /> પ્રમાણિત નકલ
              </td>
            </tr>
            <tr>
              <td scope="row">૩</td>
              <td>બધાને</td>
              <td>શાળા છોડયા અંગેનો દાખલો</td>
              <td>પ્રમાણિત નકલ</td>
            </tr>
            <tr>
              <td scope="row">૪</td>
              <td>બધાને</td>
              <td>
                જાતિ અંગેનો દાખલો
                <hr /> જિલ્લા સમાજ કલ્યાણ અધિ. અથવા જિલ્લા <br /> પછાતવર્ગ અધિ.
                શ્રી દ્વારા આપવામાં આવેલ
              </td>
              <td>પ્રમાણિત નકલ</td>
            </tr>
          </tbody>
        </table>

        {/* Page 2 */}

        <div class="row">
          <div class="col-lg-8 col-md-6 col-sm-6">
            <h5 class="text-center mt-5" style={{ fontWeight: "bold" }}>
              {" "}
              મુદ્દા .નં. ૧/૪૦{" "}
            </h5>
            <h5
              class="text-center "
              style={{ fontWeight: "bold", paddingLeft: "1rem" }}
            >
              {" "}
              અનુસુચિત જાતિ/અનુસુચિત જનજાતિ માટેનું પ્રમાણપત્ર મેળવવાની અરજી
            </h5>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 mt-5">
            <div
              class="border"
              style={{
                height: "80px",
                width: "150px",
                padding: "15px 0 0 35px",
                marginLeft: "4rem",
              }}
            >
              કોર્ટ ફી સ્ટેમ્પ
              <br /> ₹ ૩-૦૦
            </div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem", paddingTop: "2rem" }}
          >
            <div
              class="border pt-4 text-center"
              style={{ height: "140px", width: "130px" }}
            >
              અરજદારનો <br /> પાસપોર્ટ
              <br /> સાઈઝનો <br /> ફોટો
            </div>
          </div>

          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "8rem", paddingTop: "4rem" }}
          >
            નામ : {user.ufname}
            <br />
            સરનામું : {userform.address}
            <br />
            તારીખ : {moment().format("DD / MM / YYYY")}
          </div>
        </div>
        <div style={{ paddingLeft: "9rem", paddingTop: "2rem" }}>
          પ્રતિ, <br />
          મામલતદારશ્રી/ઝોનલ અધિકારીશ્રી <br />
          વડગામ તાલુકો <br />
          <br />
          હું નીચેની વિગતે અનુસૂચિત જાતિ અનુસૂચિત જન જાતિ માટેનું પ્રમાણ પત્ર
          આપવા આપને વિનંતી કરું છું.
          <div style={{ paddingLeft: "0rem", paddingTop: "1rem" }}>
            (૧) અરજદારનું નામ : {userform.fullname}
          </div>
          <div style={{ paddingLeft: "0rem", paddingTop: "1rem" }}>
            (૨) હાલનું સરનામું : {userform.address}
            ગામ / શહેર : {userform.address} તાલુકો.જી : Vadgam
          </div>
          <div style={{ paddingLeft: "0rem", paddingTop: "1rem" }}>
            (૩) કાયમી સરનામું : {userform.address}
            ગામ / શહેર : {userform.address} તાલુકો.જી : Vadgam
          </div>
          <div style={{ paddingLeft: "0rem", paddingTop: "1rem" }}>
            (૪) મુળ વતન : {userform.address}
          </div>
          <div style={{ paddingLeft: "0rem", paddingTop: "1rem" }}>
            (પ) જાતિ / પેટાજાતિ : {userform.religion}
          </div>
          <div style={{ paddingLeft: "0rem", paddingTop: "1rem" }}>
            (૬) કયા હેતુ માટે જરૂર છે? : For government work
          </div>
          <div style={{ paddingLeft: "0rem", paddingTop: "1rem" }}>
            (૭) અગાઉ કોઈ વખત જાતિનું પ્રમાણપત્ર મેળવેલ હોય તો તેની વિગત (હા /
            ના) : No
          </div>
        </div>
        <table
          class="table table-bordered mx-auto mt-4"
          style={{ width: "600px" }}
        >
          <thead>
            <tr>
              <th scope="col">અ.નં.</th>
              <th scope="col">બીડાણનું વર્ણન</th>
              <th scope="col">અસલ / નકલ</th>
              <th scope="col">હા/ના/લાગુ પડતુ નથી</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">૧</td>
              <td>રેશનકાર્ડ</td>
              <td>પ્રમાણિત નકલ</td>
              <td class="text-center">-</td>
            </tr>
            <tr>
              <td scope="row">૨</td>
              <td>રહેઠાણનો પુરાવો</td>
              <td>પ્રમાણિત નકલ</td>
              <td class="text-center">-</td>
            </tr>
            <tr>
              <td scope="row">૩</td>
              <td>શાળા છોડયા અંગેનો દાખલો</td>
              <td>પ્રમાણિત નકલ</td>
              <td class="text-center">-</td>
            </tr>
            <tr>
              <td scope="row">૪</td>
              <td>જાતિ અંગેનો દાખલો</td>
              <td>પ્રમાણિત નકલ</td>
              <td class="text-center">-</td>
            </tr>

            <tr>
              <td scope="row">૫</td>
              <td>પિતાનુ શાળા છોડયાનું પ્રમાણપત્ર</td>
              <td>પ્રમાણિત નકલ</td>
              <td class="text-center">-</td>
            </tr>
          </tbody>
        </table>
        <div style={{ paddingLeft: "9rem", paddingTop: "1rem" }}>
          ઉપર જણાવ્યા પ્રમાણે મેં દર્શાવેલ વિગત સંપુર્ણ સાચી છે. તેની ખાત્રી
          આપું છું.
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem" }}
          >
            <p>સ્થળ : {userform.address} </p>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem" }}
          >
            <p> . . . . . . . . . . . . . . . . . . . . </p>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem" }}
          >
            <p>તારીખ : {moment().format("DD / MM / YYYY")} </p>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "5rem" }}
          >
            <p class="text-center">અરજદારની સહી નામ</p>
          </div>
        </div>
        <div>
          <h5 class="text-center mt-3" style={{ fontWeight: "bold" }}>
            {" "}
            --: એકરાર :--{" "}
          </h5>
          <div
            class="text-justify"
            style={{ paddingLeft: "9rem", paddingRight: "7rem" }}
          >
            અમો અરજદાર અમારા ધર્મના સોગંદ ઉપર પ્રતિજ્ઞાપૂર્વક એકરાર કરી આથી
            જણાવીએ છીએ કે, ઉપર અરજીમાં જણાવેલ તમામ વિગતો / હકીકત અમારી જાણ તેમજ
            માનવા મુજબ ખરી અને બરાબર છે. જો અરજીમાં જણાવેલ હકીકત ખોટી જણાય કે
            અમોએ જાણી બુઝીને ખોટી હકીકત / વિગત રજુ કરેલ હોવાનું ઘ્યાને આવે તો
            ખોટા દસ્તાવેજો ૨જુ ક૨વા બદલ અમારી સામે કાયદેસરની કાર્યવાહી હાથ ધરી
            શકાશે. તેમજ ખોટી હકીકત રજુ કરવી તે ફોજદારી ગુન્હો બને છે. તે હકીકત
            અમો સારી રીતે જાણીએ છીએ.
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-6 pt-5"
            style={{ paddingLeft: "10rem" }}
          >
            <p> . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-6 pt-5"
            style={{ paddingLeft: "6rem" }}
          >
            <p> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </p>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem" }}
          >
            <p> (અરજદારની સહી / અંગુઠાનું નિશાન) </p>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 text-center">
            <p> અરજીપત્ર સ્વીકારનારની સહી </p>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem" }}
          >
            <p>સ્થળ : {userform.address} </p>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-6"
            style={{ paddingLeft: "8rem" }}
          >
            <p> નામ : {user.ufname} </p>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-sm-6"
            style={{ paddingLeft: "10rem" }}
          >
            <p>
              તારીખ : <br /> {moment().format("DD/MM/YYYY")}{" "}
            </p>
          </div>
          <div
            class="col-lg-8 col-md-6 col-sm-6"
            style={{ paddingLeft: "16.4rem" }}
          >
            <p>
              સમય : <br /> {moment().format("h:mm:ss a")}{" "}
            </p>
          </div>

          <div style={{paddingLeft: "30rem"}}>
            <img
              src={require("../image/d_s.png")}
              alt="digital signature of TDO sir"
            />
          </div>
          
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
  );
};

export default Caste_Certi;
