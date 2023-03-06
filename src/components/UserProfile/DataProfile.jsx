import React from "react";

const DataProfile = ({ showEditData, user }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="name">{user}</div>
      <button id="btn-cancel-dob" className="px-3 py-2 text-green-500" type="button" onClick={showEditData}>
        Edit Data
      </button>
    </div>
  );
};

export default DataProfile;
