import React from "react";

const UpdatePassword = ({ oldPassword, newPassword, confirmPassword, updateProfile }) => {
  return (
    <div className="fixed top-0 right-0 left-0 z-[99]flex items-center justify-center">
      <div className="min-w-[24rem] min-h-[300px] p-5 bg-red-500">
        <form onSubmit={updateProfile}>
          <input type="password" name={oldPassword} />
          <input type="password" name={newPassword} />
          <input type="password" name={confirmPassword} />
          <button className="px-2 py-3 bg-green-500 rounded"> Ubah password</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
