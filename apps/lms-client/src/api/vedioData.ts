import { videoListSchema } from "../api/types/vedioSchema";

const rawVideos = [
  {
    id: "1",
    title: "React Tutorial",
    // url: "https://www.youtube.com/embed/lCxcTsOHrjo",
    url: "https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4",
  },
  {
    id: "2",
    title: "Zod Validation",
    url: "https://youtube/OHBwwivraf0?si=utsNPj3nM1gIKmxn.mp4",
  },
  {
    id: "3",
    title: "Tailwind CSS Crash Course",
    url: "https://www.youtube.com/embed/lCxcTsOHrjo",
  },
];

export const videoList = videoListSchema.parse(rawVideos); // validates on load
