import Link from "next/link";
import { poppins } from "./fonts";

export default function Home() {
    return (<div className={poppins.className}>
        <div className="min-h-screen flex flex-col items-center justify-center text-sm sm:text-sm md:text-2xl">
        <div className="font-bold shadow-2xl shadow-amber-500 ">Welcome to fitness app developed by <span className="decoration-wavy decoration-3 text-green-400 decoration-black underline">MRahman</span></div>
        <div>
            <Link href={'/fit'}>
                <button className="p-2 m-2 bg-red-500 hover:bg-red-700 rounded cursor-pointer font-bold">
                    Lets go</button>
            </Link></div>
        </div>
    </div>)
}