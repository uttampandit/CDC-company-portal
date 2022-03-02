import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AuthContext from "../../../context/AuthContext";
import InfForm from '../../reusablecomponents/InfForm';
const InfEdit = () => {

    const ctx = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation();
    const { companyId } = useParams();
    
    console.log(state);

    const handleEditData = (e, infData) => {
        e.preventDefault();
        navigate(
            `/dashboard/${companyId}/previewInf`,
            { state : { ...infData }},
            {
              headers: {
                authorization: "Bearer " + ctx.token,
              },
            }
          );
    }

  return (
    <InfForm
    infdata={state}
    handleinfdata={handleEditData}
    actionLabel={"Preview"}
  />
  )
}

export default InfEdit;