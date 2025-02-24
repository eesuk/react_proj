import React from "react";
import { StyledInput } from "app/components/style/fromstyle";

interface InputPropTypes {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputPropTypes> = ({
  label,
  name,
  type,
  value,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <StyledInput
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
      ></StyledInput>
    </div>
  );
};

export default Input;

// Input.propTypes = {
//   label: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
