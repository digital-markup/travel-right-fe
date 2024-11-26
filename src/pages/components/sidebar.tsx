import { Link } from "react-router";

function Sidebar() {
  return (
    <div className="w-full h-screen bg-slate-100/50 border-r-slate-300 border-r overflow-hidden flex flex-col gap-y-8">
      <header className="flex">
        <h2 className="text-lg">Travel Right</h2>
      </header>
      <div className="flex flex-1 flex-col gap-3">
        <Link to="/admin/dashboard" className="flex">
          <h3>Dashboard</h3>
        </Link>
        <Link to="/admin/models" className="">
          <h3>Models</h3>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
