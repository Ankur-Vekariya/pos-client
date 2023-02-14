import logo from "./logo.svg";
import "./App.css";
import LayoutComponent from "./pages/Layout";
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import EditCategory from "./pages/category/EditCategory";
import ProductList from "./pages/products/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/edit-category" element={<EditCategory />} />
        <Route path="/product" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
