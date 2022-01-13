import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AvaliableDenominations from "../Component/AvailableDenominations";
import { ADD_NOTE } from "../store/actions/notes.action";

function Deposit() {
  const [note, setNote] = useState(2000);
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();

  const onNoteChange = (e) => {
    setNote(e.target.value);
  };
  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  const onAdd = () => {
    if (parseInt(value) < 1) {
      alert("Minimum value should be");
      return;
    }
    dispatch({
      type: ADD_NOTE,
      note,
      value: parseInt(value),
    });
  };

  return (
    <div className="box">
      <div className="row">
        <select value={note} onChange={onNoteChange} className="input">
          <option value={2000}>2000</option>
          <option value={500}>500</option>
          <option value={200}>200</option>
          <option value={100}>100</option>
          <option value={50}>50</option>
          <option value={20}>20</option>
          <option value={10}>10</option>
          <option value={5}>5</option>
          <option value={2}>2</option>
          <option value={1}>1</option>
        </select>
        <input
          onChange={onValueChange}
          value={value}
          className={"input"}
          type="number"
          min="0"
          step="1"
        />
        <div onClick={onAdd} className={"smallBtn"}>
          Add
        </div>
      </div>
      <AvaliableDenominations />
    </div>
  );
}

export default Deposit;
