import React from "react";
import { Button } from "../ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <div className={`flex justify-between px-3`}>
      <Link href="/">
        <div>
          <p className="text-l font-bold">Jim Peraino</p>
          <p className="text-s">Software engineer</p>
        </div>
      </Link>
      <div className="space-x-1">
        <a
          href="https://github.com/jperaino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="icon">
            <FaGithub className="h-[1.2rem] w-[1.2rem] " />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/jim-peraino/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="icon">
            <FaLinkedin className="h-[1.2rem] w-[1.2rem] " />
          </Button>
        </a>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
