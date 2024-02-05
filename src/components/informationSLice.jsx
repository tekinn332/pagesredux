
const informationReducer = (state = { informations: [] }, action) => {
    switch (action.type) {
      case "ADD_USERNAME":
        return {
          informations: action.payload
        };
      case "ADD_EMAIL":
        return {
          informations: action.payload
        };
      case "ADD_PASSWORD":
        return {
          informations: action.payload
        };
      case "CONFIRMPASSWORD":
        return {
          informations: action.payload
        };
        case "AGE":
            return {
                informations: action.payload
            }
      default:
        return state;
    }
  };
  
  export default informationReducer;