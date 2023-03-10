import React from 'react'

const AddressElements = ({ showEditData, user}) => {
  return (
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
  )
}

export default AddressElements
