import { createContext, useState, useCallback } from "react";
import { EssayContextInterface } from "./EssayContextInterface";

export const EssayContext = createContext<EssayContextInterface>(
  {} as EssayContextInterface
);

const EssayContextProvider: React.FC<any> = (props) => {
  const [aiEssay, setAiEssay] = useState({
    essayRating: 0,
    siteRating: 0,
    generatingEssay: false,
    essay: "",
    essayGenerated: false,
  });
  const changeEssayRatingHandler = (newVal: number) => {
    setAiEssay((pre) => ({ ...pre, essayRating: newVal }));
  };
  const changeSiteRatingHandler = (newVal: number) => {
    if (newVal === aiEssay.essayRating) {
      prompt("Please Write a review");
    }
    setAiEssay((pre) => ({ ...pre, siteRating: newVal }));
  };
  const generateEssay = () => {
    setAiEssay((pre) => ({
      ...pre,
      generatingEssay: true,
      essayRating: 0,
      siteRating: 0,
      essay: "",
    }));
    setTimeout(() => {
      setAiEssay((pre) => ({
        ...pre,
        generatingEssay: false,
        essayGenerated: true,
        essay: "Hey I am Essay, Please Rate Me",
      }));
    }, 1000);
  };
  return (
    <EssayContext.Provider
      value={{
        aiEssay,
        setAiEssay,
        changeEssayRatingHandler,
        changeSiteRatingHandler,
        generateEssay,
      }}
    >
      {props.children}
    </EssayContext.Provider>
  );
};

export default EssayContextProvider;
