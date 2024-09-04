import {
  Box,
  LinearProgress,
  type LinearProgressProps,
  Typography,
} from "@mui/material";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

interface ProgressBarProps {
  value: number;
}

export const ProgressBar = ({ value = 0 }: ProgressBarProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={value} />
    </Box>
  );
};

export default ProgressBar;
