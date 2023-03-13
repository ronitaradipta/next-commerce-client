import React from "react";

const DataProfile = ({ showEditData, user }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="name">{user !== null ? user : "Belum diisi"}</div>

      <button className="px-3 py-2 text-green-500" type="button" onClick={showEditData}>
        Ubah
      </button>
    </div>
  );
};

export default DataProfile;
