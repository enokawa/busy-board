import type React from "react";
import { useState } from "react";
import "./App.css";
import { Box, Grid2 as Grid } from "@mui/material";
import { Checkbox, ProgressBar, Slider } from "./components";

const defaultColumnCount = 8;
const defaultCheckboxCount = defaultColumnCount * 10;

const checkboxes = Array.from({ length: defaultCheckboxCount }, (_, index) => ({
  id: index + 1,
}));

function App() {
  const [checkedCount, setCheckedCount] = useState(0);
  const progressPercentage = (checkedCount / checkboxes.length) * 100;

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  };

  return (
    <>
      <h1 className="text-3xl">BUSY BOARD</h1>
      <div className="checkboxes mt-6">
        <ProgressBar value={progressPercentage} />
        <Box>
          <Grid container columns={defaultColumnCount} alignItems="center">
            {checkboxes.map((checkbox) => (
              <Grid key={checkbox.id} size={1}>
                <Checkbox onChange={handleCheckboxChange} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          <Slider color="warning" />
          <Slider value={50} color="secondary" />
          <Slider value={80} />
          <Slider value={10} color="error" />
        </Box>
      </div>
    </>
  );
}

export default App;
