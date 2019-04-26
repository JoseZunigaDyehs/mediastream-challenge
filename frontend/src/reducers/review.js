import * as Immutable from 'immutable';

export function reviewStates(state = Immutable.fromJS({
  isFetching: false,
  reviews: null,
  error:'',
}), action){
  switch(action.type){
    case 'GET_REVIEW_MOVIE_START':
      return state.set('isFetching',true)
    case 'GET_REVIEW_MOVIE_ERROR':
      return state.withMutations(map=>{
        map.set('isFetching',false)
          .set('error',action.error)
      })
    case 'GET_REVIEW_MOVIE_END':
      return state.withMutations(map=>{
        map.set('isFetching',false)
          .set('reviews',Immutable.fromJS(action.data))
      })
    default:
      return state;
  }
}