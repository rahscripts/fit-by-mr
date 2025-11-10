import { notFound } from "next/navigation";

const muscleVideos: Record<string, string> = {
  chest: "https://www.youtube.com/embed/VI1TpdzGI0A",
  back: "https://www.youtube.com/embed/2XdTxUS6uSg",
  arms: "https://www.youtube.com/embed/5MQ1x3Zr0IY",
  abs: "https://www.youtube.com/embed/WSu-wci9uTo",
  shoulder: "https://www.youtube.com/embed/qEwKCR5JCog",
};

export default function MusclePage({params}: {
    params: {muscle: string};
}) {
    const {muscle} = params;
    const video = muscleVideos[muscle.toLowerCase()];


    return (
      <div>
        <h1>
          {muscle} Workout
        </h1>
        <p>
          Here is the best video across the internet for your targeted muscles:
        </p>
        <div>
          <iframe src={video} frameborder="0"></iframe>fr
        </div>
      </div>
    )
}