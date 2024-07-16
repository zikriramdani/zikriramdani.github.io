import { actionType } from './type';

export const saveListExperiences = (payload) => {
  return {
    type: actionType.loadExperiences,
    payload: payload
  };
};
