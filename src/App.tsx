import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import { Grid2 as Grid } from "@mui/material";
import "./App.css";

const checkboxes = 40;

function App() {
  return (
    <>
      <h1 className="text-3xl">BUSY BOARD</h1>
      <div className="checkboxes mt-6">
        <Box>
          <Grid container columns={8} alignItems="center">
            {Array.from(Array(checkboxes)).map((_, index) => (
              <Grid key={index} size={1}>
                <Checkbox />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default App;
