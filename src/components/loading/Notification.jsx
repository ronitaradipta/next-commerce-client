import React from "react";

const Notification = ({ SuccessMessage }) => {
  return (
    <div className="flex fixed top-0 bottom-0 right-0 left-0 justify-center z-[9999]">
      <div className="mr-5 ml-5 absolute flex top-20 py-2 px-5 bg-green-500 opacity-0 rounded-md text-white translate-y-[150px] animate-popUp z-[9999]">
        <svg aria-hidden="true" className="w-5 h-5 mr-1.5 text-black flex-shrink-0" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        <p>{SuccessMessage}</p>
      </div>
    </div>
  );
};

export default Notification;
