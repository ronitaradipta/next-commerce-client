import { useEffect, useState } from "react";
import UserProfileLoading from "../loading/UserProfileLoading";
import callApi from "../../services/callApi";
import DataProfile from "../UserProfile/DataProfile";
import EditDataProfile from "../UserProfile/EditDataProfile";
import Cookies from "js-cookie";

const UserProfileDetails = () => {
  const [user, setUser] = useState(null);
  const [input, setInput] = useState({ name: "", email: "", gender: "", phone_number: "", birth_day: "" });
  const [Notification, setNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [Loader, setLoader] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [activeComponent, setActiveComponent] = useState(null);
  const dataCookies = Cookies.get("user");

  useEffect(() => {
    if (dataCookies) {
      getUserDetail();
    }
  }, [dataCookies, Notification]); // refresh if the variable state Changed / updated

  // image upload for the profile picture
  const uploadImage = (e) => {
    const avatar = e.target.files[0];
    updateProfile(avatar);
  };

  // run the update function for each variable
  const updateProfile = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    try {
      setLoader(true);
      setNotification(false);
      // set for handling with file
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const response = await callApi.put(
        "/users/profile/update",
        {
          name: input.name,
          email: input.email,
          birth_day: input.birth_day,
          phone_number: input.phone_number,
          gender: input.gender,
          avatar: e,
        },
        config
      );
      setLoader(false);
      setSuccessMessage(response.data.message);
      setNotification(true);
      setTimeout(() => {
        setActiveComponent(null);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
  const getUserDetail = async () => {
    try {
      const response = await callApi.get("/users/profile");
      const dataUser = response.data.data;
      setUser({ ...dataUser }); // set data to render on page
      setInputData({ ...dataUser }); // set data to render on editDataProfile component
      setIsLoading(false); // set isLoading to false when user data is available
    } catch (error) {
      console.log(error);
    }
  };

  const setInputData = (data) => {
    setInput({ name: data.name, email: data.email, birth_day: data.user_profile.birth_day, phone_number: data.user_profile.phone_number, gender: data.user_profile.gender });
  };

  const showEditData = (id) => {
    setActiveComponent(id === activeComponent ? null : id); // toggle to active selected component and close the previous active component
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // set skeleton previoew when data is fetching
  if (!user && isLoading) {
    return <UserProfileLoading />;
  } else {
    return (
      <div className="px-6">
        {/* notification message start ---  */}
        <div className={`${Notification ? "flex" : "hidden"} justify-center`}>
          <div className="mr-5 ml-5 fixed flex top-20 py-2 px-5 bg-green-500 opacity-0 rounded-md text-white translate-y-[150px] animate-popUp">
            <svg aria-hidden="true" className="w-5 h-5 mr-1.5 text-black flex-shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <p>{SuccessMessage}</p>
          </div>
        </div>
        {/* notification message ends ---  */}
        <div className="mt-16 bg-white rounded-lg shadow-lg w-full flex flex-wrap d:flex-row">
          <div className=" w-full lg:w-[22%] py-5 px-5">
            <div className="flex flex-col justify-center items-center ">
              <div className="image relative w-44 h-44 md:w-80 md:h-80  rounded-full border border-gray-400 ">
                <img src={user.user_profile.avatar} alt="profile" className="object-contain " />
                {Loader ? (
                  <div className="loader absolute bg-gray-500 opacity-50 top-0 rounded-full w-full h-full flex justify-center items-center">
                    <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin fill-emerald-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="border border-gray-400 text-gray-500 font-medium w-full rounded-md mt-4">
                <label htmlFor="file-upload" className="flex flex-col px-2 items-center justify-center w-full rounded-lg cursor-pointer ">
                  <div className="flex flex-col items-center justify-center ">
                    <p className="mb-2 text-sm text-gray-500 font-semibold mt-3">Pilih Foto</p>
                  </div>

                  <input id="file-upload" type="file" name="avatar" className="hidden" onChange={uploadImage} />
                </label>
              </div>
              <p className="mt-4 text-sm text-gray-700">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
              <button className="border border-gray-400 text-gray-500 font-medium p-3 w-full rounded-md mt-8">Ubah Kata Sandi</button>
            </div>
          </div>
          <div className=" w-full lg:w-[35%] py-5 px-5 ">
            <div className="flex flex-col mb-5 gap-5 ">
              <div className="font-bold text-[20px]">Biodata</div>
              <div>
                <div className="font-semibold text-base-responsive ">Nama </div>{" "}
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
          <div className=" w-full lg:w-[43%] py-5 px-5">
            <div className="flex flex-col justify-center items-center ">
              <h2 className="mt-10 md:mt-0">Alamat</h2>
              <div className="border border-gray-300 rounded-lg w-full mt-4 p-4">
                <p className="mt-2 text-sm sm:text-base">{user.address?.address}</p>
                <button className="text-emerald-500 font-medium mt-6">Ubah Alamat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserProfileDetails;
