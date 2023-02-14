import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Navbar from "../../components/Navbar";
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
    </div>
  );
};

export default ProductList;
