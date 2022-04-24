import Select, { components } from "react-select";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { filterSize } from "../../redux/actions/productActions";
import { groupedOptions } from "./sizes";

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
    padding: "10px",
    display: "flex",
    fontSize: "1.5rem",
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
  const dispatch = useDispatch();

  const onChange = (value) => {
    dispatch(filterSize(value));
  };

  return (
    <Select
      value={filteredSizes}
      options={groupedOptions}
      isMulti
      onChange={onChange}
      components={{ DropdownIndicator }}
      styles={customStyles}
    />
  );
};

export default SizeSelection;
