import React from "react";

const styles = {
  container: {
    display: "flex",
  },
  label: {
    textAlign: "left",
    margin: "10px",
  },
  text: {
    width: "200px",
    height: "18px",
    border: "1px solid black",
    borderRadius: "10px",
    padding: 10,
  },
};

const TextComponent = ({ placeHolder, label, updateValue }) => {
  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>
      <input
        type="text"
        placeholder={placeHolder}
        onKeyUp={(e) => updateValue(e.target.value)}
        style={styles.text}
      />
    </div>
  );
};

export default TextComponent;
