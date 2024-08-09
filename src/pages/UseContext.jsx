import { ThemeProvider } from "../utils/ThemeProvider";
import ContextButton from "../components/ContextButton";

const UseContext = () => {
  return (
    <ThemeProvider>
      <contextButton />
    </ThemeProvider>
  );
};

export default UseContext;
