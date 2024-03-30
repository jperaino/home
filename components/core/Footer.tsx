import { PADDING_X } from "@/app/page";
import React from "react";

const Footer = () => {
  return (
    <div className={`mt-auto py-6 px-${PADDING_X}`}>
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} Jim Peraino. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
