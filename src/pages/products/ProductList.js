import React, { useEffect, useState } from "react";
import { Button, Card } from "antd";
import Navbar from "../../components/Navbar";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
const gridStyle = {
  width: "100%",
  textAlign: "center",
};
const { Meta } = Card;
const ProductList = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  console.log("setProduct", product);
  return (
    <div>
      <Navbar />
      <Row>
        <Col span={16}>
          <h1>Products</h1>
          <div >
            {product.length > 0 &&
              product.map((item, index) => {
                return (
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={<img alt="example" src={item.image} />}
                  >
                    <Meta title={item.title} description={item.description} />
                  </Card>
                );
              })}
          </div>
        </Col>
        <Col span={8}><Button type="primary"><Link to={"/edit-product"}>Add Products</Link></Button></Col>
      </Row>
    </div>
  );
};

export default ProductList;
