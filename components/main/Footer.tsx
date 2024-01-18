import React from "react";
const packageJson = require('/package-lock.json');




import { FaYoutube } from "react-icons/fa";
const version = packageJson.version;
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            
            <div className="mb-[20px] text-[15px] text-center">
                &copy; Vikshith H G 2024. All rights reserved Version: {version}
            </div>
        </div>
    </div>
  )
}

export default Footer