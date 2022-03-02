import axios from "axios";
import React, { useContext } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import GeneralHeader from "../../reusablecomponents/GeneralHeader";

const PreviewJnf = () => {
  ///state object is the Inf object containing all the data.
  const { state } = useLocation();
  const { companyId } = useParams();
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  const handleSubmitJnf = async () => {
    try {
      const req = await axios.post(
        `http://localhost:8000/company/${companyId}/jnf`,
        state,
        {
          headers: {
            authorization: "Bearer " + ctx.token,
          },
        }
      );
      navigate(`/dashboard/${companyId}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleEditJnf = () => {
    console.log(state)
    navigate(
      `/dashboard/${companyId}/jnfEdit`,
      { state : state },
      {
        headers: {
          authorization: "Bearer " + ctx.token,
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-t from-blue-400">
      <GeneralHeader />
      <div className="flex flex-col  justify-center items-center w-2/3 bg-white/60 rounded-md p-5 mb-10">
        <h1 className="font-poppins text-gray-700 text-2xl font-bold">
          Preview
        </h1>
        <p className="divider w-full font-extralight mb-5 mt-2"></p>
        <div className="flex flex-col justify-center w-5/6 items-center mb-5 bg-white rounded-md p-5">
          <FieldComponent label={"Designation"} value={state.designation} />
           
          <FieldComponent label={"Place of posting"} value={state.placeOfPosting} />
          <FieldComponent
            label={"Description"}
            value={state.description}
          />
          <FieldComponent
            label={"CTC in LPA"}
            value={state.ctcInLpa}
          />
          <FieldComponent
            label={"CTC breakup"}
            value={state.ctcBreakup}
          />
          <FieldComponent
            label={"Bond Details"}
            value={state.bondDetails}
          />
        </div>

        <div className="flex w-5/6">
          <button
            onClick={handleEditJnf}
            className="font-poppins w-1/2 mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
          <button
            onClick={handleSubmitJnf}
            className="font-poppins w-1/2 ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const FieldComponent = ({ label, value }) => {
  return (
    <div className="flex p-5 mb-2 items-center justify-center w-full">
      <p className="font-poppins w-1/3 text-gray-700 text-sm font-bold">
        {label}
      </p>
      <p className="text-gray-700 w-2/3 text-sm">{value}</p>
    </div>
  );
};

export default PreviewJnf;
