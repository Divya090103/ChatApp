import storage  from "redux-persist/lib/storage"; //give acces to local storage
import { combineReducers } from "redux";
import appReducer from './slices/app'

const rootPersistConfig={
  key:'root',
  storage,
  keyPrefix:"redux",
  // whitelist: [],
  //blacklist:[]
}

const  rootReducer = combineReducers({
  app:appReducer, // app reducer
})
export {rootPersistConfig,rootReducer};