import React from 'react';
import TopBarLogin from './TopBarLogin';
import '../styles/Tutoriales.css';
import { useAppContext } from '../context/AppContext';
import AdSidebar from './AdSidebar';

const Tutoriales: React.FC = () => {

  const { isPaidVersion } = useAppContext();
    const videoIds = ["Up-wuX11lM8", "Up-wuX11lM8", "Up-wuX11lM8"]

  return (
    <div>
    <TopBarLogin />
     {!isPaidVersion && <AdSidebar position="left" />}
     {!isPaidVersion && <AdSidebar position="right" />}
      {!isPaidVersion && <AdSidebar position="bottom" />}
    <div className="youtube-video-list">
      {videoIds.map((id) => (
        <div key={id} className="youtube-video">
            <h2>Tutorial</h2>
          <iframe
            width="400"
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
    {!isPaidVersion && <AdSidebar position="bottom" />}

    </div>
  );
};

export default Tutoriales;