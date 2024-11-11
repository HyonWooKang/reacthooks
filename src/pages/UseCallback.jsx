import { useState, useCallback } from "react";

// 색상 선택 버튼 컴포넌트
const ColorButton = ({ color, onClick }) => {
  console.log(`Rendering ColorButton for ${color}`);
  return (
    <button
      onClick={() => onClick(color)}
      style={{
        backgroundColor: color,
        padding: "10px",
        margin: "5px",
        color: "#fff",
      }}
    >
      {color}
    </button>
  );
};

// 배경색을 보여주는 컴포넌트
const Background = ({ color }) => {
  console.log("Rendering Background");
  return (
    <div
      style={{
        width: "100%",
        height: "150px",
        backgroundColor: color,
        marginTop: "20px",
      }}
    >
      <h3 style={{ textAlign: "center", color: "#fff" }}>
        Background Color: {color}
      </h3>
    </div>
  );
};

const UseCallbackPage = () => {
  const [backgroundColor, setBackgroundColor] = useState("gray");

  // 색상을 변경하는 핸들러를 useCallback으로 메모이제이션
  const handleColorChange = useCallback((color) => {
    setBackgroundColor(color);
  }, []);

  const colors = ["red", "blue", "green", "orange", "purple"];

  return (
    <div>
      <h2>Choose a Color</h2>
      {colors.map((color) => (
        <ColorButton key={color} color={color} onClick={handleColorChange} />
      ))}
      <Background color={backgroundColor} />
    </div>
  );
};

export default UseCallbackPage;
