import axios from "axios"
import Login from "./Login";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Viewall = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [AllDetails, setAllDetails] = useState([]);

    useEffect(() => {
        setAllDetails(location.state && location.state.myloginData);
    }, [])

    const editUser = (userobj) => {
        navigate("/updated", { state: { myloginData: userobj } });
    }

    const deleteUser = (id) => {
        console.log("myid", id.Userid);
        axios.post("http://localhost:8080/deleteUser",
            {
                Userid: id.Userid,
            }).then(res => {
                console.log("deleted form", res);
                if (res.data.status === 200) {
                    alert("Deleted successfully")
                    console.log(res.data.data);
                    setAllDetails(res.data.data);
                }
                else if (res.data.status === 202) {
                    alert(res.data.massage)
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
       <div className="container mt-3 Table">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Country</th>
                    <th>Mobile</th>
                    <th>User Id</th>
                    <th>Edit button</th>
                    <th>Delete button</th>
                </tr>
            </thead>
            <tbody>
                {AllDetails && AllDetails.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.Email}</td>
                        <td>{item.Password}</td>
                        <td>{item.Country}</td>
                        <td>{item.Mobile}</td>
                        <td>{item.Userid}</td>
                        <td><button className="btn btn-dark" onClick={() => editUser(item)}>Edit</button></td>
                        <td><button className="btn btn-dark" onClick={() => deleteUser(item)}>Delete</button></td>

                    </tr>

                ))
                }
            </tbody>

        </table>
        </div>

   )


}