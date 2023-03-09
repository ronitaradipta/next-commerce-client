import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";

import toko1 from "../../../assets/images/img/toko.jpg";

function Toko({ data }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  });
  return (
    <div className="flex mt-4 hover:cursor-pointer w-52">
      {loading ? (
        <div className="space-x-4 mr-4">
          <img
            className="rounded-full"
            src={toko1}
            alt="toko"
            width="50px"
            height="50px"
          />
        </div>
      ) : (
        <Skeleton
          animation="wave"
          variant="circular"
          width={50}
          height={50}
          sx={{ marginRight: 2 }}
        />
      )}
      {loading ? (
        <div className="mb-6">
          <h3 className="font-semibold text-base">{data.storeName}</h3>
          <p className="font-normal text-sm">{data.storeCity}</p>
        </div>
      ) : (
        <Skeleton animation="wave" variant="rounded" width={150} height={50} />
      )}
    </div>
  );
}

export default Toko;
