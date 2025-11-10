import Link from "next/link";

export default function Home() {
  const muscles = ['back', 'chest', 'arms', 'abs', 'shoulder'];

  return (
    <div>
      <h1>
        Fit by MR
      </h1>
    <div>
      {muscles.map((muscle) => (
        <Link
        key={muscle}
        href={`/${muscle}`}
        className="bg-green-500"
        >
        {muscle}</Link>
      ))}
    </div>
    </div>
  )
}