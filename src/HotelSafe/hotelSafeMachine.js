import { PIN_CODE_LENGTH, HotelMachineStates } from "./HotelSafeConstants";

const isDigit = pin => /^\d+$/.test(pin);

const isPinCorrect = state => state.savedPinCode === state.pinCode;

export const clearPin = () => ({ pinCode: "" });

export const pinSubmissionAction = state => {
  if (state.hotelMachineState === HotelMachineStates.UNLOCK) {
    return {
      hotelMachineState: HotelMachineStates.LOCK,
      savedPinCode: state.pinCode,
      ...clearPin()
    };
  }

  if (isPinCorrect(state)) {
    return { hotelMachineState: HotelMachineStates.UNLOCK, ...clearPin() };
  }

  return { hotelMachineState: HotelMachineStates.ERROR, ...clearPin() };
};

export const backSpaceKeyPress = state => {
  if (!state.pinCode) {
    return state;
  }

  return { pinCode: state.pinCode.slice(0, -1) };
};

export const onDigitEntry = (state, input) => {
  if (!isDigit(input)) {
    return null;
  }

  if (state.pinCode.length < PIN_CODE_LENGTH) {
    return { pinCode: state.pinCode + input };
  }

  return null;
};

export const defaultState = "unlock";
