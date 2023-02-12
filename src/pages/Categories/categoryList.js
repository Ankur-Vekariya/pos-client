import React from "react";
import { Card, Col, Row, Button } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";

const CategoryList = () => {
  const navigate = useNavigate();
  console.log("navigate", navigate);
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Button type="primary" block onClick={() => navigate("/create-category")}>
        Primary
      </Button>
    </Row>
  );
};

export default CategoryList;
