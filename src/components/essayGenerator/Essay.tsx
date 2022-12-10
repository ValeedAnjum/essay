import EssayContextProvider from "./context/EssayContext";
import EssayGenerator from "./EssayGenerator";

const Essay = () => {
  return (
    <EssayContextProvider>
      <EssayGenerator />
    </EssayContextProvider>
  );
};

export default Essay;
