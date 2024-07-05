import { actionType } from '../../action/experiences/type';

// Data Json
import DataExperiences from '../../../assets/data/data-experiences.json';

// Read
export const getListExperiences = () => {
  return (dispatch) => {
    return dispatch(saveListExperiences(DataExperiences));
  };
};

// Read
export const saveListExperiences = (payload) => {
  return {
    type: actionType.loadExperiences,
    payload: payload
  };
};
