import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
