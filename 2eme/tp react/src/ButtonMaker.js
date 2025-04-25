import React from "react";
import { useState } from "react";


function ButtonMaker() {
  const [buttonValue, setButtonValue] = useState("VALUE");
  const style = [
    "btn-primary",
    "btn-secondary",
    "btn-success",
    "btn-danger",
    "btn-warning",
    "btn-info",
    "btn-light",
    "btn-dark",
  ];
  const icones = ["mouse", "phone", "puzzle", "printer", "play"];
  const [buttonStyle, setButtonStyle] = useState("btn-primary");
  const [icon, setIcon] = useState("mouse");
  const [disabled, setDisabled] = useState(false);
  const [active, setActive] = useState(false);
  const [nbr, setNbr] = useState(1);
  const [buttonObj, setButtonObj] = useState([]);
  const [elementNumber,setElementNumber] = useState(0)

  const createButton = () => {
    let list = {
      Text: buttonValue,
      Style: buttonStyle,
      Icone: icon,
      Disabled: disabled,
    };
    for (let i = 0; i < parseInt(nbr); i++) {
      buttonObj.push(list);
    }
    setButtonObj([...buttonObj]);

    setElementNumber(buttonObj.length)

  };

  console.log(buttonObj);




  const handleDisabled = (e) => {
    setDisabled(e.target.checked);
    // console.log(disabled)
  };
  const handleActive = (e) => {
    setActive(e.target.checked);
    console.log(active);
  };

  return (
    <div>
      <div>
      <div >
        Text :
        <input className="aa"
          onChange={(e) => {
            setButtonValue(e.target.value);
          }}
          type="text"
          value={buttonValue}
        />
      </div>
      <div>
        Style :
        <select
          onChange={(e) => {
            setButtonStyle(e.target.value);
          }}
        >
          {style.map((s) => {
            return (
              <option value={s} key={s}>
                {s}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        Icone :
        <select
          onChange={(e) => {
            setIcon(e.target.value);
          }}
        >
          {icones.map((i) => {
            return (
              <option value={i} key={i}>
                {i}
              </option>
            );
          })}
        </select>
      </div>
      <div className="options">
        <div>
          Disabled
          <input
            onChange={handleDisabled}
            type="checkbox"
            value={disabled}
            name="disabled"
          />
        </div>
        <div>
          Active
          <input
            onChange={handleActive}
            type="checkbox"
            value={active}
            name="active"
          />
        </div>
      </div>

      <div>
        Nombre :
        <input
          onChange={(e) => {
            setNbr(e.target.value);
          }}
          type="number"
          value={nbr}
          min={1}
        />
      </div>
      <div>
        <button onClick={createButton}>Create</button>
      </div>
      </div>
      
      <div>
        <button
          type="button"
          disabled={disabled}
          className={`btn ${buttonStyle}`}
        >
          <i className={`bi bi-${icon}-fill`}></i>&nbsp;{buttonValue}
        </button>
      </div>
      <hr />
      <div>
        <h3>Collection de boutons :</h3>
        <div>
          {buttonObj
            ? buttonObj.map((btn, key) => {
                return (
                  <button
                    disabled={btn.Disabled}
                    type="button"
                    className={`btn ${btn.Style}`}
                    key={key}
                  >
                    <i className={`bi bi-${btn.Icone}-fill`}></i>&nbsp;
                    {btn.Text}
                  </button>
                );
              })
            : null}
        </div>
      </div>
      <div>Nombre d'element : {elementNumber}</div>
    </div>
  );
}

export default ButtonMaker;
