import { ADD_NOTE, PERFORM_WITHDRAW } from "../actions/notes.action";

const initialState = {
  2000: 0,
  500: 0,
  200: 0,
  100: 0,
  50: 0,
  20: 0,
  10: 0,
  5: 0,
  2: 0,
  1: 0,
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, [action.note]: state[action.note] + action.value };
    case PERFORM_WITHDRAW:
      return Object.entries(state).reduce(
        (remainingNotes, [note, value], i) => {
          remainingNotes[note] = value - action.notesBreakout[note];
          if (remainingNotes[note] < 0) {
            remainingNotes[note] = 0;
          }
          return remainingNotes;
        },
        {}
      );
    default:
      return state;
  }
};

export default notes;
