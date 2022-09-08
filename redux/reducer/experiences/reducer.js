import { initialState } from '../../action/experiences/state';
import { actionType } from '../../action/experiences/type';

export const experiencesReducer = ( state = initialState, action ) => {
  switch(action.type) {
    // Read
    case actionType.loadExperiences:
      state = {
        ...state,
        experiencesList: action.payload
      }
      return state
    case actionType.loadExperiencesResetData:
      return initialState
    default:
      return state
  };
};

export default experiencesReducer;