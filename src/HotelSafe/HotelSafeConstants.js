export const CLR_ALL_CODE = "Delete";

export const ENTER_KEY = "Enter";

export const PIN_CODE_LENGTH = 4;

export const BUTTON_SET = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },

  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },

  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },

  { label: "CLR", value: CLR_ALL_CODE },
  { label: "0", value: 0 },
  { label: "↵", value: ENTER_KEY }
];

export const INDICATOR_STATUS = {
  unlock: "lightgreen",
  lock: "red",
  error: "red"
};

export const HotelMachineStates = {
  LOCK: "lock",
  UNLOCK: "unlock",
  ERROR: "error"
};
