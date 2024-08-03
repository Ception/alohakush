"use client";

import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-40">
      <div className="absolute inset-0 bg-white opacity-75"></div>
      <div className="z-10 mt-14 sm:mt-24">
        <BeatLoader color="#fe8c00" loading={true} size={15} />
      </div>
    </div>
  );
}
