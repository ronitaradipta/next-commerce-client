import React from "react";
import Spinner from "../loading/Spinner";

const EditDataProfile = ({ id, showEditData, user, handleChangeInput, updateProfile, type, name, loader }) => {
  return (
    <form className="py-6  relative rounded " onSubmit={updateProfile}>
      <div className="flex mb-5">
        <input id={id} type={type} className="w-full border-b-2 outline-none" name={name} value={user} onChange={handleChangeInput} />
      </div>
      {/* this work still on going for gender selection */}
      {/* <div class="radio_wrapper text-base-responsive">
        <input type="radio" name="gender" id="profile-gender-field-male" value="1" />
        <label for="profile-gender-field-male">Laki-laki</label>
        <input type="radio" name="gender" id="profile-gender-field-female" value="2" />
        <label for="profile-gender-field-male">Perempuan</label>
      </div> */}
      <div className="flex justify-end">
        <div className="flex gap-5">
          <button id="btn-cancel-dob" className="px-3 py-2 bg-green-500" type="submit" onClick={showEditData}>
            Batal
          </button>
          <button id="btn-change-dob" className="flex justify-center items-center min-w-[35px] px-5 bg-green-500" type="submit">
            {loader ? <Spinner /> : "Simpan"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditDataProfile;
