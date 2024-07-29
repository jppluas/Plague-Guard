import React from 'react';
import '../styles/AdSidebar.css';

interface AdSidebarProps {
  position: 'left' | 'right' | 'bottom';
}

const AdSidebar: React.FC<AdSidebarProps> = ({ position }) => {
  return (
    <div className={`ad-sidebar ${position}`}>
      <img src="https://cdn.goconqr.com/uploads/media/image/15582944/desktop_4bab4107-7161-49f8-8ae4-ae602ab64145.jpg" alt="Ad 1" width="150px" height="auto"/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0bWPJZ1Q4Jk9kQ4L-VonjZuvWxeULqGm1Q&s" alt="Ad 2" />
      <img src="https://gruposeripafer.com/site/media/2021/08/load-1024x682.jpg" alt="Ad 3" />
    </div>
  );
};

export default AdSidebar;
