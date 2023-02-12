import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
// import Layout from "./pages/Layout";
import CategoryList from "./pages/Categories/categoryList";

import { Layout, Space, Button } from "antd";
import Responsive from "./utils/responsive";
import CreateCategory from "./pages/Categories/createCategories";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;

const router = createBrowserRouter([
  {
    path: "/create-category",
    element: <CreateCategory />,
  },
  {
    path: "/category-list",
    element: <CategoryList />,
  },
]);

function App() {
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };
  const siderStyle = {
    textAlign: "center",
    lineHeight: "100%",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };

  console.log("Responsive", Responsive());
  const height = Responsive.height?.current;

  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
      {/* <div className="App">
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
          size={[0, 48]}
        >
          <Layout>
            <Sider style={siderStyle}>Sider</Sider>
            <Layout>
              <Header style={headerStyle}>
                <Button>Default Button</Button>
                <Button>Default Button</Button>
                <Button>Default Button</Button>
                <Button>Default Button</Button>
              </Header>
              <Content style={contentStyle}>
                <CategoryList />
              </Content>
              <Footer style={footerStyle}>Footer</Footer>
            </Layout>
          </Layout>
        </Space>
      </div> */}
    </main>
  );
}

export default App;
