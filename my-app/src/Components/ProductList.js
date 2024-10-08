import './ProductList.css';
import React, { useEffect, useState, useRef } from "react";

//Set Product List
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const productsPerPage = 6;

  //Fetch Product detailes from product.json file.
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data: ", error));
  }, []);

  const containerRef = useRef(null);

  //Set scrolling 
  const handleScroll = (e) => {
    const scrollDirection = e.deltaY > 0 ? 1 : -1;
    const newStartIndex = startIndex + scrollDirection;
    if (newStartIndex >= 0 && newStartIndex <= products.length - productsPerPage) {
      setStartIndex(newStartIndex);
    }
  };

  return (
    <div className="product-list" onWheel={handleScroll}>
      <h2>Product List</h2>
      {/*Display product Detailes */}
      <div className="product-list-outer" ref={containerRef}>
        <div className="product-list-inner">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product ${index >= startIndex && index < startIndex + productsPerPage ? 'visible' : ''}`}
            >
            {/*Set image swaping */}
              <div className="product-images">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  onMouseEnter={(e) => startImageRotation(e, product.images)}
                  onMouseLeave={(e) => stopImageRotation(e)}
                />
              </div>
              <p><b>{product.name}</b></p>
              <p>Quantity: {product.quantity}</p>
              <p>Unit Price: Rs.{product.unitPrice.toFixed(2)}</p>
            </div>
            
          ))}
          
        </div>
      </div>
    </div>
  );
};

//Image swaping function 
const startImageRotation = (event, images) => {
  const imageElement = event.target;
  let currentIndex = 0;

  const intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
  }, 5000);

  imageElement.dataset.intervalId = intervalId;
};

const stopImageRotation = (event) => {
  const intervalId = event.target.dataset.intervalId;
  clearInterval(intervalId);
};

export default ProductList;

