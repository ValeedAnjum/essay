export interface EssayContextInterface {
  aiEssay: {
    essayRating: number;
    siteRating: number;
    generatingEssay: boolean;
    essay: string;
    essayGenerated: boolean;
  };

  setAiEssay: React.Dispatch<
    React.SetStateAction<{
      essayRating: number;
      siteRating: number;
      generatingEssay: boolean;
      essay: string;
      essayGenerated: boolean;
    }>
  >;

  changeEssayRatingHandler: (newVal: number) => void;
  changeSiteRatingHandler: (newVal: number) => void;
  generateEssay: () => void;
}
