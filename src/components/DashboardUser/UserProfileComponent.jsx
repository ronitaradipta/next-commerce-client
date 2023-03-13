import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import callApi from "../../services/callApi";
import Notification from "../loading/Notification";
import AvatarElements from "./UserElements/AvatarElements";
import UserProfileLoading from "../loading/UserProfileLoading";
import ProfileInfoElements from "./UserElements/ProfileInfoElements";
import PasswordUpdate from "./PasswordUpdate";
import AddressUpdate from "./AddressUpdate";
import AddressElements from "./UserElements/AddressElements";

const UserProfileComponent = ({ onDataChange }) => {
  const dataCookies = Cookies.get("user");
  const [user, setUser] = useState(undefined);
  const [Loader, setLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState("");
  const [activeComponent, setActiveComponent] = useState(null);
  const [input, setInput] = useState({ name: "", email: "", gender: "", phone_number: "", birth_day: "" });

  const setInputData = (data) => setInput({ name: data.name, email: data.email, birth_day: data.user_profile.birth_day, phone_number: data.user_profile.phone_number, gender: data.user_profile.gender });

  useEffect(() => {
    if (dataCookies) getUserDetail();
  }, [dataCookies, isSuccess]);

  const uploadImage = (e) => updateProfile(e.target.files[0]);

  // run the update function for each variable
  const updateProfile = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    try {
      setLoader(true);
      // set for handling with file
      const config = { headers: { "content-type": "multipart/form-data" } };
      const response = await callApi.put("/users/profile/update", { ...input, avatar: e }, config);
      setSuccessMessage(response.data.message);
      setIsSuccess(true);
      setTimeout(() => {
        setActiveComponent(null);
        setIsSuccess(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  // set user profile data
  const getUserDetail = async () => {
    try {
      const response = await callApi.get("/users/profile");
      setUser({ ...response.data.data }); // set data to render on page
      setInputData({ ...response.data.data }); // set data to render on editDataProfile component
      onDataChange({ ...response.data.data });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // set isLoading to false when user data is available
    }
  };

  const showEditData = (id) => setActiveComponent(id === activeComponent ? null : id);

  const handleChangeInput = (e) => setInput({ ...input, [e.target.name]: e.target.value });

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
          <AvatarElements src={user.user_profile.avatar} uploadImage={uploadImage} showEditData={() => showEditData("password-update")} />
          <ProfileInfoElements activeComponent={activeComponent} user={user} Loader={Loader} updateProfile={updateProfile} showEditData={showEditData} input={input} handleChangeInput={handleChangeInput} />
          <AddressElements showEditData={showEditData} user={user} />
        </div>
      </div>
    );
  }
};

export default UserProfileComponent;
