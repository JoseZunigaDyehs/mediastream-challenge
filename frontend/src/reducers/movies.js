import * as Immutable from 'immutable';

export function moviesStates(state = Immutable.fromJS({
  modal: false,
  modalData: false,
  modalFunc: false,
  isFetching: false,
  isFetchingModal: false,
  errorModal: '',
  error: ''
}), action){
  switch(action.type){
    case 'SET_GENERAL_STATE':
      return state.set(action.target, action.value);
    case 'LOGOUT':
      return state.set('modal', false);
    case 'SET_MODAL':
      return state.withMutations((map) => {
        map.set('modal', action.slug)
          .set('modalData', Immutable.fromJS(action.data))
          .set('modalFunc', Immutable.fromJS(action.dataFunc))
          .set('isFetchingModal', false)
          .set('errorModal', '')
      });
    case 'SET_FETCHING_MODAL_START':
      return state.withMutations((map) => {
        map.set('isFetchingModal', true)
          .set('errorModal', '')
      })
    case 'SET_FETCHING_MODAL_ERROR':
      return state.withMutations((map) => {
        map.set('isFetchingModal', false)
          .set('errorModal', action.error)
      })
    default:
      return state;
  }
}