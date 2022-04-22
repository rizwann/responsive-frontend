import Select, { components } from "react-select";

import { AiFillCaretDown } from "react-icons/ai";
import "./Size.css";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props} style={{ width: "10px" }}>
      <AiFillCaretDown />
    </components.DropdownIndicator>
  );
};
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    width: "100%",
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: "200",
    fontSize: "16px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
const SizeSelection = () => {
  const options = [
    { value: "small", label: "S" },
    { value: "medium", label: "M" },
    { value: "large", label: "L" },
    { value: "x-large", label: "XL" },
  ];
  const label = "Select Size";

  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Select
      label={label}
      options={options}
      isMulti
      onChange={onChange}
      components={{ DropdownIndicator }}
      styles={customStyles}
    />
  );
};

export default SizeSelection;

// const options = [
//   { value: "small", label: "S" },
//   { value: "medium", label: "M" },
//   { value: "large", label: "L" },
//   { value: "x-large", label: "XL" },
// ];

// const SizeSelection = () => (
//   <Select
//     closeMenuOnSelect={false}
//     components={{ DropdownIndicator }}
//     isMulti
//     options={options}
//   />
// );
// export default SizeSelection;
