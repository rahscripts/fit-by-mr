import Link from "next/link";
import { dmsans } from "../fonts";

export default function Home() {
  const muscles = ["back", "chest", "arms", "abs", "shoulder"];

  return (
    <div className={dmsans.className}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-white-300 via-green-400 to-white-300">
        <h1 className="text-3xl font-extrabold mb-8">Fit By MR</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {muscles.map((muscle) => (
            <Link
              key={muscle}
              href={`/fit/${muscle}`}
              className="bg-green-900 text-white font-semibold p-4 w-40 text-center rounded-xl hover:bg-black hover:text-white transition-all capitalize"
            >
              {muscle}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
