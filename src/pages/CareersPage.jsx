import React, { useEffect } from 'react';
import Careers from '../components/Careers';
import Navbar from '../components/Navbar';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers-page-wrapper" style={{ paddingTop: '70px' }}>
      <Navbar />
      <Careers />
    </div>
  );
};

export default CareersPage;
