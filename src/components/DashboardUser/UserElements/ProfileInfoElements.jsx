import React from "react";
import DataProfile from "../../UserProfile/DataProfile";
import EditDataProfile from "../../UserProfile/EditDataProfile";

const ProfileInfoElements = ({ activeComponent, user, Loader, updateProfile, showEditData, input, handleChangeInput }) => {
  return (
    <div className=" w-full md:w-[50%] lg:w-[35%] py-5 px-10">
      <div className="flex flex-col mb-5 gap-5 ">
        <div className="font-bold text-[20px]">Biodata</div>
        <div>
          <div className="font-semibold text-base-responsive ">Nama </div>
          {activeComponent === "input-name" ? ( // check if component is active
            <EditDataProfile id="input-name" name="name" loader={Loader} type="text" title="nama" updateProfile={updateProfile} showEditData={() => showEditData("input-name")} user={input.name} handleChangeInput={handleChangeInput} />
          ) : (
            <DataProfile user={user.name} title="nama" showEditData={() => showEditData("input-name")} />
          )}
        </div>
        <div>
          <div className="font-semibold text-base-responsive ">Tanggal Lahir </div>{" "}
          {activeComponent === "input-birth_day" ? ( // check if component is active
            <EditDataProfile
              id="input-birth_day"
              name="birth_day"
              loader={Loader}
              type="date"
              title="Tanggal Lahir"
              updateProfile={updateProfile}
              showEditData={() => showEditData("input-birth_day")}
              user={input.birth_day}
              handleChangeInput={handleChangeInput}
            />
          ) : (
            <DataProfile user={user.user_profile.birth_day} title="tanggal lahir" showEditData={() => showEditData("input-birth_day")} />
          )}
        </div>
        <div>
          <div className="font-semibold text-base-responsive ">Jenis Kelamin </div>{" "}
          {activeComponent === "input-gender" ? ( // check if component is active
            <EditDataProfile
              id="input-gender"
              name="gender"
              loader={Loader}
              type="option"
              title="jenis kelamin"
              updateProfile={updateProfile}
              showEditData={() => showEditData("input-gender")}
              user={input.gender}
              handleChangeInput={handleChangeInput}
            />
          ) : (
            <DataProfile user={user.user_profile.gender} title="jenis kelamin" showEditData={() => showEditData("input-gender")} />
          )}
        </div>
      </div>
      <div className="flex flex-col mb-5 gap-5">
        <div className="font-bold text-[20px]">Kontak</div>
        <div>
          <div className="font-semibold text-base-responsive ">Email</div>{" "}
          {activeComponent === "input-email" ? (
            <EditDataProfile id="input-email" name="email" loader={Loader} title="email" updateProfile={updateProfile} showEditData={() => showEditData("input-email")} user={input.email} handleChangeInput={handleChangeInput} />
          ) : (
            <DataProfile user={user.email} title="email" showEditData={() => showEditData("input-email")} />
          )}
        </div>
        <div>
          <div className="font-semibold text-base-responsive ">Phone Number</div>{" "}
          {activeComponent === "input-phone" ? (
            <EditDataProfile
              id="input-phone"
              name="phone_number"
              loader={Loader}
              type="text"
              title="Phone Number"
              updateProfile={updateProfile}
              showEditData={() => showEditData("input-phone")}
              user={input.phone_number}
              handleChangeInput={handleChangeInput}
            />
          ) : (
            <DataProfile user={user.user_profile.phone_number} title="Phone Number" showEditData={() => showEditData("input-phone")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoElements;
