import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const Preview = (props) => {

    const [previewData, setPreviewData] = useState({
        
    });



    const navigate = useNavigate();
    const { companyid } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post(
            `http://localhost:8000/company/${companyid}/inf`,
            infData
          );
          navigate(`/dashboard/${companyid}`);
        } catch (e) {
          console.log(e.message);
        }
      };
  return (
    <div className="flex w-full h-full bg-gradient-to-t from-blue-200">
        
    </div>
  )
}

export default Preview