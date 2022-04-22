import Select, { components } from "react-select";

import { AiFillCaretDown } from "react-icons/ai";
import "./Size.css";
import { useDispatch, useSelector } from "react-redux";
import { filterSize } from "../../redux/actions/productActions";

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
  const filteredSizes = useSelector((state) => state.productReducer.sizes);
  const options = [
    { value: "xx-small", label: "XXS" },
    { value: "x-small", label: "XS" },
    { value: "small", label: "S" },
    { value: "medium", label: "M" },
    { value: "large", label: "L" },
    { value: "x-large", label: "XL" },
    { value: "xx-large", label: "XXL" },
    { value: "34", label: "34" },
    { value: "36", label: "36" },
    { value: "50", label: "50" },
  ];
  // const options2 = [
  //   { value: "34", label: "34" },
  //   { value: "36", label: "36" },
  //   { value: "50", label: "50" },
  // ];

  const label = "Select Size";
  const dispatch = useDispatch();
  const onChange = (value) => {
    console.log(value);
    dispatch(filterSize(value));
  };

  return (
    <Select
      value={filteredSizes}
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
