import Navbar from "./Navbar";

const Layout = ({ children } : any) => {
  return (
    <div className="relative bg-white shadow-md">
      <Navbar />
      <div className="mt-12">
        {children}
      </div>
    </div>
  );
};

export default Layout;
