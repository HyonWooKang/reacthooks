import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeProvider";

const UseContext = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "20vh",
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        padding: "20px 20px 20px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          width: "15vw",
          fontSize: "1.2em",
        }}
        onClick={toggleTheme}
      >
        테마 변경
      </button>
    </div>
  );
};

export default UseContext;
