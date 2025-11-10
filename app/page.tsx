import Image from "next/image";
import { dmsans, poppins } from "./fonts";
import './globals.css';

export default function Home() {
  return (
    <div data-theme="light" className="min-h-screen flex flex-col items-center justify-center text-center m-4">
      <div className={poppins.className}>
        <h1 className="text-3xl sm:text-2xl md:text-4xl bg-gray-700 text-white p-2 rounded font-bold">
          Fit By MR
        </h1>
      </div>
      <div className={dmsans.className}>
        <div>
          Back
        </div>
        <div>
          Chest
        </div>
        <div>
          Arms
        </div>
        <div>
          Abs
        </div>
        <div>
          Shoulders
        </div>
      </div>
    </div>
  );
}
