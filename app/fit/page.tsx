import Link from "next/link";

export default function Home() {
  const muscles = ["back", "chest", "arms", "abs", "shoulder"];

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold mb-8">Fit By MR</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {muscles.map((muscle) => (
          <Link
            key={muscle}
            href={`/fit/${muscle}`}
            className="bg-green-900 text-white font-semibold p-4 w-40 text-center rounded-xl hover:bg-green-400 transition-all capitalize"
          >
            {muscle}
          </Link>
        ))}
      </div>
    </div>
  );
}
