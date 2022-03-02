import React, { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AuthContext from "../../../context/AuthContext";
import JnfForm from '../../reusablecomponents/JnfForm';
const JnfEdit = () => {

    const ctx = useContext(AuthContext);
    const navigate = useNavigate();
    const { state } = useLocation();
    const { companyId } = useParams();
    
    console.log(state);

    const handleEditData = (e, jnfData) => {
        e.preventDefault();
        navigate(
            `/dashboard/${companyId}/previewJnf`,
            { state : { ...jnfData }},
            {
              headers: {
                authorization: "Bearer " + ctx.token,
              },
            }
          );
    }

  return (
    <JnfForm
    jnfdata={state}
    handlejnfdata={handleEditData}
    actionLabel={"Preview"}
  />
  )
}

export default JnfEdit;