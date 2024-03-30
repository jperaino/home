import React from "react";

const Footer = () => {
  return (
    <div className={`mt-auto py-6 px-3`}>
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} Jim Peraino. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
