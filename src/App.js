import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Dropdown from "./Components/Dropdown";
import TextComponent from "./Components/TextComponent";

const styles = {
  mainContent: {
    position: "relative",
    padding: "10%",
    border: "2px",
    width: "40%",
    border: "2px solid black",
    left: "5px",
  },
  make: {
    margin: "10px",
  },
  colour: {
    margin: "10px",
  },
  leftContnet: {
    height: "180px",
  },
  rightContent: {
    marginTop: "10px",
  },
};

function App() {
  const make = [
    { value: "audi", abel: "AUDI" },
    { value: "bmw", label: "BMW" },
    { value: "vauxhal", label: "VAUXHAL" },
    { value: "mercedes", label: "MERCEDES" },
    { value: "peugeot", label: "PEUGEOT" },
    { value: "renault", label: "RENAULT" },
  ];
  const colour = [
    { value: "blue", label: "BLUE" },
    { value: "red", label: "RED" },
    { value: "black", label: "BLACK" },
    { value: "orange", label: "ORANGE" },
  ];
  const [presentState, updateState] = useState(1);
  const [selectedMake, setMake] = useState({});
  const [selectedColor, setColor] = useState({});
  const [code, setCode] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(true);
    if (
      (presentState === 1 && selectedMake.value) ||
      (presentState === 2 && selectedColor.value) ||
      (presentState === 3 && code !== "")
    ) {
      setDisabled(false);
    }
  }, [presentState, selectedMake, selectedColor, code]);

  const updateCurrentState = () => {
    if (presentState < 3) {
      updateState(presentState + 1);
    } else {
      updateState(0);
    }
  };

  const clearAll = () => {
    setMake({});
    setColor({});
    setCode("");
    setDisabled(true);
    updateState(1);
  };

  return (
    <div className="App">
      <div style={styles.mainContent}>
        {presentState ? (
          <>
            <div style={styles.leftContnet}>
              {presentState === 1 ? (
                <div style={styles.make}>
                  <Dropdown
                    placeHolder="Select"
                    label="Make"
                    options={make}
                    dropdownValue={setMake}
                  />
                </div>
              ) : (
                ""
              )}
              {presentState === 2 ? (
                <div style={styles.colour}>
                  <Dropdown
                    placeHolder="Select"
                    label="Color"
                    options={colour}
                    dropdownValue={setColor}
                  />
                </div>
              ) : (
                ""
              )}
              {presentState === 3 ? (
                <TextComponent
                  placeHolder="code"
                  label="Code"
                  updateValue={setCode}
                />
              ) : (
                ""
              )}
            </div>
            <div style={styles.rightContent}>
              <Button
                title={presentState < 3 ? "Next" : "Done"}
                isDisabled={disabled}
                handleClick={updateCurrentState}
              />
            </div>
          </>
        ) : (
          <div>
            <h3>Generated Text</h3>
            <p>
              I have a {selectedMake.label} and the color is{" "}
              {selectedColor.label}
            </p>
            <p>
              {selectedColor.value === "red" ? "THE CAR IS RED! NICE!" : ""}
            </p>
            <p>REF: {code}</p>
            <Button title="New" handleClick={clearAll} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
