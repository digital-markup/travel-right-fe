import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <nav className="w-full h-14 flex justify-between items-center shadow-md px-8 md:px-0">
        <h2 className="md:mx-8 text-lg">Travel Right</h2>
        <ul className="flex items-center gap-x-4 px-8">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="md:ml-8">
            <Button variant={"default"}>Sign Up</Button>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
