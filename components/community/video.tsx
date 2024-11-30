import React from "react";

const VideoEmbed: React.FC = () => {
  return (
    <div className="w-full border border-gray-700 rounded-lg  aspect-video">
      <iframe
        className="w-full h-full rounded-md"
        src="https://www.youtube.com/embed/hrOj7CZt3to?si=n3w6ZtIxVwsg4FLL"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
