import React, { PropsWithChildren } from 'react';
import Footer from '../../ui/layout/Footer';

const LandingLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="m-desktop_container w-desktop_container">
      <div>Header</div>
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
