import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminComponents/navbar/AdminNav";
import Footer from "../components/footer/Footer";

function AdminRoot() {
  return (
    <>
      <AdminNav />
      <Outlet />
      <Footer />
    </>
  );
}

export default AdminRoot;
