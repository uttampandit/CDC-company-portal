import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
const Admin = ()=>{
    const navigate = useNavigate();
    const ctx = useContext(AuthContext);
    const onClickHandler = ()=>{
        ctx.LogOut();
        navigate('/');
    }
    return(
        <Fragment>
        <h2>Welcome to admin</h2>
        <button onClick={onClickHandler}>LogOut</button>
        </Fragment>
    )
}

export default Admin;