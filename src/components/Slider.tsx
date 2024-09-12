import { Slider as MuiSlider, type SliderOwnProps } from "@mui/material";

type SliderProps = SliderOwnProps & {
  value?: number;
};

export const Slider = ({ value = 30, ...props }: SliderProps) => {
  return <MuiSlider {...props} defaultValue={value} />;
};

export default Slider;
