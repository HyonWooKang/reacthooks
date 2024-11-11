import { ThemeProvider } from "../utils/ThemeProvider";
import ContextButton from "../components/contextButton";

const UseContext = () => {
  return (
    <ThemeProvider>
      <ContextButton />
    </ThemeProvider>
  );
};

export default UseContext;
