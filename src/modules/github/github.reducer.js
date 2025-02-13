import * as types from './github.types'

const initState = {
  login: '',
  phrase: '',
  repos: []
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case types.SET_LOGIN:
      return {...state, login: action.payload.login}
    case types.SET_PHRASE:
      return {...state, phrase: action.payload.phrase}
    case types.SET_REPOS:
      return {...state, repos: action.payload.repos}
    default:
       return state
  }
}

export default reducer
