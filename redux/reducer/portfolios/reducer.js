import { initialState } from '../../action/portfolios/state';
import { actionType } from '../../action/portfolios/type';

export const portfoliosReducer = ( state = initialState, action ) => {
  switch(action.type) {
    // Read
    case actionType.loadPortfolios:
      state = {
        ...state,
        portfoliosList: action.payload
      }
      return state
    case actionType.loadPortfoliosResetData:
      return initialState
    default:
      return state
  };
};

export default portfoliosReducer;