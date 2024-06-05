import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  resetAllStates: null,
});

export const resetStatesTypes = Types;
export const resetStatesCreators = Creators;
