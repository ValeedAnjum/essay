import { Button, Grid, Rating, Typography } from "@mui/material";
import { useContext } from "react";
import { EssayContext } from "./context/EssayContext";

const EssayGenerator = () => {
  const {
    aiEssay,
    changeEssayRatingHandler,
    generateEssay,
    changeSiteRatingHandler,
  } = useContext(EssayContext);
  const essayRateHan = (event: any, newVal: any): void => {
    changeEssayRatingHandler(newVal);
  };
  const siteRateHan = (event: any, newVal: any): void => {
    changeSiteRatingHandler(newVal);
  };
  return (
    <Grid container sx={{ padding: "1em" }}>
      <Grid item sm={12}>
        {aiEssay.essayGenerated && aiEssay.essayRating === 0 && (
          <>
            <Typography variant="h6">Please Rate Essay Quality</Typography>
            <Rating
              name="simple-controlled"
              value={aiEssay.essayRating}
              onChange={(event, newValue) => essayRateHan(event, newValue)}
            />
          </>
        )}
        {aiEssay.essayGenerated && aiEssay.essayRating !== 0 && (
          <>
            <Typography variant="h6">Please Rate Site Interface</Typography>
            <Rating
              name="simple-controlled"
              value={aiEssay.siteRating}
              onChange={(event, newValue) => siteRateHan(event, newValue)}
            />
          </>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          height: "80vh",
          outline: "none",
          position: "relative",
          border: "1px solid black",
        }}
        // contentEditable={false}
      >
        {aiEssay.essay}
      </Grid>
      {/* {!aiEssay.generatingEssay && (
        <Grid
          item
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Typography variant="h4">Generating Essay...</Typography>
        </Grid>
      )} */}
      <Grid item xs={12}>
        <Button
          sx={{ borderRadius: "0" }}
          variant="contained"
          fullWidth
          onClick={generateEssay}
          disabled={aiEssay.generatingEssay}
        >
          {aiEssay.generatingEssay ? "Generating..." : "Generate Essay"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default EssayGenerator;
