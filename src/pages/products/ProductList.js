import React from 'react'

const ProductList = () => {
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => console.log(json));
      }, []);
  return (
    <div>
      
    </div>
  )
}

export default ProductList
