import { TextField } from "@mui/material";

const Input = ({ onUrlChange, isValid, inputStatus }) => {
  return (
    <TextField
      error={!isValid}
      helperText={inputStatus}
      id="searchInput"
      placeholder="https://www.example.com"
      autoFocus
      required
      onChange={onUrlChange}
    />
  );
};

export default Input;
