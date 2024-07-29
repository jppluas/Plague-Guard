import React from 'react';
import '../styles/AdSidebar.css';

interface AdSidebarProps {
  position: 'left' | 'right' | 'bottom';
}

const AdSidebar: React.FC<AdSidebarProps> = ({ position }) => {
  return (
    <div className={`ad-sidebar ${position}`}>
      <img src="https://via.placeholder.com/150" alt="Ad 1" />
      <img src="https://via.placeholder.com/150" alt="Ad 2" />
      <img src="https://via.placeholder.com/150" alt="Ad 3" />
    </div>
  );
};

export default AdSidebar;
