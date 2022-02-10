//* REDUCERS

const AuthReducer = (state, action) => {
  switch(action.type){
      case 'login_start':
          return {
              loading: true,
              error : false,
          }
      case 'login_success':
          return {
            loading: false,
            error: false,
            user : {...action.payload.user}
          }
      case 'not_connected':
          return {
            loading: false,
            error: false,
          }
      case 'login_error':
          return {
              loading : false,
              error : true,
          }
      case 'logout_error':
          return {
              loading : false,
              error : true,
          }
      case 'logout':
          return {
              loading : false,
              error : false,
          }
      default:
          return state
  }
}

export {AuthReducer};