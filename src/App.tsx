import { Route, Routes } from "react-router";
import RootLayout from "./pages/RootLayout";
import AdminLayout from "./pages/AdminLayout";
import Chat from "./Chat";
import About from "./pages/About";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import Models from "./pages/Models";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="chat" element={<Chat />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="models" element={<Models />} />
      </Route>
    </Routes>
  );
}

export default App;
