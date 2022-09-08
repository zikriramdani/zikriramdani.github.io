import { actionType } from '../../action/skills/type';

// Data Json
import DataSkills from "../../../assets/data/data-skills.json";

// Read
export const getListSkills = () => {
  return (dispatch) => {
    return dispatch(saveListSkills(DataSkills));
  };
};

// Read
export const saveListSkills = (payload) => {
  return {
      type: actionType.loadSkills,
      payload: payload
  };
};