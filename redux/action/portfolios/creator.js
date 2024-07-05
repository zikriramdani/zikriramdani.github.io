import { actionType } from '../portfolios/type';

// Data Json
import DataPortfolios from '../../../assets/data/data-portfolios.json';

// Read
export const getListPortfolios = () => {
  return (dispatch) => {
    return dispatch(saveListPortfolios(DataPortfolios));
  };
};

// Read
export const saveListPortfolios = (payload) => {
  return {
    type: actionType.loadPortfolios,
    payload: payload
  };
};
