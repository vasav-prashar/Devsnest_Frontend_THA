import CardReducer from "./cardReducer";
import { createStore } from "redux";

const store = createStore(CardReducer);

export default store;