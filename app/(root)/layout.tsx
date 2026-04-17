import React, { ReactNode } from "react";
import Navbar from "@/components/web/navigation/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
