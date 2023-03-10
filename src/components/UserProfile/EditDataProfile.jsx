import React from "react";
import Spinner from "../loading/Spinner";

const EditDataProfile = ({ id, showEditData, user, handleChangeInput, updateProfile, type, name, Loader }) => {
  return (
    <form className="py-6  relative rounded " onSubmit={updateProfile}>
      {name == "gender" ? (
        <div class="radio_wrapper text-base-responsive flex gap-5">
          <div>
            <input type="radio" name="gender" id="profile-gender-field-male" value="laki-laki" checked={user === "laki-laki"} onChange={handleChangeInput} />
            <label for="profile-gender-field-male">Laki-laki</label>
          </div>

          <div>
            <input type="radio" name="gender" id="profile-gender-field-female" value="perempuan" checked={user === "perempuan"} onChange={handleChangeInput} />
            <label for="profile-gender-field-male">Perempuan</label>
          </div>
        </div>
      ) : (
        <div className="flex mb-5">
          <input id={id} type={type} className="w-full border-b-2 outline-none" name={name} value={user} onChange={handleChangeInput} />
        </div>
      )}

      <div className="flex justify-end">
        <div className="flex gap-5">
          <button className="px-3 py-2 bg-green-500" type="submit" onClick={showEditData}>
            Batal
          </button>
          <button className="flex justify-center items-center min-w-[35px] px-5 bg-green-500" type="submit">
            {Loader ? <Spinner /> : "Simpan"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditDataProfile;
