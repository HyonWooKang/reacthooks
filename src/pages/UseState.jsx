import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>총 {count}회 클릭하였습니다.</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default UseState;
