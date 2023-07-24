import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    console.log("handleChange");
    const name = event.target.name;  //inputbox ke name ko target krta h target
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const Login = async () => {
    console.log("button click");

    alert("login called!!!")
      await axios.post("http://localhost:8080/login", {
      Userid: inputs.Userid,
      Password: inputs.Password,
    }).then((res) => {
      if (res.data.status == 200) {
        console.log("deal for admin = ", res.data.data);
        let loginData = res.data.data;
        console.log("loginData", loginData);
        navigate("/viewall", { state: { myloginData: loginData } });


      } else if (res.data.status == 201) {
        console.log(res.data.data);
        let loginData = res.data.data;
        console.log("202", loginData);
        navigate("/updated", { state: { myloginData: loginData } });


      } else {
        console.log("user not found");
      }
      console.log(res.data.data);
    
    })
    
  }

  return (
    
    <div className="container mt-3   Login">
      <div action="" className="was-validated">
        <div className="mb-3 mt-3">
          <label for="uname" className="form-label">Enter Your Userid</label>
          <input type="text"  className="form-control mx-auto" name="Userid" placeholder="Enter Username" value={inputs.Userid || ""}
    onChange={handleChange} required />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
        
        <div className="mb-3 mt-3">
          <label for="uname" className="form-label"> Enter Your Password:</label>
          <input type="text" className="form-control mx-auto" name="Password" placeholder="Enter Paasword" value={inputs.Password || ""}
    onChange={handleChange} required />
          <div className="valid-feedback">Valid.</div>
          <div className="invalid-feedback">Please fill out this field.</div>
        </div>
     
       
        <button type="Login" className="btn btn-primary button" onClick={Login}>Login</button>
      </div>
      <div className="sign">
        <Link className="text-dark" to="/signup">Dont Have an Account? Signup here!!</Link>
      </div>
      
     
    </div>
   

   
  )
}

{/* <div className="mt-5">


<label>Enter your Userid:
  <input
    type="text"
    name="Userid"
    value={inputs.Userid || ""}
    onChange={handleChange}
  />
</label>
<label>Enter your Password:
  <input
    type="text"
    name="Password"
    value={inputs.Password || ""}
    onChange={handleChange}
  />
</label>
<button onClick={Login}>Login</button>

</div> */}
