import { ModeToggle } from "@/components/core/ModeToggle";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-w-screen pt-10 min-h-screen flex flex-col">
      <div className="container mx-auto max-w-2xl flex flex-col flex-grow">
        <div className="flex justify-between">
          <div>
            <p className="text-l font-bold">Jim Peraino</p>
            <p className="text-s">Software engineer</p>
          </div>
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
        <div className="mt-auto py-6">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Jim Peraino. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
