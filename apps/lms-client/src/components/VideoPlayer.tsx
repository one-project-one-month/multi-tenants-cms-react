import { useVideoStore } from '../store/videoStore.js';

export const VideoPlayer = () => {
  const selectedVideo = useVideoStore((state) => state.selectedVideo);

  return (
    <div className="w-full aspect-video mt-6">
      {selectedVideo.url ? (
        <>
          <iframe
            src={selectedVideo.url}
            allowFullScreen
            className="w-full h-full rounded-2xl border shadow-lg p-3 bg-black"
            sandbox="allow-scripts allow-same-origin allow-forms"
          ></iframe>
          <h2 className="text-xl font-semibold mt-2">{selectedVideo.title}</h2>
        </>
      ) : (
        <div className="text-center text-gray-500 h-full flex items-center justify-center border rounded-2xl bg-gray-100">
          Select a lesson to watch the video
        </div>
      )}
    </div>
  );
};
