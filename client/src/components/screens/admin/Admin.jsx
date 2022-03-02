import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import Header from "../../../admin_components/dashboard/Header";
import Body from '../../../admin_components/dashboard/Body';
const Admin = ()=>{
    const navigate = useNavigate();
    const ctx = useContext(AuthContext);
    const onClickHandler = ()=>{
        ctx.LogOut();
        navigate('/');
    }
    return(
        <div className="flex flex-col min-h-screen bg-gradient-to-t from-blue-400">
    <Header />
    <Body />
    </div>
    )
}

export default Admin;