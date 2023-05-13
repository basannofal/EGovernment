const express = require('express');
const app = express();
const mongoose = require('mongoose');
const conn = require('./db/conn')
const bodyparser = require('body-parser');
const path = require('path')
const getschema = require('./db/Schema')
const multer = require('multer')
const Razorpay = require('razorpay');
var crypto = require("crypto");



app.use(express.json())


app.use(express.static(__dirname + '/server/uploads'));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));




// multer using 
const fileFilter=(req, file, cb)=>{
    if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
        cb(null,true);
    }else{
        cb(null, false);
    }
   }
  



const Storage = multer.diskStorage({
    destination: "../client/src/uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: Storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter

});








app.get("/", (req, res) => {
    res.send("hello")
})








// //***************************** IMAGE UPLOAD **************************************** */

app.patch('/imageedit/:id', upload.single('pimage'), async (req, res) => {

    const id = req.params.id
    const { pname, pdisc } = req.body
    const imag = req.file.filename

    console.log(`${req.file.filename} and ${pname} and ${pdisc}`);
    getschema.findByIdAndUpdate(id, {
        $push: {
            product:
            {
                pname: pname,
                pimage: req.file.filename,
                pdisc: pdisc

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
}
)







//***************************** GET DATA **************************************** */

app.get('/getdata', async (req, res) => {
    try {
        const userdata = await getschema.find();
        res.status(201).json(userdata);
    } catch (error) {
        res.send(error)
    }

})





// ************************** GET DATA FOR PERTICULER USER ********************************


app.get('/getdata/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const peruserdata = await getschema.findById(id);
        // console.log(peruserdata);
        res.status(201).json(peruserdata);
    } catch (error) {
        res.send(error)
    }

})





app.get('/getuser/:id/:obid', async (req, res) => {
    try {
        const id = req.params.id
        const obid = req.params.obid
        console.log(id);
        const peruserdata = await getschema.find({ 'dept._id': obid },
            { "_id": obid, dept: { $elemMatch: { _id: obid } } });
        res.status(201).json(peruserdata);
    } catch (error) {
        res.send(error)
    }

})




app.get('/getscheme/:id/:obid', async (req, res) => {
    try {
        const id = req.params.id
        const obid = req.params.obid
        console.log(id);
        const peruserdata = await getschema.find({ 'scheme._id': obid },
            { "_id": obid, scheme: { $elemMatch: { _id: obid } } });
        res.status(201).json(peruserdata);
    } catch (error) {
        res.send(error)
    }

})







// ********************** RAGISTER DATA ****************************


app.post('/ragister', async (req, res) => {


    try {

        const useronly = new getschema({
            userid: req.body.username,
        })
        console.log(useronly.userid);
        const userexist = await getschema.findOne({ userid: useronly.userid })

        if (userexist) {
            return res.status(400).json({ error: ' email already exists' })
        } else {
            const user = new getschema({
                tdonamme: req.body.tdoname,
                tdonumber: `+91 ${req.body.tdonumber}`,
                tdoaddress: req.body.tdoaddress,
                userid: req.body.username,
                password: req.body.password,
            })

            await user.save();
            res.json({ message: "user Ragistrate Successfully" })
        }
    } catch (error) {
        console.log(error);
    }

})




//***************************** LOGIN ***********************************8 */

app.post('/login', async (req, res) => {
    try {
        const { username, psw } = req.body;

        const userava = await getschema.findOne({ userid: username });
        let check = false;

        // let arr = []
        // arr = userava.ride;
        // arr.map((e) => {
        //     if(e.adminname && e.psw){
        //         check = true;
        //     }
        // })

        if (userava) {
            if (userava.password === psw) {
                res.json(userava)
            }
            // else if(check) {

            //     console.log("fist")
            //     res.status(400).json("invalid");
            // }
            else {
                console.log("third")
                res.status(400).json("invalid");
            }
        }
        else {
            res.status(400).json("invalid email")
        }
    } catch (error) {
        console.log(error);
    }
})



//***************************** FORGET PASSWORD ***********************************8 */

app.post('/forgetpass', async (req, res) => {
    try {
        const { username } = req.body;

        const userava = await getschema.findOne({ userid: username });

        if (userava) {

            res.json(userava)


        }
        else {
            res.status(400).json("invalid email")
        }
    } catch (error) {
        console.log(error);
    }
})


//***************************** NEW PASSWORD ***********************************8 */

app.patch('/newpassword/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const { username, psw } = req.body;
        console.log(username);
        console.log(psw);

        if (username == psw) {
            getschema.findByIdAndUpdate(id, {

                password: username

            }).then(data => {

                res.status(201).json(data);

            }).catch(err => {
                console.log(err);
            })
        }
    } catch (error) {
        console.log(error);
    }
})





//***************************** EDIT TDO INFORMATION ***********************************8 */

app.patch('/edittdoinfo/:id', async (req, res) => {

    try {
        const id = req.params.id;



        getschema.findByIdAndUpdate(id, {

            tdonamme: req.body.tdoname,
            tdonumber: req.body.tdonumber,
            tdoaddress: req.body.tdoaddress,
            userid: req.body.username,
            abouttdo: req.body.abouttdo,


        }).then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })

    } catch (error) {
        console.log(error);
    }
})






/// ************************* ADD FEEDBACK **************************************


app.patch('/addfeedback/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            feedback:
            {
                fbemail: req.body.fbemail,
                fbname: req.body.fbname,
                fbsubject: req.body.fbsubject,
                fbmsg: req.body.fbmsg

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})





//******************************************* DELETE FEEDBACK  *********************************** */



app.get('/deletefeedback/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            feedback: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})



/// ************************* ADD STAFF MEMBER **************************************


app.patch('/addstaff/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            staffinfo:
            {
                staffname: req.body.staffname,
                staffposition: req.body.staffposition,
                staffaddress: req.body.staffaddress,
                staffnumber: req.body.staffnumber

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})



// ******************************** STAFF UPDATE  **************************


app.patch('/editstaff/:id/:obid', async (req, res) => {

    const id = req.params.id
    const obid = req.params.obid

    const updateuser = await getschema.updateOne(
        {
            "staffinfo._id": obid
        },
        {
            "$set": {
                "staffinfo.$[outer].staffname": req.body.staffname,
                "staffinfo.$[outer].staffposition": req.body.staffposition,
                "staffinfo.$[outer].staffaddress": req.body.staffaddress,
                "staffinfo.$[outer].staffnumber": req.body.staffnumber,
            }
        },
        {
            "arrayFilters": [
                { "outer._id": obid }
            ]
        },).then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
}
)



//******************************************* DELETE STAFF MEMBER  *********************************** */



app.get('/staffmember/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            staffinfo: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})



/// ************************* ADD PANCHAYAT  **************************************


app.patch('/addpanchayat/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            panchayat:
            {
                villagename: req.body.villagename,
                sarpanchname: req.body.sarpanchname,
                sarpanchnumber: req.body.sarpanchnumber,
                panchayataddress: req.body.panchayataddress,
                totalpeople: req.body.totalpeople,
                villagecode: req.body.villagecode,
                peopleladies: req.body.peopleladies,

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})


// ******************************** PANCHAYAT UPDATE  **************************


app.patch('/editpanchayat/:id/:obid', async (req, res) => {

    const id = req.params.id
    const obid = req.params.obid

    const updateuser = await getschema.updateOne(
        {
            "panchayat._id": obid
        },
        {
            "$set": {
                "panchayat.$[outer].villagename": req.body.villagename,
                "panchayat.$[outer].sarpanchname": req.body.sarpanchname,
                "panchayat.$[outer].sarpanchnumber": req.body.sarpanchnumber,
                "panchayat.$[outer].panchayataddress": req.body.panchayataddress,
                "panchayat.$[outer].totalpeople": req.body.totalpeople,
                "panchayat.$[outer].villagecode": req.body.villagecode,
                "panchayat.$[outer].peopleladies": req.body.peopleladies,

            }
        },
        {
            "arrayFilters": [
                { "outer._id": obid }
            ]
        },).then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
}
)





//******************************************* DELETE PANCHAYAT *********************************** */



app.get('/deletepanchayat/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            panchayat: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})






/// ************************* ADD DEPARTMENT  **************************************


app.patch('/adddepartment/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            dept:
            {
                deptname: req.body.deptname,
                deptinfo: req.body.deptinfo,
                deptweb: req.body.deptweb,
                deptphoto: req.body.deptphoto,
            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})




//******************************************* DELETE DEPARTMENT *********************************** */



app.get('/deletedepartment/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            dept: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})



// ******************************** SCHEME ADDD WHITH PHOTO **************************


app.patch('/savescheme/:id', upload.single('photo'), async (req, res) => {

    const id = req.params.id
    const { name, detail, eli, exp } = req.body
    // const photo = req.file.filename
    const d = new Date();
    let photo = "";
    if (req.file === undefined) {
        photo = "Not Uploaded"
    }
    else {
        photo = req.file.filename
    }
    console.log(photo);

    getschema.findByIdAndUpdate(id, {
        $push: {
            scheme:
            {
                schemename: name,
                schemedetail: detail,
                eligibility: eli,
                expdate: exp,
                schemephoto: photo,
                date: d.getTime(),

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
}
)



// ******************************** SCHEME UPDATE WHITH PHOTO **************************


app.patch('/editscheme/:id/:obid', upload.single('photo'), async (req, res) => {

    const id = req.params.id
    const obid = req.params.obid

    const { name, detail, eli, exp } = req.body
    // const photo = req.file.filename
    const d = new Date();
    let photo = "";
    if (req.file === undefined) {
        photo = "Not Uploaded"
    }
    else {
        photo = req.file.filename
    }
    console.log(photo);

    const updateuser = await getschema.updateOne(
        {


            "scheme._id": obid

        },
        {
            "$set": {
                "scheme.$[outer].schemename": name,
                "scheme.$[outer].schemedetail": detail,
                "scheme.$[outer].eligibility": eli,
                "scheme.$[outer].expdate": exp,
                "scheme.$[outer].schemephoto": photo,
                "scheme.$[outer].date": d.getTime(),

            }
        },
        {
            "arrayFilters": [
                { "outer._id": obid }
            ]
        },).then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
}
)










// ******************************** SCHEME ADDD WHITH PHOTO **************************


app.patch('/savedept/:id', upload.single('photo'), async (req, res) => {

    const id = req.params.id
    const { name, info, web } = req.body
    // const photo = req.file.filename
    const d = new Date();
    let photo = "";
    if (req.file === undefined) {
        photo = "Not Uploaded"
    }
    else {
        photo = req.file.filename
    }
    console.log(photo);

    getschema.findByIdAndUpdate(id, {
        $push: {
            dept:
            {
                deptname: name,
                deptinfo: info,
                deptweb: web,
                deptphoto: photo,
                date: d.getTime()
            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
}
)

//******************************************* DELETE SCHEMES *********************************** */



app.get('/deleteschemes/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            scheme: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})





/// ************************* ADD NOTICE  **************************************


app.patch('/addnotice/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    var date_ob = new Date();
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();


    var date = year + "/" + month + "/" + day;

    getschema.findByIdAndUpdate(id, {
        $push: {
            notice:
            {
                noticename: req.body.noticename,
                noticemsg: req.body.noticemsg,
                noticedate: req.body.noticedate,
                todaydate: date,
            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})




//******************************************* DELETE NOTICE *********************************** */



app.get('/deletenotice/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            notice: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})




/// ************************* ADD AWARD  **************************************


app.patch('/addaward/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            award:
            {
                awardname: req.body.awardname,
                winnername: req.body.winnername,
                compititionname: req.body.compititionname,
                compititionyear: req.body.compititionyear,
                rank: req.body.rank,

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})




//******************************************* DELETE AWARD *********************************** */



app.get('/deleteaward/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            award: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})



//********************************** USER RAGISTRATION *************************** */



app.patch('/userragister/:id', upload.single('uimage'), async (req, res) => {

    const id = req.params.id
    const { ufname, umname, ulname, unumber, uemail, upass, ucpass, dist, taluka, uandr, uadhar, upin } = req.body
    
    const peruserdata = await getschema.findById(id);

    let arr = []
    arr = peruserdata.user
    let x = true
    arr.map((e) => {
        if (e.uemail == uemail) {
            x = false

        }
    })
    if(req.file == undefined){
        console.log("******************************");        
        console.log("this way");
        console.log("******************************");
        return res.status(400).json({ error: 'Image' })
    }
    if (!x) {
        return res.status(400).json({ error: 'Email' })
    }
    else {


        getschema.findByIdAndUpdate(id, {
            $push: {
                user:
                {
                    ufname: ufname,
                    umname: umname,
                    ulname: ulname,
                    unumber: unumber,
                    uemail: uemail,
                    upass: upass,
                    ucpass: ucpass,
                    dist: dist,
                    taluka: taluka,
                    uandr: uandr,
                    uadhar: uadhar,
                    pin: upin,
                    uimage: req.file.filename,

                },

            }

        }).then(data => {

            if (!data) {
                res.status(400).json(data)
                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);
        })

    }

})




//********************************** USER Login *************************** */


// app.post('/userlogin/:id', async (req, res) => {
//     try {
//         const { uphone, upass } = req.body;

//         const id = req.params.id

//         // const userava = await getschema.findOne({ _id: id, "user.unumber" : uphone }, { "array.$": 1 });

//         const userava = await getschema.find({
//             user: { $elemMatch: { unumber: uphone } }
//           })

//         console.log(userava);

//         if (userava) {
//             const alldata = await getschema.findById(userava)
//             if (userava.password === "upass") {
//                 res.json(userava)
//             }
//             else {

//                 res.status(400).json("invalid");
//             }
//         }
//         else {
//             res.status(400).json("invalid email")
//         }
//     } catch (error) {
//         console.log(error);
//     }
// })


// ****************************** NON CRIMI FORM  *************************** */



app.patch('/noncrimiform/:id/:obid', upload.single("incomecerti"), (req, res) => {


    try {
        const { fullname, dob, emai, mobile, gender, adhar, address, fathername, mothername, occuption, annualinc, certinumber, issuddate, issueby, religion, subcast } = req.body

        const _id = req.params.id;
        const obid = req.params.obid
        console.log("**************************");
        console.log(_id);
        console.log(obid);
        console.log("**************************");

        var date_ob = new Date();
        var day = ("0" + date_ob.getDate()).slice(-2);
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        var year = date_ob.getFullYear();

        var date = day + "/" + month + "/" + year;


        getschema.findOneAndUpdate({ "_id": _id, "user._id": obid }, {
            $push: {
                "user.$.noncrimi":
                {
                    dob: dob,
                    emai: emai,
                    mobile: mobile,
                    gender: gender,
                    adhar: adhar,
                    incomecerti: req.file.filename,
                    address: address,
                    fathername: fathername,
                    mothername: mothername,
                    occuption: occuption,
                    annualinc: annualinc,
                    certinumber: certinumber,
                    issuddate: issuddate,
                    issueby: issueby,
                    religion: religion,
                    subcast: subcast,
                    fullname: fullname,
                    fullname: fullname,
                    status: "inProgress",
                    cdate: date,
                    appname: "Non-Creamy Layer Certificate"

                },

            }

        }).then(data => {

            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);
        })

    } catch (e) {
        console.log(e);
    }


})




app.patch('/editStatus/:id/:obid/:orid', async (req, res) => {
    try {

        const id = req.params.id
        const obid = req.params.obid
        const orid = req.params.orid

        console.log("hello");
        let x = new mongoose.Types.ObjectId(id)

        const updateuser = await getschema.updateOne(
            {
                "_id": id,
                "user": {
                    $elemMatch: {
                        obid, "noncrimi._id": orid
                    }
                },
            },
            {
                "$set": {
                    "user.$[outer].noncrimi.$[inner].status": req.body.x,
                }
            },
            {
                "arrayFilters": [
                    { "outer._id": obid },
                    { "inner._id": orid }
                ]
            },
        ).then(data => {
            if (!data) {
                console.log('something went wrong');
            } else {

                console.log(data);
                res.status(201).json(data)
                console.log("Profile Update success");
            }
        }).catch(err => {
            console.log(err);
        })


    } catch (error) {
        res.send(error)
    }

})




/// ************************* ADD MULTIADMIN  **************************************


app.patch('/addride/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            ride:
            {
                adminname: req.body.adminname,
                adminpass: req.body.adminpass,
                rides: req.body.checkedItems,

            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})








//**************************Rajorpay *************************/

const KId = 'rzp_test_KnC63oLExCsdO7'
const Key = 'WmCxAxSKCmqb87VDimUmxAMz'


app.post('/order', (req, res) => {
    var instance = new Razorpay({ key_id: KId, key_secret: Key })

    var options = {
        amount: 500,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            return err
        }
        else {
            return res.send(order)
        }
    });
})




//************VERify **********************/

app.post("/verify", (req, res) => {

    let body = req.body.x + "|" + req.body.response.razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', Key)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === req.body.response.razorpay_signature)
        return res.send("validate payments");
});



//************ORDER STATUS EDIT *************** */

app.patch('/editformstatus/:id/:obid/:aid', async (req, res) => {
    try {

        const id = req.params.id
        const obid = req.params.obid
        const aid = req.params.aid
        console.log(id);
        console.log(obid);
        console.log(aid);


        const updateuser = await getschema.updateOne(
            {
                "_id": id,
                "user": {
                    $elemMatch: {
                        obid, "corder._id": aid
                    }
                },
            },
            {
                "$set": {
                    "user.$[outer].noncrimi.$[inner].orderid": req.body.orderid,
                }
            },
            {
                "arrayFilters": [
                    { "outer._id": obid },
                    { "inner._id": aid }
                ]
            },
        ).then(data => {
            if (!data) {
                console.log('something went wrong');
            } else {
                console.log(data);
                res.status(201).json(data)
                console.log("Profile Update success");
            }
        }).catch(err => {
            console.log(err);
        })


    } catch (error) {
        res.send(error)
    }

})



app.listen(8000, () => {
    console.log('server created');
})