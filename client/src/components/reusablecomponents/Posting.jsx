import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import More_Icon from "../../assets/More_Icon";

const Posting = ({ posting }) => {
  const [open, setopen] = useState(false);

  const navigate = useNavigate();

  const { companyId } = useParams();

  const handleChange = () => setopen(!open);
  return (
    <div className="flex flex-col w-full bg-white rounded-lg mb-3">
      <div className="flex p-5">
        <div className="flex grow">
          <p className="font-poppins text-portal-blue">{posting.designation}</p>
        </div>
        <More_Icon open={open} onChange={handleChange} />
      </div>
      {open && (
        <div className="flex pr-5 pl-5 justify-start items-start">
          <p className="grow font-poppins text-sm font-light">
            {posting.description}
          </p>
          <button className="font-poppins rounded mt-5 mb-5 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline">
            <PencilIcon
              className="w-4 h-4 text-white"
              aria-hidden="true"
              onClick={() => navigate(`updateinf/${posting._id}`)}
            />
          </button>
          <button className="font-poppins mt-5 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <TrashIcon className="w-4 h-4 text-white" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Posting;
