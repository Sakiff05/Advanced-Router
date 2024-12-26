import { Outlet } from "react-router-dom";
import Navbar from "../components/UserComponents/navbar/Navbar";
import Footer from "../components/footer/Footer";

function UserRoot() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserRoot;
