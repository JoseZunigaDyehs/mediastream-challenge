import * as Immutable from 'immutable';

export function moviesStates(state = Immutable.fromJS({
  isFetching: false,
  popularMovies:Immutable.fromJS([]),
  error:'',
  moviesFavs:Immutable.fromJS([])
}), action){
  switch(action.type){
    case 'GET_POPULAR_MOVIES_START':
      return state.set('isFetching',true)
    case 'GET_POPULAR_MOVIES_ERROR':
      return state.withMutations(map=>{
        map.set('isFetching',false)
          .set('error',action.error)
      })
    case 'GET_POPULAR_MOVIES_END':
      return state.withMutations(map=>{
        map.set('isFetching',false)
          .set('popularMovies',Immutable.fromJS(action.data))
      })
    case 'ADD_TO_FAV_MOVIE':
      const movie = state.get('popularMovies').filter(mov=>mov.get('id')===action.id).get(0);
      return state.update('moviesFavs', data => data.push(movie));
    default:
      return state;
  }
}