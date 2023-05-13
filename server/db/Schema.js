const mongoose = require('mongoose')

const govschema = mongoose.Schema({
    tdonamme:String,
    tdonumber :String,
    tdoaddress : String,
    talukainfo:String,
    userid: String,
    password :String,
    abouttdo :String,

    staffinfo :[
        {
            staffname :String,
            staffposition: String,
            staffaddress :String,
            staffnumber :Number
        }
    ],

    panchayat :[
        {
            villagename: String,
            sarpanchname :String,
            sarpanchnumber :Number,
            panchayataddress : String,
            totalpeople : String,
            villagecode: String,
            peopleladies : String
        }
    ],

    dept : [
        {
            deptname : String,
            deptinfo : String,
            deptweb : String,
            deptphoto :String,
            date : Number
        }
    ],

    scheme :[
        {
            schemename: String,
            schemedetail : String,
            eligibility : String,
            expdate : String,
            schemephoto : String,
            date : Number
        }
    ],

   


    slider1 : String,
    slider2 : String,
    slider3 : String,

    notice : [
        {
            noticename : String,
            noticemsg : String,
            noticedate : String,
            todaydate :String,
        }
    ],


    award:[
        {
            awardname :String,
            winnername :String,
            compititionname : String,
            compititionyear : String,
            rank : String
        }
    ],

    gellary :[
        {
            gellaryphoto : String,
        }
    ],
    feedback :[
        {
            fbemail : String,
            fbname :String,
            fbsubject : String,
            fbmsg :String
        }
    ],


    product : [{

        pname:String,
        pimage : String,
        pdisc :String
    }],
    ride : [{

        adminname:String,
        adminpass : String,
        rides : Array
    }],

    user :[{
        ufname : String,
        umname : String,
        ulname  :String,
        unumber : Number,
        uemail  :{
            type : String,
            unique : true
        },
        uadhar : String,
        dist : String,
        taluka : String,
        uandr : String,
        pin :String,
        upass : String,
        ucpass  :String,
        uimage : String,
        noncrimi : [{
            fullname : String,
            dob : String,
            emai : String,
            mobile : String,
            gender : String,
            adhar : String,
            address : String,
            fathername : String,
            mothername : String,
            occuption : String,
            annualinc : String,
            certinumber : String,
            issuddate :String,
            issueby : String,
            incomecerti : String,
            religion : String,
            subcast : String,
            castcerissudata  :String,
            castecerid : String ,
            castcerti : String,
            castceriissu : String,
            rationcard : String,
            upload7by12 : String,
            stemppaper : String,
            sign : String,
            status : String,
            cdate : String,
            appname : String,
            paymentid:String,
            orderid :String
        }]

    }],

    // api : [
    //     {
    //         dname : String,
    //         vdetail : [
    //             {
    //                 vname :String
    //             }
    //         ]
    //     }
    // ]


})

const sharegovSchema = mongoose.model('taluka', govschema)

module.exports = sharegovSchema;