import React, { ReactNode } from "react";
import Navbar from "./Navbar";
interface propsData {
  children: ReactNode;
}
const Layout: React.FC<propsData> = (props) => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
