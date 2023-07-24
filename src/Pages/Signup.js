import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";




function ReactCrudForm() {
  const [fname, setfname] = useState(""); // usestate is hook which is predefined
  const [Email, setEmail] = useState("");
  const [Password, setPaswrd] = useState("");
  const [Country, setCountry] = useState("");
  const [Mobile, setmobile] = useState("")
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
  const Submit = () => {
    console.log("Button clicked....");
    console.log(Password);
    axios.post("http://localhost:8080/signup", {
      name: fname,
      Email: Email,
      Password: Password,
      Country: Country,
      Mobile: Mobile,
    }).then(res => {
      let response = res.data;
      if (response.status == 200) {
        alert(response.msg + " your userid is " + response.data.userid);
        navigate("/Thanku", { state: { Thankudata: response.data.userid } });
      } else {
        alert("Error " + response.msg);
      }
      console.log(res);
    }).catch((e) => {
      console.log(e); 
    })

  }

  return (<>
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
        <div className="form-check mb-3">
          <input className="form-check-input checkbox" type="checkbox" id="myCheck" name="remember" required />
          <label className="form-check-label" for="myCheck">I agree on blabla.</label>
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Check this checkbox to continue.</div>
        </div>
        <button type="Submit" className="btn btn-primary " onClick={Submit}>Submit</button>
      </div>
      <div className=" lgn">
        <Link className="text-dark" to="/login">All-ready Have An Account? Login here!!</Link>
      </div>

    </div>

  </>)

}
export default ReactCrudForm;

{/* <div className="container mt-5 signup">
        <h1>Your name : {fname}</h1>
        <input type="text" value={fname} onChange={changefname} />
        <h1>Your Email: {Email}</h1>
        <input type="text" value={Email} onChange={changeEmail} />
        <h1>Your Password:{Password}</h1>
        <input type="text" value={Password} onChange={changePswrd} />
        <h1>Your Country:{Country}</h1>
        <input type="text" value={Country} onChange={changeCountry} />
        <h1>Your Mobile:{Mobile}</h1>
        <input type="text" value={Mobile} onChange={changeMobile} />
        <button onClick={Submit}>Submit</button>
        </div> */}