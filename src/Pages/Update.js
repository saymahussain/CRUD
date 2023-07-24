import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Updated() {

    const location = useLocation();

    const [fname, setfname] = useState(""); // usestate is hook which is predefined
    const [Email, setEmail] = useState("");
    const [Password, setPaswrd] = useState("");
    const [Country, setCountry] = useState("");
    const [Mobile, setmobile] = useState("");
    const [Userid, setUserid] = useState("");

    const navigate = useNavigate();


    const changefname = (e) => {
        setfname(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changePswrd = (e) => {
        setPaswrd(e.target.value);
    }
    const changeCountry = (e) => {
        setCountry(e.target.value);
    }
    const changeMobile = (e) => {
        setmobile(e.target.value);
    }
    useEffect(() => {
        console.log("location ", location);
        if (location.state.myloginData) {
            let userprofile = location.state.myloginData;
            setmobile(userprofile.Mobile);
            setfname(userprofile.name);
            setCountry(userprofile.Country);
            setEmail(userprofile.Email);
            setUserid(userprofile.Userid);
            setPaswrd(userprofile.Password);


        }

    }, []);

    const Update = () => {
        console.log("Button clicked....");
        axios.post("http://localhost:8080/Update", {
            name: fname,
            Email: Email,
            Password: Password,
            Country: Country,
            Mobile: Mobile,
            Userid: Userid
        }).then(res => {
            let response = res.data;
            if (response.status == 200) {
                alert("updeted successfully")
                navigate("/viewall", { state: { myloginData: response.data } });
            } else {
                alert("Error " + response.msg);
            }
            console.log(res);
        }).catch((e) => {
            console.log(e); 
        })

    }

    return (
        <div className="container mt-3 signup">
            <div action="" className="was-validated">
                <div className="mb-3 mt-3">
                    <label for="uname" className="form-label">Username:</label>
                    <input type="text" className="form-control  mx-auto" placeholder="Enter Username" value={fname} onChange={changefname} required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email:</label>
                    <input type="text" className="form-control  mx-auto" id="email" placeholder="Enter Email " value={Email} onChange={changeEmail} name="Email" required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="mb-3 mt-3">
                    <label for="uname" className="form-label">Password:</label>
                    <input type="text" className="form-control  mx-auto" value={Password} placeholder="Choose Password" onChange={changePswrd} required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="mb-3 mt-3">
                    <label for="uname" className="form-label">Country:</label>
                    <input type="text" className="form-control  mx-auto" value={Country} placeholder="Choose Country" onChange={changeCountry} required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="mb-3 mt-3">
                    <label for="uname" className="form-label">Mobile:</label>
                    <input type="text" className="form-control  mx-auto" value={Mobile} placeholder="Choose Mobile" onChange={changeMobile} required />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                </div>

                <button type="Update" className="btn btn-primary " onClick={Update}>Update</button>
            </div>


        </div>
    )

}
export default Updated;