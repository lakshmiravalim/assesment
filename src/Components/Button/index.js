import React, { useState } from "react";

const styles = {
  button: {
    backgroundColour: "blue",
    fontsize: 10,
    height: "30px",
    width: "55px",
  },
};
const Button = ({ title, handleClick, isDisabled }) => {
  return (
    <button style={styles.button} disabled={isDisabled} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
