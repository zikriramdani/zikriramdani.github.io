import { initialState } from '../../action/certificates/state';
import { actionType } from '../../action/certificates/type';

export const certificatesReducer = (state = initialState, action) => {
  switch (action.type) {
    // Read
    case actionType.loadCertificates:
      state = {
        ...state,
        certificatesList: action.payload
      };
      return state;
    case actionType.loadCertificatesResetData:
      return initialState;
    default:
      return state;
  }
};

export default certificatesReducer;
