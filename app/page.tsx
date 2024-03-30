import { ModeToggle } from "@/components/core/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen pt-10">
      <div className="container mx-auto max-w-2xl">
        <div className="flex justify-between">
          <div>
            <p className="text-l font-bold">Jim Peraino</p>
            <p className="text-s">Software engineer</p>
          </div>
          <div className="space-x-1">
            <ModeToggle />
            <ModeToggle />
            <ModeToggle />
          </div>
        </div>
      </div>
    </main>
  );
}
