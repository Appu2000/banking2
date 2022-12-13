import { applyMiddleware, createStore ,combineReducers} from "redux";
import thunk from "redux-thunk";
import JWTReducer from "./Reducer/AuthenticationReducer";
import CustomerReducer from "./Reducer/CustomerReducer";
import ManagerReducer from "./Reducer/ManagerReducer";

const rootReducer=combineReducers({
    manager :ManagerReducer,
    customer :CustomerReducer,
    jwt :JWTReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;