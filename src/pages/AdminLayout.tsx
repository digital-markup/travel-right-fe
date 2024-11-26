import { Outlet } from "react-router";
import Sidebar from "./components/sidebar";

function AdminLayout() {
  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-[280px_1fr] gap-x-6">
        <Sidebar />
        <div className="w-full">
          <div className="container mx-auto px-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
