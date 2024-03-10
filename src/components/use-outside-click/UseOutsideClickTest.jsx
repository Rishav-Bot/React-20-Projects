import React, { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

const UseOutsideClickTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  return (
    <>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random content.</h1>
          <p>
            Please click outside the content to hide it. And again click the
            button make the content appear
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
    </>
  );
};

export default UseOutsideClickTest;
