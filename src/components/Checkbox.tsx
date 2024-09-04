import { Checkbox as MuiCheckBox } from "@mui/material";

interface CheckboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ onChange }: CheckboxProps) => {
  return <MuiCheckBox onChange={onChange} />;
};

export default Checkbox;
