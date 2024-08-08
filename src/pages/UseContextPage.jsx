import { ThemeProvider } from "../utils/ThemeProvider";
import UseContext from "./UseContext";

const UseContextPage = () => {
  return (
    <ThemeProvider>
      <UseContext />
    </ThemeProvider>
  );
};

export default UseContextPage;
