import React from 'react';
import TopBarLogin from './TopBarLogin';
import '../styles/Tutoriales.css';

const Tutoriales: React.FC = () => {

    const videoIds = ["lzLCMJA2FZ4", "4HKFKYco4tM", "f0nV_bUw8mo"]

  return (
    <div>
    <TopBarLogin />
    <div className="youtube-video-list">
      {videoIds.map((id) => (
        <div key={id} className="youtube-video">
            <h2>Video Tutorial</h2>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Tutoriales;