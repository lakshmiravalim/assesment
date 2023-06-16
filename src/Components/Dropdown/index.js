import React, { useState, useEffect } from "react";

const styles = {
  dropdownSelector: {
    display: "flex",
  },
  dropdownContainer: {
    textAlign: "left",
    border: "1px solid #ccc",
    position: "relative",
    borderRadius: "5px",
    width: "100%",
  },
  dropdownInput: {
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    userSelect: "none",
  },
  dropdownMenu: {
    position: "absolute",
    transform: "translate(4px)",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "auto",
    maxHeight: "150px",
    backgroundColor: "#fff",
    right: "1%",
  },
  dropdownItem: {
    padding: "5px",
    cursor: "pointer",
  },
  label: {
    textAlign: "left",
    margin: "10px",
  },
};

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const Dropdown = ({ placeHolder, options, label, dropdownValue }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder;
  };
  const onItemClick = (option) => {
    setSelectedValue(option);
    dropdownValue(option);
  };

  return (
    <div style={styles.dropdownSelector}>
      <label style={styles.label}>{label}</label>
      <div style={styles.dropdownContainer}>
        <div onClick={handleInputClick} style={styles.dropdownInput}>
          <div>{getDisplay()}</div>
          <div style={styles.dropdownTool}>
            <Icon />
          </div>
        </div>
        {showMenu && (
          <div style={styles.dropdownMenu}>
            {options.map((option) => (
              <div
                onClick={() => onItemClick(option)}
                key={option.value}
                style={styles.dropdownItem}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
