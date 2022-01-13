import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { priceCalculation } from "../utils/calculations";
import { PERFORM_WITHDRAW } from "../store/actions/notes.action";

function Withdraw() {
  const [value, setValue] = useState(1);
  const [notesBreakout, setNotesBreakout] = useState({});
  
  const dispatch = useDispatch();

  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  const performWithdraw = () => {
    const notesBreakout = priceCalculation(value);
    setNotesBreakout(notesBreakout);
    dispatch({
      type: PERFORM_WITHDRAW,
      notesBreakout
    });
  };

  return (
    <div className="box">
      <div className="row">
        <input
          onChange={onValueChange}
          value={value}
          className={"input"}
          type="number"
          min="0"
          step="1"
        />
        <div onClick={performWithdraw} className={"smallBtn"}>
          Withdraw
        </div>
      </div>
      <div className="row">
        <h3>
          <u>Notes</u>
        </h3>
      </div>
      <div className="row">
        <ul>
          {Object.entries(notesBreakout)
            .reverse()
            .map(([note, copies]) => (
              <li>{`Rs. ${note} X ${copies} = ${note * copies}`}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Withdraw;
