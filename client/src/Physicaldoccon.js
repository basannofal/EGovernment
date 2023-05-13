import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Physicaldoccon = () => {


    const {id, obid, aid} = useParams('')
    const [orderid, setorderid] = useState('');
    const [paymentid, setpaymentid] = useState('');

    useEffect(() => {
       console.log(id)
       console.log(obid)
       console.log(aid)
    })
   const handleopenrazopay = (data) => {
       let options = {
           key: "rzp_test_KnC63oLExCsdO7",
           amount: data.amount,
           currency: data.currency,
           name: "Taluka Website",
           description: "Test Transaction",
           handler:   function  (response) {
               let x = data.id
               console.log(response)
               axios.post('/verify', {response,x})
               .then((res) => {
                   console.log(res)
                   console.log("res")
               }).catch((er) => {
                   console.log(er)
               })
           },
       };
       let rzp1 = new window.Razorpay(options);
   
   
       rzp1.open();
   }
   
   const handlepay = async () => {
    axios.post('/order').then((res) => {
        console.log(res.data)
        setorderid(res.data.id)
        writeentry()
        handleopenrazopay(res.data)

    }).catch((er) => {
        console.log(er)
    })
    //    const res = await fetch(`/order`, {
    //        method: "post",
    //        headers: {
    //            "Content-Type": "application/json"
    //        },
    //    })
    //    const data = await res.json();
    //    if (!data) {
    //        window.alert('error in get data')
    //    }
    //    else {
   
    //        handleopenrazopay(data)
    //        console.log(data);
    //    }
   }


   const writeentry = async() => {
    try {
      console.log(orderid)

        const res = await fetch(`/editformstatus/${id}/${obid}/${aid}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            orderid
          })
        })
  
        const data2 = await res.json();
        if (!data2) {
          window.alert('error in get data2');
        }
        else {
        }
  
  
      } catch (e) {
        console.log(e)
        window.alert("Something Went Wrong")
      }
   }


  return (
    <>
         <div class="container" style={{paddingLeft:'6rem', paddingRight:'3rem'}} >
        <h1  class=" col-md-12 mt-5 fw-bold text-center" style={{fontWeight:'bold'}}>The Benefits of Ordering Documents Online At Home</h1>
        <p class="col-sm-12 mt-5 text-align-justify">
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp; fnsd</p>
            <p>
                <ul>  
                    <li>Finding ways to increase and improve efficiency are essential to your organisation’s growth. You are losing time and money if employees are still spending time sifting through paperwork or digging through filing cabinets to find documents. Digitising your paperwork and records has numerous benefits that will offer your company, employees and customers immediate value. </li>
                </ul>
            </p>
          
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Better security. Paper files, while handy, are at a higher risk for loss and theft. ...</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Better for the environment. How many sheets of paper do you have in your office? ...</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Saves space. Storing paper files takes up a lot of physical space. ...</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Improved efficiency. .</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Real-time data.</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Documentation is essential to quality and process control. ...</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Documentation cuts down duplicative work. ...</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;It makes hiring and onboarding so much easier.</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Access to current traveles</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Direct-face to Face contact with respondents</p>
            
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Data good for research based on geographical location</p>
            <p><i class="bi bi-chevron-double-right text-info text-justify"></i>&nbsp;&nbsp;Checked out. Offline documents are tracked in the system so you can see who has the document out. In the example of physical items like a book or DVD, you can see who has taken the item from its physical location.</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Converted to an electronic document</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;Undergo a workflow</p>
            <p><i class="bi bi-chevron-double-right text-info"></i>&nbsp;&nbsp;View the version history</p>

            <p><ul>
                <li>When a cabinet owner or administrator adds an offline document, all schemas are shown in the list. For regular users, they are restricted to only those schemas whose format is set to offline. The following table outlines the rules when adding offline documents:</li>
            </ul></p>
        </p>

       
            <div class="row mb-5">
                <div class="col-lg-6 col-md-6 col-sm-6">
                   <button class="btn btn-primary w-50 ml-5">Go - Back</button> 
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <button class="btn btn-success w-50 ml-5" onClick={handlepay}>Pay</button> 
                 </div>
            </div>
           

       </div>
    </>
  )
}

export default Physicaldoccon