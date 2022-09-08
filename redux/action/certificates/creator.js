import { actionType } from '../certificates/type';

// Data Json
import DataCertificates from "../../../assets/data/data-certificates.json";

// Read
export const getListCertificates = () => {
  return (dispatch) => {
    return dispatch(saveListCertificates(DataCertificates));
  };
};

// Read
export const saveListCertificates = (payload) => {
  return {
      type: actionType.loadCertificates,
      payload: payload
  };
};