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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutComponent />}>
          <Route path="/" element={<Navigate to={"/home"} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
