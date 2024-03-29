"use client";

import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="self-center">
          <BeatLoader color="#fe8c00" loading={true} size={5} />
        </div>
      </div>
    </div>
  );
}
