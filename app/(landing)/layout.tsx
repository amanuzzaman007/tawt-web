type Props = {
  children: React.ReactNode;
};

import React from "react";
import MainNavbar from "./_components/navbar";

const LandingLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavbar />
      {children}
    </div>
  );
};

export default LandingLayout;
