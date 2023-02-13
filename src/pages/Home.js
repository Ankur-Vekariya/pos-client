import React from "react";
import Navbar from "../components/Navbar";
import { Col, Row, Card } from "antd";
const gridStyle = {
  width: "100%",
  textAlign: "center",
};
const Home = () => {
  return (
    <div style={{ backgroundColor: "#567189" }}>
      <Navbar />
      <Row>
        <Col span={16}>
          <h1>Tables</h1>
          {[1, 2, 3, 4, 5].map((item, index) => {
            console.log("item", item);
            return (
              <Card
                title="Card title"
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            );
          })}
        </Col>
        <Col span={8}>col-8</Col>
      </Row>
    </div>
  );
};

export default Home;
