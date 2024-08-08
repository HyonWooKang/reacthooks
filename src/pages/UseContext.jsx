import { ThemeProvider } from "../utils/ThemeProvider";
import contextButton from "../components/contextButton";

const UseContext = () => {
  return (
    <ThemeProvider>
      <contextButton />
    </ThemeProvider>
  );
};

export default UseContext;
