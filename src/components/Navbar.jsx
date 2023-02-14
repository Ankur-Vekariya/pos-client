import React from "react";
import { Row, Col, Button, Typography, Dropdown } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;
const items = [
  {
    key: "1",
    label: <Link to={"/profile"}>profile</Link>,
  },
  {
    key: "2",
    label: <Link to={"/product"}>Product</Link>,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        General
      </a>
    ),
  },
];

const Navbar = () => {
  return (
    <div>
      <Row style={{ backgroundColor: "#CFB997" }}>
        <Col span={4}>logo</Col>
        <Col span={12}>
          <Title style={{ fontSize: 30, color: "#567189" }}>
            Restaurant Manager
          </Title>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Button type="text" style={{ color: "#567189", fontSize: 20 }}>
            Menu
          </Button>
          <Button type="text" style={{ color: "#567189", fontSize: 20 }}>
            Orders
          </Button>
          <Button type="text" style={{ color: "#567189", fontSize: 20 }}>
            Products
          </Button>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
          >
            <Button type="text" style={{ color: "#567189", fontSize: 20 }}>
              Settings
            </Button>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
