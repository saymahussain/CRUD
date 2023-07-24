import React,{useState , useEffect} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";


function Thanku(){
    const navigate = useNavigate();
    const location = useLocation();
    const [Alldata, setAlldata] = useState([]);
    console.log("alldata" , Alldata);
    useEffect(()=>{
        setAlldata(location.state && location.state.Thankudata)
    })

    return( <div className="container mt-3 signup Thankyou">
        <h1>Thank You!</h1>
        <div className=" lgn">
            <Link className="text-primary" to="/login">Login here!!</Link>
         </div>
         <h1> Your user id:   {Alldata}</h1>
      </div>);
}

export default Thanku;