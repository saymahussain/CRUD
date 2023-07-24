import logo from '../logo.svg';
import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    
                    
                </div>
            </nav>
            <div className='mt-5'>
            <Outlet />


            </div>
            
        </>

    )
};

export default Layout;
