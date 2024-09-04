import { Box, Checkbox, Grid2 as Grid } from "@mui/material";

interface CheckboxesProps {
  columns: number;
  checkboxes: number;
}

export const Checkboxes = ({ columns, checkboxes }: CheckboxesProps) => {
  return (
    <>
      <Box>
        <Grid container columns={columns} alignItems="center">
          {Array.from(Array(checkboxes)).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: No id
            <Grid key={index} size={1}>
              <Checkbox />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Checkboxes;
