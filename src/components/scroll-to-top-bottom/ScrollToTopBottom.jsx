import React, { useRef } from "react";
import useFetch from "../use-fetch/usefetch";
const ScrollToTopBottom = () => {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  const bottomRef = useRef(null);
  const handleScrolltoBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  // console.log(data);
  if (error) {
    <h1>Some error occured.</h1>;
  }
  if (pending) {
    <h1>Loading... please wait.</h1>;
  }
  return (
    <div>
      <h1>Scroll to top and bottom</h1>
      <h3>This is the top section</h3>
      <button onClick={() => handleScrolltoBottom()}>Scroll to bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((dataItem) => (
              <li key={dataItem.id}> {dataItem.title}</li>
            ))
          : null}
      </ul>
      <button onClick={() => handleScrolltoTop()}>Scroll to top</button>
      <div ref={bottomRef}></div>
      <h3>This is the bottom section</h3>
    </div>
  );
};

export default ScrollToTopBottom;
