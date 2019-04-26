import { combineReducers } from 'redux';

import { moviesStates } from './movies';
import { reviewStates } from './review';

export const reducers = combineReducers({
    moviesStates,
    reviewStates
});