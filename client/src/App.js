import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Adminpanel from './Adminpanel'
import Staffinfo from './Staffinfo';
import Addstaff from './Addstaff';
import Adminlogin from './Adminlogin';
import Ragistration from './Ragistration';
import Panchayat from './Panchayat';
import Addpanchayat from './Addpanchayat';
import Department from './Department';
import DepartmentAdd from './DepartmentAdd';
import Schemes from './Schemes';
import Addschemes from './Addschemes';
import Notice from './Notice';
import Addnotice from './Addnotice';
import Award from './Award';
import Addawards from './Addawards';
import Addimage from './Addimage';
import Userwellcome from './Userwellcome';
import History from './History';
import Demographic from './Demographic';
import AboutTdo from './AboutTdo';
import Staffinformation from './Staffinformation';
import Forgetpass from './Forgetpass';
import Newpass from './Newpass';
import EditTDO from './EditTDO';
import Villagedetail from './Villagedetail';
import Sarpanch from './Sarpanch';
import Noticepage from './Noticepage';
import Talukapanchayat from './Talukapanchayat';
import Grampanchayat from './Grampanchayat';
import Departmentinfo from './Departmentinfo';
import Schemedetail from './Schemedetail';
import Gallary from './Gallary';
import FbandCotc from './FbandCotc';
import AddiinRatS110 from './Attechment/AddiinRatS110';
import DomiS378 from './Attechment/DomiS378';
import FarmerS19 from './Attechment/FarmerS19';
import IncomeS63 from './Attechment/IncomeS63';
import MinorityS79 from './Attechment/MinorityS79';
import SccastS645 from './Attechment/SccastS645';
import Userragistration from './Userragistration';
import Userlogin from './Userlogin';
import Userwelcome from './Userwelcome';
import Userprofile from './Userprofile';
import Userapplication from './Userapplication';
import Noncrimi from './Noncrimi';
import Userview from './Userview';
import Userallapplication from './Userallapplication';
import Formview from './Formview';
import { Adminformdetail } from './Adminformdetail';
import Page404 from './Page404';
import Multiadmin from './Multiadmin'
import Addmultiuser from './Addmultiuser';
import Physicaldoccon from './Physicaldoccon';
import Feedback from './Feedback';
import Complaint from './Complaint';
import Allusers from './Allusers';
import RuleRegulations from './RuleRegulations';
import alanBtn from "@alan-ai/alan-sdk-web";
import Non_Certi from './Certificates/Non_Certi';
import NonEng from './NonEng';




// const alanKey = 'd3ffdc3b17f0b5b9b5bdf6b7d6d9bf172e956eca572e1d8b807a3e2338fdd0dc/stage'
const alanKey = '7f61309d2a4b9d7dafccc32b8bd6a9f92e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {

  useEffect(()=> {
    alanBtn({
      key: alanKey,
      onCommand: ({command}) => {
          if(command === 'testCommand') {
            alert("This Code Was Executed");
          }
      }
    })
  }, [])
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={
          <>
            <Home />
          </>
        }></Route>
      </Routes>


      <Routes>
        <Route path="Certificates/Non_Certi/:id/:obid/:fid" element={<Non_Certi />}></Route>
      </Routes>
      <Routes>
        <Route path="Certificates/noneng/:id/:obid/:fid" element={<NonEng />}></Route>
      </Routes>
     
      {/* <Routes>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes> */}

      <Routes>
        <Route path="/admin/:id" element={<Adminpanel />}></Route>
      </Routes>


      <Routes>
        <Route path="/staffinfo/:id" element={<Staffinfo />}></Route>
      </Routes>

      <Routes>
        <Route path="/addstaff/:id" element={<Addstaff />}></Route>
      </Routes>

      <Routes>
        <Route path="/addstaff/:id/:obid" element={<Addstaff />}></Route>
      </Routes>

      <Routes>
        <Route path="/panchayat/:id" element={<Panchayat />}></Route>
      </Routes>

      <Routes>
        <Route path="/addpanchayat/:id" element={<Addpanchayat />}></Route>
      </Routes>

      <Routes>
        <Route path="/addpanchayat/:id/:obid" element={<Addpanchayat />}></Route>
      </Routes>

      <Routes>
        <Route path="/department/:id" element={<Department />}></Route>
      </Routes>

      <Routes>
        <Route path="/departmentadd/:id" element={<DepartmentAdd />}></Route>
      </Routes>

      <Routes>
        <Route path="/schemes/:id" element={<Schemes />}></Route>
      </Routes>

      <Routes>
        <Route path="/addschemes/:id" element={<Addschemes />}></Route>
      </Routes>

      <Routes>
        <Route path="/addschemes/:id/:obid" element={<Addschemes />}></Route>
      </Routes>


      <Routes>
        <Route path="/notice/:id" element={<Notice />}></Route>
      </Routes>

      <Routes>
        <Route path="/addnotice/:id" element={<Addnotice />}></Route>
      </Routes>

      <Routes>
        <Route path="/award/:id" element={<Award />}></Route>
      </Routes>

      <Routes>
        <Route path="/addaward/:id" element={<Addawards />}></Route>
      </Routes>

      <Routes>
        <Route path="/adminlogin" element={<Adminlogin />}></Route>
      </Routes>

      <Routes>
        <Route path="/ragistration" element={<Ragistration />}></Route>
      </Routes>

      <Routes>
        <Route path="/history" element={<History />}></Route>
      </Routes>

      <Routes>
        <Route path="/demography/:id" element={<Demographic />}></Route>
      </Routes>

      <Routes>
        <Route path="/abouttdo/:id" element={<AboutTdo />}></Route>
      </Routes>

      <Routes>
        <Route path="/staffinformation/:id" element={<Staffinformation />}></Route>
      </Routes>

      <Routes>
        <Route path="/forgetpassword" element={<Forgetpass />}></Route>
      </Routes>

      <Routes>
        <Route path="/newpassword/:id" element={<Newpass />}></Route>
      </Routes>

      <Routes>
        <Route path="/editprofile/:id" element={<EditTDO />}></Route>
      </Routes>

      <Routes>
        <Route path="/villagedetail/:id" element={<Villagedetail />}></Route>
      </Routes>

      <Routes>
        <Route path="/sarpanchdetail/:id" element={<Sarpanch />}></Route>
      </Routes>

      <Routes>
        <Route path="/noticedetail/:id" element={<Noticepage />}></Route>
      </Routes>


      <Routes>
        <Route path="/grampanchayat/:id" element={<Grampanchayat />}></Route>
      </Routes>

      <Routes>
        <Route path="/taludapanchayat/:id" element={<Talukapanchayat />}></Route>
      </Routes>

      <Routes>
        <Route path="/depatmentinfo/:id/:obid" element={<Departmentinfo />}></Route>
      </Routes>

      <Routes>
        <Route path="/schemedetail/:id/:obid" element={<Schemedetail />}></Route>
      </Routes>

      <Routes>
        <Route path="/gallary/:id" element={<Gallary />}></Route>
      </Routes>

      <Routes>
        <Route path="/feedbackandcontact/:id" element={<FbandCotc />}></Route>
      </Routes>
      
      <Routes>
        <Route path="/multiadmin/:id" element={<Multiadmin />}></Route>
      </Routes>

      <Routes>
        <Route path="/addmultiadmin/:id" element={<Addmultiuser />}></Route>
      </Routes>




      {/* ******************** Extra ******************* */}

      <Routes>
        <Route path="/image/:id" element={<Addimage />}></Route>
      </Routes>

      <Routes>
        <Route path="/userwellcome" element={<Userwellcome />}></Route>
      </Routes>

      <Routes>
        <Route path="/userwellcome/:id" element={<Userwellcome />}></Route>
      </Routes>


      {/* ******************** Attechment ******************* */}

      <Routes>
        <Route path="/nameaddinRationcardS110" element={<AddiinRatS110 />}></Route>
      </Routes>

      <Routes>
        <Route path="/domicilecirs378" element={<DomiS378 />}></Route>
      </Routes>

      <Routes>
        <Route path="/farmers19" element={<FarmerS19 />}></Route>
      </Routes>

      <Routes>
        <Route path="/incomecirs63" element={<IncomeS63 />}></Route>
      </Routes>

      <Routes>
        <Route path="/minoritys79" element={<MinorityS79 />}></Route>
      </Routes>

      <Routes>
        <Route path="/sccasts645" element={<SccastS645 />}></Route>
      </Routes>





      {/* ******* user Handling **************** */}

      <Routes>
        <Route path="/userragister/:id" element={<Userragistration />}></Route>
      </Routes>
      <Routes>
        <Route path="/userlogin/:id" element={<Userlogin />}></Route>
      </Routes>

      <Routes>
        <Route path="/userwelcome/:id/:obid" element={<Userwelcome />}></Route>
      </Routes>

      <Routes>
        <Route path="/userprofile/:id/:obid" element={<Userprofile />}></Route>
      </Routes>

      <Routes>
        <Route path="/userapplication/:id/:obid" element={<Userapplication />}></Route>
      </Routes>


      <Routes>
        <Route path="/noncriminal/:id/:obid" element={<Noncrimi />}></Route>
      </Routes>
      
      <Routes>
        <Route path="/userview/:id" element={<Userview />}></Route>
      </Routes>
      
      <Routes>
        <Route path="/allapplication/:id" element={<Userallapplication />}></Route>
      </Routes>

      <Routes>
        <Route path="/formview/:id/:fmid" element={<Formview />}></Route>
      </Routes>

      <Routes>
        <Route path="/adminformdetail/:id/:fmid" element={<Adminformdetail />}></Route>
      </Routes>










{/* **************** v. 3 ******************** */}
      <Routes>
        <Route path="/physicaldoc/:id/:obid/:aid" element={<Physicaldoccon />}></Route>
      </Routes>


      
      
      <Routes>
        <Route path="/feedback/:id" element={<Feedback />}></Route>
      </Routes>

      <Routes>
        <Route path="/complaint/:id" element={<Complaint />}></Route>
      </Routes>

      <Routes>
        <Route path="/allusers/:id" element={<Allusers />}></Route>
      </Routes>

      <Routes>
        <Route path="/rulesragulation" element={<RuleRegulations />}></Route>
      </Routes>








    </>
  );
}

export default App;
