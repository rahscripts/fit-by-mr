import React from "react";
import Link from "next/link";

const muscleVideos: Record<string, string> = {
  chest: "https://www.youtube.com/embed/fGm-ef-4PVk?si=C6E9_2MhC_I6LUwM",
  back: "https://www.youtube.com/embed/jLvqKgW-_G8?si=KdcdNprTkvRwyf2L" ,
  arms: "https://www.youtube.com/embed/na7MaK-Powg?si=8zd4tBhERGYslWDT" ,
  abs: "https://www.youtube.com/embed/Tn-XvYG9x7w?si=qSFiVuBiYxBAFoF-" ,
  shoulder: "https://www.youtube.com/embed/qEwKCR5JCog",
};

interface PageProps {
  // In newer Next.js versions params can be a Promise — allow both shapes.
  params: { muscle: string } | Promise<{ muscle: string }>;
}

export default async function MusclePage({ params }: PageProps) {
  // params may be a Promise in some Next.js versions; unwrap it.
  const { muscle } = (await params) ?? {};

  if (!muscle) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg text-gray-700">
          Error: Missing muscle parameter in route.
        </p>
        <Link
          href="/fit"
          className="mt-3 bg-gray-700 text-white px-4 py-2 rounded"
        >
          Go Back
        </Link>
      </div>
    );
  }

  const video = muscle ? muscleVideos[muscle.toLowerCase()] : undefined;

  if (!video) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">
          Oops! "{muscle}" workout not found
        </h1>
        <Link
          href="/fit"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-green-200 via-blue-100 to-red-200">
      <div className="flex flex-col items-center p-10 px-4  ">
        <h1 className="text-3xl font-bold capitalize mb-4">
          {muscle} Workout
        </h1>
        <p className="mb-4 text-center text-gray-600">
          Best video across the internet for your targeted muscle:
        </p>
        <div className="relative w-full max-w-3xl pb-[56.25%]">
          <iframe
            src={video}
            title={`${muscle} workout video`}
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}