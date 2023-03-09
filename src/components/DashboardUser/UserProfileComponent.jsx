import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import callApi from "../../services/callApi";
import Notification from "../loading/Notification";
import AvatarElements from "./UserElements/AvatarElements";
import UserProfileLoading from "../loading/UserProfileLoading";
import ProfileInfoElements from "./UserElements/ProfileInfoElements";
import PasswordUpdate from "./PasswordUpdate";
import AddressUpdate from "./AddressUpdate";

const UserProfileComponent = () => {
  const [user, setUser] = useState(undefined);
  const [input, setInput] = useState({ name: "", email: "", gender: "", phone_number: "", birth_day: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [Loader, setLoader] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [activeComponent, setActiveComponent] = useState(null);
  const dataCookies = Cookies.get("user");

  const setInputData = (data) => {
    setInput({ name: data.name, email: data.email, birth_day: data.user_profile.birth_day, phone_number: data.user_profile.phone_number, gender: data.user_profile.gender });
  };
  useEffect(() => {
    if (dataCookies) {
      getUserDetail();
    }
  }, [dataCookies, isSuccess]); // refresh if the variable state Changed / updated

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
      setLoader(true, "id-for-avatar");
      setIsSuccess(false);
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
      setIsSuccess(true);
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
      console.log(dataUser);
      setUser({ ...dataUser }); // set data to render on page
      setInputData({ ...dataUser }); // set data to render on editDataProfile component
      setIsLoading(false); // set isLoading to false when user data is available
    } catch (error) {
      console.log(error);
    }
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
      <div className="px-5">
        {/* notification message once process success */}
        <div className="flex justify-center">{isSuccess && <Notification SuccessMessage={SuccessMessage} />}</div>
        {/* Address Update ModalBox */}
        {activeComponent === "address-list" ? <AddressUpdate id="address-list" user={user.Addresses} showEditData={showEditData} /> : ""}

        {/* password Update ModalBox */}
        {activeComponent === "password-update" ? (
          <PasswordUpdate
            id="password-update"
            setActiveComponent={setActiveComponent}
            setLoader={setLoader}
            setSuccessMessage={setSuccessMessage}
            showEditData={showEditData}
            setIsSuccess={setIsSuccess}
            SuccessMessage={SuccessMessage}
            Loader={Loader}
          />
        ) : (
          ""
        )}

        <div className=" w-full flex flex-wrap d:flex-row rounded-b-lg">
          <AvatarElements src={user.user_profile.avatar} Loader={Loader} uploadImage={uploadImage} showEditData={() => showEditData("password-update")} />
          <ProfileInfoElements activeComponent={activeComponent} user={user} Loader={Loader} updateProfile={updateProfile} showEditData={showEditData} input={input} handleChangeInput={handleChangeInput} />

          <div className=" w-full md:w-[100%] lg:w-[40%] py-5 px-5">
            <div className="flex flex-col justify-center items-center ">
              <div className="flex w-full items-center justify-between">
                <h2 className="mt-10 md:mt-0">Alamat</h2>
                <button onClick={() => showEditData("address-list")} className="bg-green-500 py-2 px-5 rounded">
                  {user.Addresses[0] ? "List Alamat" : "+ Tambahkan Alamat"}
                </button>
              </div>
              <div className="border border-gray-300 rounded-lg w-full mt-4 p-4">
                {user.Addresses[0] ? (
                  <div>
                    <div className="flex gap-5">
                      <div className="name font-bold">{user.Addresses[0].name}</div>
                      <div className="status bg-neutral-300 py-1 px-1 rounded text-[12px]">Utama</div>
                    </div>
                    <p className="mt-2 text-sm sm:text-base">{user.Addresses[0].Address}</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex gap-5">Belum ada Alamat</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default UserProfileComponent;
