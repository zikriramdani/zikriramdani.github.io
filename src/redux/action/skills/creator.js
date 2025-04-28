import { actionType } from './type';

// Read
export const saveListSkills = (payload) => {
  return {
    type: actionType.loadSkills,
    payload: payload
  };
};
